const INITIAL_LOAD_DELAY_MS = 900;
let initialSpinnerDismissed = false;

function showInitialSpinner() {
    const el = document.getElementById('initialSpinner');
    if (!el) return;
    initialSpinnerDismissed = false;
    el.classList.remove('is-fading-out');
    el.style.display = 'flex';
}

function fadeOutInitialSpinner() {
    if (initialSpinnerDismissed) return;
    const el = document.getElementById('initialSpinner');
    if (!el) {
        initialSpinnerDismissed = true;
        return;
    }

    initialSpinnerDismissed = true;
    el.classList.add('is-fading-out');

    setTimeout(() => {
        el.style.display = 'none';
    }, 420);
}

function showHomeScreen() {
    const home = document.getElementById('homeScreen');
    if (home) home.style.display = 'block';
}

function wireHomeButtons() {
    const endless = document.getElementById('endlessMode');
    const points = document.getElementById('pointsMode');

    const activate = (el, handler) => {
        if (!el) return;
        el.addEventListener('click', handler);
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handler();
            }
        });
    };

    activate(endless, () => {
        showInitialSpinner();
        // Mark that we intentionally entered the game from the home screen.
        sessionStorage.setItem('snippitguessr.startMode', 'endless');
        // Navigate to the game page; it will run its own loading sequence.
        setTimeout(() => {
            window.location.href = 'game.html';
        }, 80);
    });

    activate(points, () => {
        window.alert('Points mode is coming soon.');
    });
}

window.addEventListener('load', () => {
    wireHomeButtons();

    // Always show the loading sequence before presenting the home screen.
    showInitialSpinner();
    setTimeout(() => {
        showHomeScreen();
        fadeOutInitialSpinner();
    }, INITIAL_LOAD_DELAY_MS);
});
