// Company profiles: the listing page's About, Games, people, address and social links.
// Keyed by the listing's slug (its logo name in js/data.js). A listing with no entry here,
// or a field left out, simply shows fewer sections; nothing on the page is filled in for it.
//
// Gathered from public web sources on 2026-09-27 (company sites, app stores, Steam, itch.io,
// press and business directories). Each entry names its main sources in a comment.
//
// tagline:   one line under the name.
// about:     paragraphs for the About section.
// city:      where the listing is based; address: street-level address when published.
// offices:   other offices, outside the headquarters.
// size:      employee range, LinkedIn-style ('2–10', '11–50', '51–200').
// people:    founders and leaders, [{ name, role }].
// platforms: where its games run.
// games:     [{ name, year?, blurb?, platforms?, url?, note? }]; url opens the game's store page.
// social:    { instagram, x, facebook, linkedin, youtube, steam, itch, github, behance }.
// Universities also take programme facts: degree, faculty, since.

(function () {
  'use strict';

  const play = (id) => `https://play.google.com/store/apps/details?id=${id}`;
  const steam = (id) => `https://store.steampowered.com/app/${id}/`;

  window.JGC_PROFILES = {
    /* ───────── Studios & publishers ───────── */

    // maysalward.com, Crunchbase, LinkedIn, Google Play, nourkhrais.com, Maysalward on X.
    maysalward: {
      tagline: 'The Middle East’s first mobile game studio, making Arabic and international games since 2003.',
      about: [
        'Maysalward was founded in Amman in November 2003 by Nour Khrais as the first mobile game company in the Middle East to develop and publish both Arabic and international games. It began by helping Western game companies localise and repackage their games for Arabic-speaking players, and has since moved into making its own.',
        'The studio makes free-to-play and casual mobile games, from original concepts to licensed IPs. Dominoes Pro has passed 50 million downloads across iOS and Android, and its card games include Trix, Tarneeb and Baloot. Since 2016 it has also worked in mobile virtual and augmented reality.',
        'Maysalward is based at King Hussein Business Park in Amman and runs a second studio in the United Kingdom.',
      ],
      city: 'Amman',
      address: '24 King Hussein Business Park, Amman 11183',
      offices: ['Leamington Spa, United Kingdom'],
      size: '11–50',
      people: [{ name: 'Nour Khrais', role: 'Founder & CEO' }],
      platforms: ['iOS', 'Android'],
      games: [
        { name: 'Dominoes Pro', blurb: 'Dominoes offline or online, with more than 50 million downloads.', platforms: ['iOS', 'Android'], url: play('com.maysalward.Dominoes') },
        { name: 'Trix Plus', blurb: 'The Arab card game Trix, with the Complex variant.', platforms: ['Android'], url: play('com.maysalward.TrixComplex') },
        { name: 'Tarneeb', blurb: 'The four-player, two-team bidding card game.', platforms: ['Android'], url: play('com.maysalward.Tarneeb') },
        { name: 'Baloot Sheikh El Koba', blurb: 'The card game Baloot, from the Sheikh El Koba series.', platforms: ['Android'], url: play('com.maysalward.balote') },
        { name: 'Oddbods Hidden Objects VR', blurb: 'A virtual-reality hidden-object game in the Oddbods’ house.', platforms: ['Android'], url: play('com.maysalward.oddbodsvr') },
        { name: 'War Card Game: Bounty Hunter', blurb: 'The classic card game War with a Wild West twist.' },
        { name: 'Dominoes Kids', platforms: ['Android'], url: play('com.maysalward.dominoesKids') },
        { name: 'Puff Out' },
      ],
      social: {
        instagram: 'https://www.instagram.com/maysalward/',
        x: 'https://x.com/maysalward',
        facebook: 'https://www.facebook.com/maysalward/',
        linkedin: 'https://www.linkedin.com/company/maysalward',
        youtube: 'https://www.youtube.com/@Maysalwardgames',
      },
    },

    // beelabs.me, Who's Who in Jordan's ICT, Gust, Google Play, ZoomInfo.
    beelabs: {
      tagline: 'A gaming and animation studio making culturally relevant casual and educational games.',
      about: [
        'BeeLabs is a self-funded gaming and animation services studio founded in Amman in 2013 by Tamer Qarrain. Its mission is to design and develop culturally relevant casual games for mobile, and it makes multilingual casual games and interactive educational apps.',
        'Its Arabic-themed game ShibShib War was singled out by Her Majesty Queen Rania Al Abdullah in a talk at MEDEF in France.',
      ],
      city: 'Amman',
      size: '2–10',
      people: [{ name: 'Tamer Qarrain', role: 'Founder' }],
      platforms: ['iOS', 'Android'],
      games: [
        { name: 'ShibShib War', blurb: 'Oil-hungry aliens invade the Arab world: more than 120 levels across eleven Arab cities, each with its landmarks in the background.', platforms: ['iOS', 'Android'] },
        { name: '2121', blurb: 'A multiplayer educational game that builds civic literacy and active citizenship among young people.', platforms: ['Android'], url: play('com.beelabs.project21') },
        { name: 'FaSolYa', blurb: 'A hands-free musical adventure.' },
        { name: 'Dream’s Knight', blurb: 'An endless runner.' },
        { name: 'The Gnome and Sheep', blurb: 'An interactive story for children aged 3 to 5.' },
      ],
      social: {
        facebook: 'https://www.facebook.com/Beelabsme/',
      },
    },

    // tamatem.co, Wikipedia, PocketGamer.biz, GamesBeat, LinkedIn, PR Newswire.
    tamatem: {
      tagline: 'The leading mobile games publisher for Arabic-speaking players.',
      about: [
        'Tamatem was founded in Amman in 2013 by Hussam Hammo. It partners with studios around the world and publishes their games for the Arab market, translating them and making them culturally relevant for Arabic-speaking players. It was the first Arab company to win investment from Silicon Valley’s 500 Startups, and it is an Endeavor company.',
        'Tamatem has published more than 50 games on iOS and Android, with over 150 million downloads, working with studios in the United States, China, France, South Korea, Bulgaria and Croatia. Fashion Queen alone passed 10 million downloads in the region. In 2019 the World Economic Forum named Tamatem among the 100 Arab start-ups shaping the Fourth Industrial Revolution.',
      ],
      city: 'Amman',
      offices: ['Mountain View, California, United States'],
      size: '51–200',
      people: [
        { name: 'Hussam Hammo', role: 'Founder & CEO' },
        { name: 'Eyad AlBasheer', role: 'COO' },
      ],
      platforms: ['iOS', 'Android'],
      games: [
        { name: 'Fashion Queen', blurb: 'Also known as Hollywood Story; more than 10 million downloads in the region.' },
        { name: 'VIP Baloot' },
        { name: 'VIP Jalsat', blurb: 'An in-depth card game played across the region.' },
        { name: 'Battle of Kings' },
        { name: 'Clash of Empire', year: 2021 },
        { name: 'Girls’ Secrets', year: 2020, blurb: 'A narrative game, made with the Croatian studio Nanobit.' },
        { name: 'Words Island', year: 2020 },
        { name: 'Food Truck Chef', year: 2020 },
        { name: 'Home Design Expert', year: 2020 },
        { name: 'Belote', blurb: 'The Bulgarian studio Casualino’s card game, published in Arabic.' },
        { name: 'Dynasty Blades', blurb: 'EZFun’s role-playing game, published in Arabic as Suqoor Al Ard.' },
        { name: 'Awad The Delivery King', year: 2014 },
        { name: '4 Pics 1 Word', year: 2013 },
        { name: 'Tower Building', year: 2013 },
      ],
      social: {
        instagram: 'https://www.instagram.com/tamatemgames/',
        x: 'https://x.com/tamatemgames',
        facebook: 'https://www.facebook.com/tamatemgames/',
        linkedin: 'https://www.linkedin.com/company/tamatem-inc-',
      },
    },

    // koala4d.com, Google Play, Instagram.
    koala4d: {
      tagline: 'A software studio in Amman making mobile games and apps.',
      about: [
        'Koala 4D launched in Amman in 2013. It builds software, mobile games and apps, and aims for innovative yet cost-effective solutions with close customer service.',
        'Its games and apps on Google Play include the puzzle game Locust, Pieces Puzzle, and Tamreen, a maths quiz app with more than 50,000 downloads.',
      ],
      city: 'Amman',
      address: 'Tla’a Al-Ali, Amman',
      platforms: ['Android'],
      games: [
        { name: 'Locust', blurb: 'Draw knots around trees and plants to lead the locust swarm to eat them all.', platforms: ['Android'], url: play('com.Koala4D.Locust') },
        { name: 'Pieces Puzzle', platforms: ['Android'], url: play('com.Koala4D.PiecesPuzzle') },
        { name: 'Tamreen', blurb: 'Creative maths quizzes, with more than 50,000 downloads.', platforms: ['Android'] },
        { name: 'Repeller' },
      ],
      social: {
        instagram: 'https://www.instagram.com/koala4d/',
      },
    },

    // chickmania.com, PocketGamer.biz, IsaKaba, LinkedIn, Google Play.
    chickmania: {
      tagline: 'A mid-core multiplayer studio and media company, and the maker of Jackaro.',
      about: [
        'ChickMania Entertainment is a games and media company in Amman. It develops and publishes casual, board and mid-core multiplayer games for iOS and Android, and also works in video production and photography.',
        'Its flagship game Jackaro has been live since 2018 and is one of the region’s longest-running multiplayer titles. FameGame: My Influencer Life, made with the Jordanian YouTuber Ahmad Aburob, passed 50,000 installs on its first day, reached 100,000 daily players in its first week and climbed to number one on the iOS charts.',
      ],
      city: 'Amman',
      address: 'Sulaiman Al-Nabulsi Street, Al-Abdali, Amman',
      size: '11–50',
      platforms: ['iOS', 'Android'],
      games: [
        { name: 'Jackaro', year: 2018, blurb: 'The board game for two teams of two, played online with cards and marbles.', platforms: ['Android'], url: play('com.ChickMania.Jackaro') },
        { name: 'FameGame: My Influencer Life', blurb: 'Made with YouTuber Ahmad Aburob; number one on the iOS charts at launch.', platforms: ['iOS', 'Android'], url: play('com.ChickMania.GameOfInfluencer') },
        { name: 'Carrom', blurb: 'An online pool game.', platforms: ['Android'], url: play('com.ChickMania.Carrom') },
        { name: 'Gomat', blurb: 'Drift and drag racing.' },
        { name: 'Huroof Crypto' },
        { name: 'Tribal Knights' },
        { name: 'Wanasa VIP' },
        { name: 'Cars! Boom Boom!' },
      ],
      social: {
        instagram: 'https://www.instagram.com/chickmania.games/',
        facebook: 'https://www.facebook.com/ChickManiaEnt/',
        linkedin: 'https://www.linkedin.com/company/chick-mania-entertainment',
        youtube: 'https://www.youtube.com/c/ChickManiaEntertainment',
        behance: 'https://www.behance.net/chickmaniaent',
      },
    },

    // madhook.io, Mobidictum, PocketGamer.biz, Steam, LinkedIn.
    madhook: {
      tagline: 'An independent studio with 100 million downloads, and the first Arab studio on PlayStation 5.',
      about: [
        'Mad Hook is an independent game studio founded in Amman in 2018 by Hazim Al Hanbali and Ibrahim Al Hasan. It makes localised casual and mid-core games for mobile, PC and console, and grew its team of developers, artists and designers after joining The Core, the incubator at Al Hussein Technical University.',
        'Its mobile hits The Chase, Highway Drifter and Rooftop Run have more than 50 million downloads between them, and the whole portfolio has passed 100 million. In 2019 it was picked for Google’s Indie Games Accelerator in Singapore from more than 1,700 applicants, and it is recognised as the first Arab studio to publish a game on PlayStation 5.',
      ],
      city: 'Amman',
      size: '11–50',
      people: [
        { name: 'Hazim Al Hanbali', role: 'Co-founder' },
        { name: 'Ibrahim Al Hasan', role: 'Co-founder' },
      ],
      platforms: ['iOS', 'Android', 'PC', 'PlayStation'],
      games: [
        { name: 'Highway Drifter', blurb: 'Drifting through Middle Eastern hajwala culture; on PlayStation as Highway Drifter: Hajwala Simulator.', platforms: ['Mobile', 'PS5', 'PS4', 'Steam'] },
        { name: 'Amer Fighting', blurb: 'A family fight for up to six players.', platforms: ['PS5'] },
        { name: 'The Chase', platforms: ['Mobile'] },
        { name: 'Rooftop Run', platforms: ['Mobile'] },
        { name: 'Pro Car Driving Simulator', platforms: ['Mobile'] },
      ],
      social: {
        instagram: 'https://www.instagram.com/madhookgames/',
        x: 'https://x.com/madhookgames',
        facebook: 'https://www.facebook.com/madhookgames/',
        linkedin: 'https://www.linkedin.com/company/madbox-games',
        youtube: 'https://www.youtube.com/@madhook5123',
        steam: 'https://store.steampowered.com/publisher/mad_hook',
      },
    },

    // token-masters.com, Who's Who in Jordan's ICT, Google Play.
    'token-masters': {
      tagline: 'A software company building apps, websites and educational games for children.',
      about: [
        'Token Masters for Software was founded in Amman in 2014. It builds mobile applications, websites and electronic games, and offers creative design.',
        'Its game work ranges from libraries of educational games for children, such as the learning app Julia, to video game development. The company is accredited by NAFES.',
      ],
      city: 'Amman',
      address: 'King Hussein Business Park, Building 7, Office 103, Amman',
      games: [
        { name: 'Julia – Kids Learning App', blurb: 'Learning games for children aged 2 to 8.', platforms: ['Android'], url: play('com.token.juliaworld') },
        { name: 'Arabic Words Writing' },
        { name: 'Xylophone Game' },
      ],
      social: {
        facebook: 'https://www.facebook.com/tokenmasters/',
        linkedin: 'https://www.linkedin.com/company/token-masters',
      },
    },

    // ambratorgames.com, ZoomInfo, Google Play, Instagram, X.
    'ambrator-games': {
      tagline: 'A creative studio making racing games for mobile and other platforms.',
      about: [
        'Ambrator Games is a creative game studio in Amman that develops digital games for mobile devices and other platforms. Its small team includes a founder, a creative director and several 3D artists.',
        'Its game Drift for Life is a mobile racing game in which players customise their cars and race players from around the world.',
      ],
      city: 'Amman',
      people: [{ name: 'Tha’er Ahmad', role: 'CEO' }],
      platforms: ['Android'],
      games: [
        { name: 'Drift for Life', blurb: 'Customise your car and race players from around the world.', platforms: ['Android'], url: play('com.ambratorgames.Hajwalahlife') },
      ],
      social: {
        instagram: 'https://www.instagram.com/ambratorgames/',
        x: 'https://x.com/ambratorgames',
        facebook: 'https://www.facebook.com/AmbratorGames/',
        youtube: 'https://www.youtube.com/channel/UCZu_V16V3iOIJKPjhFQ9Grg',
      },
    },

    // shusmo.io, Google Play, LinkedIn, kolidestudio.com.
    shusmo: {
      tagline: 'We make games that feel like home.',
      about: [
        'Shusmo is a game studio that sets out to craft gaming experiences that bring joy, comfort and adventure to players around the world.',
        'It publishes mobile games, among them 3D48, a new take on the 2048 puzzle made by Kolide Studio, and Idle Block Miner, an idle game about digging through endless underground caverns for treasure.',
      ],
      platforms: ['Android'],
      games: [
        { name: '3D48', blurb: 'The next evolution of 2048.', platforms: ['Android'], url: play('io.shusmo.D48'), note: 'Published by Shusmo, made by Kolide Studio' },
        { name: 'Idle Block Miner', blurb: 'Dig for treasure through endless underground caverns, at an idle pace.', platforms: ['Android'], url: play('io.shusmo.idle.blockcraft') },
      ],
      social: {
        linkedin: 'https://www.linkedin.com/company/shusmo',
        youtube: 'https://www.youtube.com/@ShusmoGames',
        github: 'https://github.com/ShusmoGames',
      },
    },

    // dimensions-studio.com, Google Play, Instagram, LinkedIn.
    'dimensions-studio': {
      tagline: 'Casual games set in real cultural worlds, from Cairo’s streets to Nabataean Petra.',
      about: [
        'Dimensions Games Studio is an indie studio that builds accessible casual and hybrid-casual games on authentic cultural worlds, such as Cairo’s streets, Nabataean Petra and Bedouin survival, with arcade polish.',
        'It describes its aim as leading a new era of culture-based narrative games.',
      ],
      city: 'Amman',
      address: 'Khashafieh Al-Dabaibeh, Sahab, Amman 11383',
      platforms: ['Android', 'Web'],
      games: [
        { name: 'Collect The Fare: Egypt Runner', blurb: 'A runner through Cairo’s streets.' },
        { name: 'Fajjah: Survivor Game', blurb: 'Bedouin survival.' },
        { name: 'Siege: Tower Defense Game' },
        { name: 'Match It: Shape Matching Game', platforms: ['Android'], url: play('com.DimensionsGameStudi.shapeshifter') },
        { name: 'Adventures at JU', platforms: ['Web'], url: 'https://ju.dimensions-studio.com/' },
      ],
      social: {
        instagram: 'https://www.instagram.com/dimensionsgames/',
        linkedin: 'https://www.linkedin.com/company/dimensionsgames',
      },
    },

    // sphereka.com, Steam, ZoomInfo, Instagram.
    sphereka: {
      tagline: 'An IT company working in AI, IoT and software, with its own games on Steam.',
      about: [
        'Sphereka is an IT solutions company in Tla’a Al-Ali, Amman, working in artificial intelligence, IoT, software and web development, and games. Its products include the SpherekaCore ERP.',
        'It has partnered with Steamworks and made Steam the main platform for its games: the psychological horror series Veil of Sanity, whose first chapter came out in April 2025, and Perk Up, a multiplayer deck-building fighting game in which every defeat makes you stronger.',
      ],
      city: 'Amman',
      address: 'Tla’a Al-Ali, Amman',
      size: '11–50',
      platforms: ['PC'],
      games: [
        { name: 'Veil of Sanity: Echoes of the Carnival', year: 2025, blurb: 'Chapter one of a psychological horror series.', platforms: ['Steam'], url: steam(3459210) },
        { name: 'Veil of Sanity: Chapter II – Neuromare', blurb: 'The second chapter.', platforms: ['Steam'], url: steam(3492040) },
        { name: 'Perk Up', blurb: 'A multiplayer deck-building fighter: every time you fall, you gain a new power.', platforms: ['Steam'] },
      ],
      social: {
        instagram: 'https://www.instagram.com/sphereka_official/',
        steam: 'https://store.steampowered.com/franchise/sphereka',
      },
    },

    // kenda-ai.com, F6S, PitchBook, Google Play, X, Instagram.
    'kenda-ai': {
      tagline: 'An AI gaming studio making Arabic learning games for children and teachers.',
      about: [
        'Kenda AI is an AI gaming studio in Amman. It uses handwriting and voice recognition for Arabic, with neural networks that recognise text, maths, shapes and speech, to make learning games for children.',
        'Its platform lets teachers create customised educational games in one click, without programming, so children get a personal learning experience that follows the curriculum. Its backers include BeyondCapital, the GAIA Accelerator, the National Technology Development Program and Takween.',
      ],
      city: 'Amman',
      platforms: ['Android'],
      games: [
        { name: 'Habar: Learn Arabic for kids', blurb: 'Games for early writing and reading that teach the Arabic alphabet.', platforms: ['Android'], url: play('com.KendaAI.HabbarGame') },
        { name: 'Ten Ten', blurb: 'An interactive educational games platform for children and teachers.', platforms: ['Android'], url: play('com.KendaAI.TenTenGame') },
      ],
      social: {
        instagram: 'https://www.instagram.com/kenda_ai/',
        x: 'https://x.com/kenda_ai',
        facebook: 'https://www.facebook.com/kendaaiapp/',
        linkedin: 'https://www.linkedin.com/company/kendaai',
      },
    },

    /* ───────── Indie developers ───────── */

    // risedice.github.io.
    'rise-dice': {
      about: [
        'Rise Dice’s website hosts an endless space adventure set on Mars: flying as an astronaut, the player explores the red planet, dodges obstacles and tries to survive as long as possible.',
      ],
      platforms: ['Web'],
    },

    // buggycoders.itch.io, Google Play.
    'buggy-coders': {
      about: [
        'Buggy Coders is an indie team that publishes its games on itch.io. Its endless runner ChickyRun is also on Google Play.',
      ],
      platforms: ['Android', 'Web'],
      games: [
        { name: 'ChickyRun', blurb: 'A 2D endless runner: a speedy chicken collects eggs, jumps the holes and chases the leaderboard.', platforms: ['Android'], url: play('com.buggycoders.chickyrun') },
        { name: 'Bubble Blitz', blurb: 'Puzzles meet parkour.', platforms: ['itch.io'] },
        { name: 'Khair Mission', blurb: 'A platformer.', platforms: ['itch.io'] },
      ],
      social: {
        itch: 'https://buggycoders.itch.io/',
      },
    },

    // Google Play.
    'weastrals-studio': {
      about: [
        'Weastrals Studio makes casual mobile games. In Wood Reaper, players take the wheel of powerful vehicles to chop down trees, collect wood and grow into a lumberjack entrepreneur.',
      ],
      platforms: ['Android'],
      games: [
        { name: 'Wood Reaper', blurb: 'Chop, collect and build a lumber business with powerful vehicles.', platforms: ['Android'], url: play('com.WeAstrals.WoodReaper') },
      ],
    },

    // PocketGamer Connects Jordan 2024, biomedsquad.tech, Instagram, YouTube.
    'biomed-squad': {
      about: [
        'BioMed Squad is a team of biomedical engineering students and tech enthusiasts in Jordan who bring games into healthcare. The team presented its projects and its vision for gaming in healthcare at Pocket Gamer Connects Jordan 2024.',
      ],
      social: {
        instagram: 'https://www.instagram.com/biomed.squad/',
        facebook: 'https://www.facebook.com/biomed.squad/',
        youtube: 'https://www.youtube.com/@biomedsquad',
      },
    },

    // zunbarak.itch.io.
    zunbarak: {
      about: [
        'Zunbarak publishes on itch.io, where its game is a tactical card football game about helping the Nashama, Jordan’s national team, win the World Cup.',
      ],
      platforms: ['itch.io'],
    },

    // bushrastudio.com, Instagram.
    'bushra-studio': {
      about: [
        'Bushra Studio is an indie studio based in Ma’in, in Madaba.',
      ],
      city: 'Madaba',
      address: 'Ma’in, Madaba',
      social: {
        instagram: 'https://www.instagram.com/bushrastudio.official/',
      },
    },

    // kolidestudio.com, Who's Who in Jordan's ICT 2025, The Gaming Nest.
    'kolide-studio': {
      tagline: 'An independent game and music studio in Amman.',
      about: [
        'Kolide Studio is an independent game and music studio in Amman. It began as a solo project by its founder, Hani, making small experimental games out of a love for addictive game feel and design, and it also offers sound design and music production.',
        'It made 3D48, a mobile reimagining of a classic puzzle game published by Shusmo, the online co-op horror game Lucid Cats and the party game Couch Party, with more titles in development.',
      ],
      city: 'Amman',
      people: [{ name: 'Hani', role: 'Founder' }],
      games: [
        { name: 'Lucid Cats', blurb: 'Online co-op horror extraction: fall asleep into a shared nightmare, loot it, and find the way out to keep what you found.' },
        { name: '3D48', blurb: 'A classic puzzle game, creatively reimagined for mobile.', platforms: ['Android'], url: play('io.shusmo.D48'), note: 'Published by Shusmo' },
        { name: 'Couch Party', blurb: 'A party game.' },
      ],
      social: {
        youtube: 'https://www.youtube.com/@KolideStudio',
      },
    },

    // The Gaming Nest.
    remaal: {
      about: [
        'Remaal Games makes fun games for everyone. It is led by Osama Diab, and in January 2025 its profile on The Gaming Nest listed six projects.',
      ],
      people: [{ name: 'Osama Diab', role: 'Lead' }],
    },

    // karazjo.com.
    karaz: {
      about: [
        'Karaz is a Jordanian digital agency for website development, social media marketing and content creation, and runs a game studio alongside it.',
      ],
    },

    // roxling.com.
    roxling: {
      about: [
        'Roxling is an emerging studio in Madaba led by Ihsan Madaineh. It sets out to design premium digital experiences and to lead the regional sector through creative innovation.',
      ],
      city: 'Madaba',
      people: [{ name: 'Ihsan Madaineh', role: 'Lead' }],
    },

    // yume-game.itch.io.
    yume: {
      about: [
        'Yume makes small games and publishes them on itch.io.',
      ],
      platforms: ['itch.io'],
      games: [
        { name: 'Shine Mine', blurb: 'Tap your way to rare gems in a Victorian mine.', platforms: ['itch.io'] },
        { name: 'Nosy Delivery Guy', platforms: ['itch.io'] },
      ],
    },

    /* ───────── Universities ───────── */

    // htu.edu.jo, TopUniversities.
    htu: {
      about: [
        'Al Hussein Technical University (HTU) stands at the heart of King Hussein Business Park in Amman. It offers associate and bachelor’s degrees in applied engineering and computing through its schools of Engineering Technology, Computing and Informatics, Built Environment Engineering, and Social and Basic Sciences.',
      ],
      city: 'Amman',
      address: 'King Hussein Business Park, Amman',
      social: {
        linkedin: 'https://www.linkedin.com/school/al-hussein-technical-university-htu/',
      },
    },

    // jordan.sae.edu.
    'sae-jordan': {
      about: [
        'SAE Institute Amman is the Jordan campus of the SAE creative media institute. It teaches games design and programming, and animation and visual effects, including the Diploma in Games Arts and Animation.',
      ],
      city: 'Amman',
      address: 'Airport Road, Amman',
      degree: 'Diploma',
    },

    // asu.edu.jo, TopUniversities, Wikipedia.
    asu: {
      about: [
        'Applied Science Private University is a private university in Shafa Badran, in the north of Amman.',
        'Its Extended Reality and Games Development programme began in the 2022–2023 academic year. It pairs the practical use of extended reality technologies with game development, to build new ways for people to interact with each other and with the world as digital media moves into immersive environments.',
      ],
      city: 'Amman',
      address: 'Shafa Badran, Amman',
      degree: 'Bachelor’s',
      faculty: 'Faculty of Information Technology',
      since: '2022–2023',
    },

    // yu.edu.jo, Petra News Agency.
    'yarmouk-university': {
      about: [
        'Yarmouk University is a public university near the centre of Irbid in northern Jordan. Its Faculty of Information Technology and Computer Science has launched a new major in Digital Reality and Game Development.',
        'Jordan’s Ministry of Digital Economy has signed an agreement with the university to set up a game design lab, equipped with the tools for designing and developing electronic games, and to run technical workshops and events there, so that students build practical skills that match the digital job market.',
      ],
      city: 'Irbid',
      faculty: 'Faculty of Information Technology and Computer Science',
    },

    // psut.edu.jo, Wikipedia.
    psut: {
      about: [
        'Princess Sumaya University for Technology (PSUT) is a private, non-profit university owned by the Royal Scientific Society, in El Hassan Science City in Amman.',
        'Its Department of Computer Graphics and Animation, set up in 2006, offers a BSc that the university describes as unavailable at any other Jordanian university. Animation and video game courses are taught in its Rubicon Lab, set up with Rubicon Group Holding.',
      ],
      city: 'Amman',
      address: 'El Hassan Science City, Amman',
      degree: 'BSc',
      faculty: 'King Hussein School of Computing Sciences',
      since: '2006',
    },
  };
})();
