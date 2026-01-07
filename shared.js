/**
 * Snippit - Shared Utilities
 * ==========================
 * Common helpers and constants used across all pages (home screen and game modes).
 * This file should be loaded before any other Snippit JavaScript files.
 */

// Persisted non-repeating decks (cleared only on reload).
const LOCATION_DECK_KEY = 'snippit.locationDeck';
const QUESTION_DECK_KEY = 'snippit.questionDeck';
const RADAR_DECK_KEY = 'snippit.radarDeck';
const LOCATION_DECK_META_KEY = 'snippit.locationDeckMeta';
const QUESTION_DECK_META_KEY = 'snippit.questionDeckMeta';
const RADAR_DECK_META_KEY = 'snippit.radarDeckMeta';

function getNavigationType() {
    try {
        const entry = performance.getEntriesByType('navigation')[0];
        if (entry && entry.type) return entry.type;

        // Fallback for older browsers.
        // 0 = navigate, 1 = reload, 2 = back_forward, 255 = undefined
        if (performance && performance.navigation && typeof performance.navigation.type === 'number') {
            if (performance.navigation.type === 1) return 'reload';
            if (performance.navigation.type === 2) return 'back_forward';
            if (performance.navigation.type === 0) return 'navigate';
        }

        return 'unknown';
    } catch {
        return 'unknown';
    }
}

function clearDecksOnReload() {
    if (getNavigationType() === 'reload') {
        // Reset the non-repeating decks on a hard refresh.
        sessionStorage.removeItem(LOCATION_DECK_KEY);
        sessionStorage.removeItem(QUESTION_DECK_KEY);
        sessionStorage.removeItem(RADAR_DECK_KEY);
        sessionStorage.removeItem(LOCATION_DECK_META_KEY);
        sessionStorage.removeItem(QUESTION_DECK_META_KEY);
        sessionStorage.removeItem(RADAR_DECK_META_KEY);
    }
}

/**
 * Show a flashy animated popup displaying points earned with multiplier
 * @param {number} basePoints - Base points earned from distance
 * @param {number} multiplier - Speed multiplier (1, 1.5, or 2)
 * @param {number} totalPoints - Final points awarded (basePoints * multiplier)
 */
function showPointsPopup(basePoints, multiplier, totalPoints) {
    // Create container for the popup
    const popup = document.createElement('div');
    popup.className = 'points-popup';
    
    // Create main points display with counting animation
    const pointsDisplay = document.createElement('div');
    pointsDisplay.className = 'points-popup__main';
    
    // Create the points number that will count up
    const pointsNumber = document.createElement('span');
    pointsNumber.className = 'points-popup__number';
    pointsNumber.textContent = '0';
    
    const pointsLabel = document.createElement('span');
    pointsLabel.className = 'points-popup__label';
    pointsLabel.textContent = ' pts';
    
    pointsDisplay.appendChild(pointsNumber);
    pointsDisplay.appendChild(pointsLabel);
    popup.appendChild(pointsDisplay);
    
    // Show multiplier badge if > 1
    if (multiplier > 1) {
        const multiplierBadge = document.createElement('div');
        multiplierBadge.className = 'points-popup__multiplier';
        multiplierBadge.textContent = `×${multiplier} SPEED BONUS`;
        popup.appendChild(multiplierBadge);
        
        // Show breakdown
        const breakdown = document.createElement('div');
        breakdown.className = 'points-popup__breakdown';
        breakdown.textContent = `${basePoints} × ${multiplier}`;
        popup.appendChild(breakdown);
    }
    
    // Add to body
    document.body.appendChild(popup);
    
    // Animate the number counting up
    const duration = 800; // ms
    const startTime = Date.now();
    const startValue = 0;
    const endValue = totalPoints;
    
    function updateNumber() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic for smooth deceleration
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(startValue + (endValue - startValue) * easeProgress);
        
        pointsNumber.textContent = currentValue.toString();
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
    
    // Trigger entrance animation
    requestAnimationFrame(() => {
        popup.classList.add('points-popup--show');
    });
    
    // Remove popup after animation completes
    setTimeout(() => {
        popup.classList.add('points-popup--hide');
        setTimeout(() => {
            popup.remove();
        }, 400);
    }, 2200);
}
