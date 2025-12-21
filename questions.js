// Questions mode dataset
// Each item is a prompt + the real-world location (lat/lng) that answers it.
// Keep this file similar to locations.js: a single global array.

const questions = [
    {
        question: 'Where was Ada Lovelace born?',
        answer: 'London, United Kingdom',
        fact: 'Ada Lovelace (1815–1852) is often called the first computer programmer for her notes on Charles Babbage\'s Analytical Engine.',
        lat: 51.5074,
        lng: -0.1278
    },
    {
        question: 'Where was Albert Einstein born?',
        answer: 'Ulm, Germany',
        fact: 'Einstein was born in Ulm in 1879; his family later moved to Munich.',
        lat: 48.3984,
        lng: 9.9916
    },
    {
        question: 'Where was Nelson Mandela born?',
        answer: 'Mvezo, South Africa',
        fact: 'Mandela was born in the village of Mvezo in the Eastern Cape and later studied in nearby Mthatha.',
        lat: -31.6119,
        lng: 28.7203
    },
    {
        question: 'Where did the first modern Olympic Games take place (1896)?',
        answer: 'Athens, Greece',
        fact: 'The 1896 Games revived the ancient Olympic tradition and were held in the Panathenaic Stadium.',
        lat: 37.9838,
        lng: 23.7275
    },
    {
        question: 'Where did the Wright brothers achieve the first powered flight (1903)?',
        answer: 'Kitty Hawk, North Carolina, USA',
        fact: 'The first powered flight took place near Kitty Hawk at the Kill Devil Hills dunes in December 1903.',
        lat: 36.0646,
        lng: -75.7050
    },
    {
        question: 'Where was penicillin discovered (1928)?',
        answer: 'London, United Kingdom',
        fact: 'Alexander Fleming noticed the antibiotic effect of Penicillium mold while working at St Mary\'s Hospital in London.',
        lat: 51.5176,
        lng: -0.1739
    },
    {
        question: 'Where is the ancient city of Machu Picchu located?',
        answer: 'Machu Picchu, Peru',
        fact: 'Machu Picchu is an Inca citadel built in the 15th century and later abandoned during the Spanish conquest period.',
        lat: -13.1631,
        lng: -72.5450
    },
    {
        question: 'Where did the 1969 Moon landing mission (Apollo 11) launch from?',
        answer: 'Kennedy Space Center, Florida, USA',
        fact: 'Apollo 11 launched from Launch Complex 39A, built specifically for the Saturn V and the Moon missions.',
        lat: 28.5729,
        lng: -80.6490
    },
    {
        question: 'Where is the Taj Mahal located?',
        answer: 'Agra, India',
        fact: 'The Taj Mahal was commissioned in 1632 by Mughal emperor Shah Jahan as a mausoleum for Mumtaz Mahal.',
        lat: 27.1751,
        lng: 78.0421
    },
    {
        question: 'Where is the Colosseum located?',
        answer: 'Rome, Italy',
        fact: 'The Colosseum (1st century AD) could hold tens of thousands of spectators for public spectacles in ancient Rome.',
        lat: 41.8902,
        lng: 12.4922
    },
    {
        question: 'Where did the eruption of Mount Vesuvius bury Pompeii (79 AD)?',
        answer: 'Pompeii, Italy',
        fact: 'Ash and pumice from Vesuvius preserved buildings and even plaster casts of people, creating a unique time capsule.',
        lat: 40.7497,
        lng: 14.4869
    },
    {
        question: 'Where did the Boston Tea Party take place?',
        answer: 'Boston, Massachusetts, USA',
        fact: 'In 1773, protesters dumped tea into Boston Harbor in opposition to British taxation, escalating colonial tensions.',
        lat: 42.3601,
        lng: -71.0589
    },
    {
        question: 'Where did the French Revolution begin with the storming of the Bastille (1789)?',
        answer: 'Paris, France',
        fact: 'The Bastille was a medieval fortress-prison; its storming became a symbol of revolution and is commemorated on 14 July.',
        lat: 48.8566,
        lng: 2.3522
    },
    {
        question: 'Where is sushi commonly associated with developing into its modern form (nigiri)?',
        answer: 'Tokyo, Japan',
        fact: 'Nigiri sushi is closely linked to Edo (old Tokyo) as a fast food for a growing city in the 1800s.',
        lat: 35.6762,
        lng: 139.6503
    },
    {
        question: 'Where is pizza (as we know it today) commonly associated with originating?',
        answer: 'Naples, Italy',
        fact: 'Naples popularized the flatbread-with-toppings style that evolved into modern pizza; the Margherita story is tied to 1889.',
        lat: 40.8518,
        lng: 14.2681
    },
    {
        question: 'Where did the dish paella originate?',
        answer: 'Valencia, Spain',
        fact: 'Traditional paella developed around Valencia\'s rice-growing regions and was often cooked outdoors over an open fire.',
        lat: 39.4699,
        lng: -0.3763
    },
    {
        question: 'Where did cacao (chocolate) become a major cultural food tradition long before Europe?',
        answer: 'Mesoamerica (near modern Mexico)',
        fact: 'The Maya and Aztecs used cacao in drinks and rituals; cacao beans were even used as a form of currency in some contexts.',
        lat: 19.4326,
        lng: -99.1332
    },
    {
        question: 'Where is the Great Pyramid of Giza located?',
        answer: 'Giza, Egypt',
        fact: 'The Great Pyramid is the oldest of the Seven Wonders of the Ancient World and was built for Pharaoh Khufu around 2600 BC.',
        lat: 29.9792,
        lng: 31.1342
    },
    {
        question: 'Where can you find the Great Wall of China (one famous section near Beijing)?',
        answer: 'Near Beijing, China',
        fact: 'The “Great Wall” is a network of fortifications built over centuries; popular restored sections near Beijing include Mutianyu and Badaling.',
        lat: 40.4319,
        lng: 116.5704
    },
    {
        question: 'Where did the Titanic sink?',
        answer: 'North Atlantic Ocean (near 41.73°N, 49.95°W)',
        fact: 'The wreck lies about 3.8 km deep; it was discovered in 1985 and is slowly deteriorating due to corrosion and bacteria.',
        lat: 41.7325,
        lng: -49.9469
    },
    {
        question: 'Where is the Sydney Opera House located?',
        answer: 'Sydney, Australia',
        fact: 'Its shell-like design by Jørn Utzon became an icon of modern architecture and a UNESCO World Heritage Site.',
        lat: -33.8568,
        lng: 151.2153
    },
    {
        question: 'Where is the Statue of Liberty located?',
        answer: 'New York City, USA',
        fact: 'A gift from France, the statue was dedicated in 1886 and stands on Liberty Island in New York Harbor.',
        lat: 40.6892,
        lng: -74.0445
    },
    {
        question: 'Where was the Rosetta Stone discovered?',
        answer: 'Rashid (Rosetta), Egypt',
        fact: 'The Rosetta Stone helped scholars decipher Egyptian hieroglyphs because it contains the same text in three scripts.',
        lat: 31.4022,
        lng: 30.4175
    },
    {
        question: 'Where did the first successful printing press (Gutenberg) operate?',
        answer: 'Mainz, Germany',
        fact: 'Johannes Gutenberg\'s movable-type printing press in the mid-1400s accelerated the spread of books and ideas across Europe.',
        lat: 49.9929,
        lng: 8.2473
    },
    {
        question: 'Where was Marie Curie born?',
        answer: 'Warsaw, Poland',
        fact: 'Curie later moved to Paris, where she pioneered research on radioactivity and won two Nobel Prizes.',
        lat: 52.2297,
        lng: 21.0122
    },
    {
        question: 'Where was Frida Kahlo born?',
        answer: 'Coyoacán (Mexico City), Mexico',
        fact: 'Frida Kahlo\'s Casa Azul (Blue House) in Coyoacán is now a museum dedicated to her life and art.',
        lat: 19.3550,
        lng: -99.1620
    },
    {
        question: 'Where did the Beatles make their famous first live US TV appearance (Ed Sullivan Show studio)?',
        answer: 'New York City, USA',
        fact: 'Their 1964 appearance helped ignite “Beatlemania” in the United States and drew one of the largest TV audiences of its era.',
        lat: 40.7580,
        lng: -73.9855
    },
    {
        question: 'Where was the first ever FIFA World Cup held (1930)?',
        answer: 'Montevideo, Uruguay',
        fact: 'Uruguay hosted (and won) the 1930 tournament; the final was played at Estadio Centenario in Montevideo.',
        lat: -34.9011,
        lng: -56.1645
    },
    {
        question: 'Where did the “Silicon Valley” tech hub develop?',
        answer: 'San Jose area, California, USA',
        fact: 'The region grew from university research and electronics manufacturing into a global center for software and venture capital.',
        lat: 37.3382,
        lng: -121.8863
    },
    {
        question: 'Where did the 1989 fall of the Berlin Wall take place?',
        answer: 'Berlin, Germany',
        fact: 'The wall divided East and West Berlin from 1961 to 1989 and became a powerful symbol of the Cold War.',
        lat: 52.5200,
        lng: 13.4050
    },

    {
        question: 'Where is Petra, the “rose-red city” carved into rock, located?',
        answer: 'Petra, Jordan',
        fact: 'Petra was a major Nabataean trading hub; its rock-cut architecture and water systems were engineering marvels for a desert city.',
        lat: 30.3285,
        lng: 35.4444
    },
    {
        question: 'Where is Angkor Wat located?',
        answer: 'Siem Reap area, Cambodia',
        fact: 'Originally a Hindu temple and later a Buddhist site, Angkor Wat is the largest religious monument in the world by area.',
        lat: 13.4125,
        lng: 103.8670
    },
    {
        question: 'Where is the ancient Incan city of Cusco located?',
        answer: 'Cusco, Peru',
        fact: 'Cusco was the historic capital of the Inca Empire; many colonial buildings were built atop Incan stone foundations.',
        lat: -13.5319,
        lng: -71.9675
    },
    {
        question: 'Where is the Alhambra palace-fortress located?',
        answer: 'Granada, Spain',
        fact: 'The Alhambra is famous for its intricate Islamic art, geometric patterns, and courtyards—built largely during the Nasrid dynasty.',
        lat: 37.1761,
        lng: -3.5881
    },
    {
        question: 'Where is Chichén Itzá located?',
        answer: 'Yucatán, Mexico',
        fact: 'El Castillo (the Kukulcán pyramid) is aligned so that during equinoxes, shadows form a serpent-like shape on the staircase.',
        lat: 20.6843,
        lng: -88.5678
    },
    {
        question: 'Where is the “Moai” statue culture from?',
        answer: 'Rapa Nui (Easter Island), Chile',
        fact: 'The moai were carved by Polynesian settlers; their transport and construction remain a fascinating engineering mystery.',
        lat: -27.1127,
        lng: -109.3497
    },
    {
        question: 'Where is the “Gateway to the Sahara” city of Timbuktu located?',
        answer: 'Timbuktu, Mali',
        fact: 'Timbuktu became a center of learning and trade in West Africa, with historic manuscripts preserved for centuries.',
        lat: 16.7666,
        lng: -3.0026
    },
    {
        question: 'Where is the Suez Canal located?',
        answer: 'Egypt (between the Mediterranean and the Red Sea)',
        fact: 'Opened in 1869, the Suez Canal dramatically shortened shipping routes between Europe and Asia by avoiding the Cape of Good Hope.',
        lat: 30.0150,
        lng: 32.5800
    },
    {
        question: 'Where is the Panama Canal located?',
        answer: 'Panama (connecting Atlantic and Pacific)',
        fact: 'The canal uses locks to lift ships up to Gatun Lake; it transformed global trade by linking two oceans.',
        lat: 9.0800,
        lng: -79.6800
    },
    {
        question: 'Where did the first successful human heart transplant take place (1967)?',
        answer: 'Cape Town, South Africa',
        fact: 'Dr. Christiaan Barnard performed the first successful transplant at Groote Schuur Hospital in Cape Town.',
        lat: -33.9479,
        lng: 18.4614
    },
    {
        question: 'Where is the Chernobyl nuclear disaster site located?',
        answer: 'Near Pripyat/Chernobyl, Ukraine',
        fact: 'The 1986 disaster led to the creation of an exclusion zone; Pripyat remains one of the most famous abandoned cities.',
        lat: 51.3890,
        lng: 30.0990
    },
    {
        question: 'Where is the “Meeting of Waters,” where two rivers flow side-by-side without mixing for kilometers?',
        answer: 'Near Manaus, Brazil',
        fact: 'Near Manaus, the dark Rio Negro and sandy Solimões run side by side because of differences in temperature, speed, and density.',
        lat: -3.0980,
        lng: -59.9500
    },
    {
        question: 'Where is the Serengeti ecosystem located?',
        answer: 'Tanzania (bordering Kenya)',
        fact: 'The Serengeti is famous for the Great Migration of wildebeest and zebras—one of Earth\'s largest wildlife movements.',
        lat: -2.3333,
        lng: 34.8333
    },
    {
        question: 'Where is the Galápagos Islands archipelago located?',
        answer: 'Ecuador (Pacific Ocean)',
        fact: 'The Galápagos helped inspire Charles Darwin\'s ideas on evolution; many species there are found nowhere else.',
        lat: -0.9538,
        lng: -90.9656
    },
    {
        question: 'Where is the “Northern Lights” city of Tromsø located?',
        answer: 'Tromsø, Norway',
        fact: 'Tromsø lies well above the Arctic Circle and is a popular base for aurora viewing and polar research.',
        lat: 69.6492,
        lng: 18.9553
    },
    {
        question: 'Where is the largest coral reef system on Earth located?',
        answer: 'Great Barrier Reef, Australia',
        fact: 'The Great Barrier Reef is so large it can be seen from space; it\'s a vast ecosystem vulnerable to warming and bleaching.',
        lat: -18.2871,
        lng: 147.6992
    },
    {
        question: 'Where is the “Door to Hell” burning gas crater located?',
        answer: 'Derweze, Turkmenistan',
        fact: 'The Darvaza gas crater has been burning for decades after a drilling accident, creating an eerie natural flame pit.',
        lat: 40.2526,
        lng: 58.4399
    },
    {
        question: 'Where is the Dead Sea located?',
        answer: 'Between Israel/West Bank and Jordan',
        fact: 'The Dead Sea is one of the saltiest bodies of water on Earth and sits at the lowest land elevation on the planet.',
        lat: 31.5590,
        lng: 35.4732
    },
    {
        question: 'Where is Mount Kilimanjaro located?',
        answer: 'Tanzania',
        fact: 'Kilimanjaro is Africa\'s highest mountain and one of the world\'s tallest free-standing volcanoes.',
        lat: -3.0674,
        lng: 37.3556
    },
    {
        question: 'Where is the “Ring of Fire” volcano belt most famously visible as a country of many active volcanoes?',
        answer: 'Indonesia',
        fact: 'Indonesia sits on major tectonic plate boundaries and has more active volcanoes than any other country.',
        lat: -6.2088,
        lng: 106.8456
    },
    {
        question: 'Where is the ancient city of Carthage located (near its ruins today)?',
        answer: 'Near Tunis, Tunisia',
        fact: 'Carthage was a powerful Phoenician city-state and Rome\'s rival in the Punic Wars; its ruins lie near modern Tunis.',
        lat: 36.8529,
        lng: 10.3230
    },
    {
        question: 'Where is the “cradle of jazz” city often associated with the genre\'s early development?',
        answer: 'New Orleans, Louisiana, USA',
        fact: 'New Orleans blended African, Caribbean, and European musical traditions—helping jazz emerge in the early 1900s.',
        lat: 29.9511,
        lng: -90.0715
    },
    {
        question: 'Where is the ancient library city of Alexandria located?',
        answer: 'Alexandria, Egypt',
        fact: 'Ancient Alexandria was a major center of learning in the Mediterranean; the famous Lighthouse of Alexandria once stood here.',
        lat: 31.2001,
        lng: 29.9187
    },
    {
        question: 'Where is the “Stone Town” UNESCO heritage area located?',
        answer: 'Zanzibar City, Tanzania',
        fact: 'Stone Town reflects centuries of Swahili, Arab, Persian, Indian, and European influence in architecture and trade.',
        lat: -6.1659,
        lng: 39.2026
    },
    {
        question: 'Where is the Atacama Desert located?',
        answer: 'Northern Chile',
        fact: 'Parts of the Atacama are among the driest places on Earth; the clear skies also make it a prime astronomy location.',
        lat: -23.6975,
        lng: -70.4170
    },
    {
        question: 'Where is the ancient city of Kyoto located?',
        answer: 'Kyoto, Japan',
        fact: 'Kyoto was Japan\'s imperial capital for over 1,000 years and is known for temples, gardens, and traditional districts.',
        lat: 35.0116,
        lng: 135.7681
    },
    {
        question: 'Where is the “City of Canals” that historically powered European trade and art?',
        answer: 'Venice, Italy',
        fact: 'Built on a lagoon, Venice grew into a maritime republic with immense influence on Mediterranean trade for centuries.',
        lat: 45.4408,
        lng: 12.3155
    },
    {
        question: 'Where is the Hubble Space Telescope control center located?',
        answer: 'Baltimore, Maryland, USA',
        fact: 'The Space Telescope Science Institute in Baltimore schedules Hubble observations and processes its scientific data.',
        lat: 39.3299,
        lng: -76.6205
    },
    {
        question: 'Where is the “Blue Lagoon” geothermal spa located?',
        answer: 'Near Grindavík, Iceland',
        fact: 'The Blue Lagoon formed in a lava field from geothermal plant runoff; its milky-blue water is rich in minerals like silica.',
        lat: 63.8804,
        lng: -22.4495
    }
];
