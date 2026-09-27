// Listings for the Jordanian game industry.
// Edit these arrays to update the page; the markup never needs to change.
//
// studios:      type is 'Studio' or 'Publisher'; tags are extra chips; founded feeds the timeline.
// indies:       status 'soon' marks a developer the source lists as "coming soon" (no website yet).
// universities: kind is the chip shown on the card.
// logo:         the logo file name; it is also the listing's slug in URLs (listing.html?id=<logo>, #studios/<logo>).
// tileBg:       set for logos drawn on their own solid plate (the colour of that plate). The hill
//               draws these inset on its white rooftop signs; cards show every tile the same way.

window.JGC_DATA = {
  // Headline figures for the industry as a whole.
  figures: { companies: '15+', indies: '250+', games: '300+' },

  studios: [
    { name: 'Maysalward', founded: 2003, type: 'Studio', url: 'https://www.maysalward.com', site: 'maysalward.com', logo: 'maysalward' },
    { name: 'BeeLabs', founded: 2013, type: 'Studio', url: 'https://www.beelabs.me/', site: 'beelabs.me', logo: 'beelabs' },
    { name: 'Tamatem', founded: 2013, type: 'Publisher', tags: ['Mobile'], url: 'https://tamatem.co/', site: 'tamatem.co', logo: 'tamatem' },
    { name: 'Koala 4D', founded: 2013, type: 'Studio', url: 'https://koala4d.com/', site: 'koala4d.com', logo: 'koala4d' },
    { name: 'Chick Mania', founded: 2017, type: 'Studio', url: 'https://chickmania.com/', site: 'chickmania.com', logo: 'chickmania' },
    { name: 'Mad Hook', founded: 2018, type: 'Studio', url: 'https://www.madhook.io/', site: 'madhook.io', logo: 'madhook', tileBg: '#0b0000' },
    { name: 'Token Masters', founded: 2014, type: 'Studio', url: 'https://www.token-masters.com/', site: 'token-masters.com', logo: 'token-masters' },
    { name: 'Ambrator Games', founded: 2019, type: 'Studio', url: 'https://ambratorgames.com/', site: 'ambratorgames.com', logo: 'ambrator-games', tileBg: '#050608' },
    { name: 'Shusmo', founded: 2023, type: 'Studio', url: 'https://shusmo.io/', site: 'shusmo.io', logo: 'shusmo' },
    { name: 'Dimensions Games Studio', founded: 2024, type: 'Studio', url: 'https://games.dimensions-studio.com', site: 'games.dimensions-studio.com', logo: 'dimensions-studio' },
    { name: 'Sphereka', founded: 2024, type: 'Studio', url: 'https://jo.my/sphereka', site: 'sphereka.com', logo: 'sphereka', tileBg: '#1f1740' },
    { name: 'Kenda AI', founded: 2024, type: 'Studio', url: 'https://kenda-ai.com/', site: 'kenda-ai.com', logo: 'kenda-ai', tileBg: '#000000' },
  ],

  indies: [
    { name: 'Rasheed Games', url: 'https://play.google.com/store/apps/dev?id=5416631628196808399', site: 'Google Play', logo: 'rasheed-games', tileBg: '#241f1f' },
    // Spelled "Rice Dice" in some places; its logo and URL both say Rise Dice.
    { name: 'Rise Dice', url: 'https://risedice.github.io/', site: 'risedice.github.io', logo: 'rise-dice' },
    { name: 'Twin Power', status: 'soon', logo: 'twin-power', tileBg: '#fee40b' },
    { name: 'Buggy Coders', url: 'https://ibrahim-al-najjar.github.io/BuggyCoders-Website/', site: 'ibrahim-al-najjar.github.io', logo: 'buggy-coders', tileBg: '#000000' },
    { name: 'Weastrals Studio', status: 'soon', logo: 'weastrals-studio', tileBg: '#000000' },
    { name: 'BioMed Squad', url: 'https://jo.my/biomedsquad', site: 'biomedsquad.tech', logo: 'biomed-squad' },
    { name: 'Zunbarak', url: 'https://zunbarak.itch.io/', site: 'zunbarak.itch.io', logo: 'zunbarak' },
    { name: 'Bushra Studio', url: 'https://bushrastudio.com/', site: 'bushrastudio.com', logo: 'bushra-studio' },
    { name: 'Kolide Studio', url: 'https://kolidestudio.com', site: 'kolidestudio.com', logo: 'kolide-studio', tileBg: '#c7352a' },
    { name: 'Zenix Studio', url: 'https://zenixjo.ct.ws', site: 'zenixjo.ct.ws', logo: 'zenix-studio', tileBg: '#0c1f37' },
    { name: 'Remaal', url: 'https://remaal-gameworks.preview.emergentagent.com/', site: 'remaal-gameworks.preview.emergentagent.com', logo: 'remaal', tileBg: '#000000' },
    { name: 'Karaz', url: 'https://studio.karazjo.com', site: 'studio.karazjo.com', logo: 'karaz', tileBg: '#d9d9d9' },
    { name: 'Roxling', logo: 'roxling' },
    { name: 'Yume', url: 'https://yume-game.itch.io/', site: 'yume-game.itch.io', logo: 'yume' },
  ],

  universities: [
    { name: 'Al Hussein Technical University (HTU)', programme: 'Game Design and Development', kind: 'University', url: 'https://www.htu.edu.jo/programs/game-design-and-development/', logo: 'htu' },
    { name: 'SAE Institute Amman', programme: 'Diploma in Games Arts and Animation', kind: 'Institute', url: 'https://jordan.sae.edu', logo: 'sae-jordan' },
    { name: 'Applied Science Private University (ASU)', programme: 'Extended Reality & Games Development Program', kind: 'University', url: 'https://www.asu.edu.jo/en/it/ER-GD/Pages/Overview.aspx', logo: 'asu' },
    { name: 'Yarmouk University', programme: 'Digital Reality and Game Development Program', kind: 'University', url: 'https://it.yu.edu.jo/', logo: 'yarmouk-university' },
    { name: 'Princess Sumaya University for Technology', programme: 'Computer Graphics and Animation', kind: 'University', url: 'https://www.psut.edu.jo/en/program/computer-graphics-and-animation-bsc', logo: 'psut' },
  ],
};
