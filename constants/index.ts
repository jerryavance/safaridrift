// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/racing', key: 'racing', label: 'Racing' },
  { href: '/racers', key: 'racers', label: 'Racers' },
  { href: '/gallery', key: 'gallery', label: 'Gallery' },
  { href: '/about', key: 'about', label: 'About' },
  { href: '/contact', key: 'contact', label: 'Contact' },
];

// RACERS DATA
export const RACERS = [
  {
    id: 1,
    name: 'Amanda',
    alias: 'Amanda',
    image: '/assets/images/racer_1.png',
    position: 8,
    bio: 'Fearless on the track, Amanda brings energy and determination to every race.'
  },
  {
    id: 2,
    name: 'Charlene Kyomugisha',
    alias: 'CK1',
    image: '/assets/images/racer_2.png',
    position: 2,
    bio: 'Speed is her language. CK1 drives with precision and passion.'
  },
  {
    id: 3,
    name: 'Ann Dunstan',
    alias: 'Dunstan',
    image: '/assets/images/racer_3.png',
    position: 10,
    bio: 'Strategic and skilled, Dunstan knows how to navigate every corner.'
  },
  {
    id: 4,
    name: 'Joel Steven Ssekyewa',
    alias: 'Steve Jobs',
    image: '/assets/images/racer_4.png',
    position: 4,
    bio: 'Innovation meets speed. Steve Jobs redefines what\'s possible on the track.'
  },
  {
    id: 5,
    name: 'Joshua Mumbere',
    alias: 'Josh The Dev',
    image: '/assets/images/racer_5.png',
    position: 1,
    bio: 'Coding by day, racing by weekend. Josh brings tech precision to the track.'
  },
  {
    id: 6,
    name: 'Feta Deven',
    alias: 'Feta',
    image: '/assets/images/racer_6.png',
    position: 7,
    bio: 'Smooth, calculated, and always ready for the challenge.'
  },
  {
    id: 7,
    name: 'Trevor Kasasa',
    alias: 'Trevor',
    image: '/assets/images/racer_7.png',
    position: 5,
    bio: 'Cool under pressure, Trevor races with style and confidence.'
  },
  {
    id: 8,
    name: 'Eliod Muhangi',
    alias: 'Eliod',
    image: '/assets/images/racer_8.png',
    position: 9,
    bio: 'A natural competitor with an eye for victory.'
  },
  {
    id: 9,
    name: 'Dembe Bruno',
    alias: 'BRUNO',
    image: '/assets/images/racer_9.png',
    position: 6,
    bio: 'Power and performance define Bruno\'s racing style.'
  },
  {
    id: 10,
    name: 'Jerry Vance',
    alias: 'JV',
    image: '/assets/images/racer_10.png',
    position: 3,
    bio: 'Champion of the Lubowa Grand Prix. JV leads with skill and determination.'
  },
];

// RACE STANDINGS (Lubowa Grand Prix)
export const RACE_STANDINGS = [
  { position: 1, racer: 'Joshua Mumbere', alias: 'Josh The Dev', points: 100, fastestLap: '39.412', gap: '_' },
  { position: 2, racer: 'Charlene Kyomugisha', alias: 'CK1', points: 90, fastestLap: '39.367', gap: '18.525' },
  { position: 3, racer: 'Jerry Vance', alias: 'JV', points: 80, fastestLap: '41.312', gap: '29.275' },
  { position: 4, racer: 'Joel Steven Ssekyewa', alias: 'Steve Jobs', points: 70, fastestLap: '43.502', gap: '1 lap' },
  { position: 5, racer: 'Trevor Kasasa', alias: 'Trevor', points: 60, fastestLap: '41.980', gap: '1 lap' },
  { position: 6, racer: 'Dembe Bruno', alias: 'BRUNO', points: 50, fastestLap: '42.475', gap: '1 lap' },
  { position: 7, racer: 'Feta Deven', alias: 'Feta', points: 40, fastestLap: '40.980', gap: '1 lap' },
  { position: 8, racer: 'Amanda', alias: 'Amanda', points: 30, fastestLap: '38.907', gap: '1 lap' },
  { position: 9, racer: 'Eliod Muhangi', alias: 'Eliod', points: 20, fastestLap: '42.817', gap: '2 laps' },
  { position: 10, racer: 'Ann Dunstan', alias: 'Dunstan', points: 10, fastestLap: '55.324', gap: '3 laps' },
];

// GALLERY IMAGES
export const RACE_IMAGES = [
  '/assets/images/race_image_1.png',
  '/assets/images/race_image_2.png',
  '/assets/images/race_image_3.png',
  '/assets/images/race_image_4.png',
  '/assets/images/race_image_5.png',
  '/assets/images/race_image_6.png',
  '/assets/images/race_image_7.png',
  '/assets/images/race_image_8.png',
  '/assets/images/race_image_9.png',
  '/assets/images/race_image_10.png',
  '/assets/images/race_image_11.png',
  '/assets/images/race_image_12.png',
];

export const GROUP_IMAGES = [
  '/assets/images/group_photo_1.png',
  '/assets/images/group_photo_2.png',
  '/assets/images/race_girlies.png',
  '/assets/images/race_line_up_poster_1.png',
  '/assets/images/race_line_up_poster_2.png',
];

// INITIATIVES
export const INITIATIVES = [
  {
    icon: '🏎️',
    title: 'SafariDrift Pro Racing UG',
    description: 'Uganda\'s first professional karting-to-Formula-One movement, uniting racers and fans across tracks like Bugolobi, Lubowa, and Busika.',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: '🏔️',
    title: 'Mountaineering & Adventure',
    description: 'Taking Africa\'s peaks, valleys, and untamed trails to the world through organized expeditions and adventure tourism.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: '✈️',
    title: 'Tours & Travel Services',
    description: 'Reimagining travel through digital platforms that connect explorers to Africa\'s wonders with seamless booking and experiences.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '🚗',
    title: 'Motoring & Car Culture',
    description: 'Reviving Uganda\'s automotive spirit through car shows, dedicated sales platforms, and vibrant community engagement.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '🛩️',
    title: 'Aviation & Charter',
    description: 'Expanding to private air travel and aircraft chartering with seamless digital integration for premium experiences.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: '💻',
    title: 'Safari Applications',
    description: 'Building next-generation apps that make exploring Africa as effortless as it is thrilling with cutting-edge travel technology.',
    color: 'from-yellow-500 to-orange-500'
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Racing', href: '/racing' },
      { label: 'Racers', href: '/racers' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Our Initiatives',
    links: [
      { label: '🏎️ Pro Racing UG', href: '/racing' },
      { label: '🏔️ Expeditions', href: '/about' },
      { label: '✈️ Tours & Travel', href: '/about' },
      { label: '🚗 Car Culture', href: '/about' },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Co-Founder', value: '+256 786 493685' },
    { label: 'Co-Founder', value: '+256 700 503508' },
    { label: 'Email', value: 'safaridrifting@gmail.com' },
  ],
};

export const SOCIALS = {
  title: 'Follow Us',
  links: [
    { icon: '/facebook.svg', href: 'https://www.tiktok.com/@safaridrifting', label: 'TikTok' },
    { icon: '/instagram.svg', href: 'https://www.instagram.com/safaridrift', label: 'Instagram' },
    { icon: '/twitter.svg', href: 'https://x.com/safaridrift', label: 'Twitter' },
    { icon: '/youtube.svg', href: 'https://www.tiktok.com/@safaridrifting', label: 'TikTok' },
  ],
};