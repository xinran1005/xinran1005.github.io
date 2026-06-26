export const site = {
  name: 'Xinran Han',
  title: 'Xinran Han Portfolio',
  description:
    'Interactive design specialist and independent producer working across video, photography, and design.',
  locale: 'en',
};

export const navItems = [
  {
    title: 'Video',
    href: '/video/',
    image: '/Video.jpg',
    description: 'Narrative, documentary, and experimental moving-image work.',
  },
  {
    title: 'Photography',
    href: '/photography/',
    image: '/Photography.jpg',
    description: 'Albums of places, people, and moments through visual storytelling.',
  },
  {
    title: 'Design',
    href: '/design/',
    image: '/Design.jpg',
    description: 'UI/UX and graphic design projects across digital and print contexts.',
  },
];

export const profile = {
  avatar: '/user_avatar.jpg',
  intro:
    'I am an Interactive Design Specialist and Independent Producer, driven by a love for ongoing innovation, researching digital art domains to uncover more blended creative opportunities.',
};

export const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/xinran-h-03667926b/',
    ariaLabel: 'Xinran Han on LinkedIn',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/reyn.ran/',
    ariaLabel: 'Xinran Han on Instagram',
  },
  {
    label: 'Email',
    href: 'mailto:xinranh100599@gmail.com',
    ariaLabel: 'Email Xinran Han',
  },
];

export const videoProjects = [
  {
    title: 'An Existence That We Can Call Home',
    youtubeId: 'G7zBiNgmKqk',
    role: 'Director / DOP / Editor',
    intro:
      'A documentary poetry video recognized as the 2nd place film for the Poet Laureate City Poems Contest 2023 and screened at the Museum of Vancouver.',
    details: [
      'Adapted from the poem by James Kim, the work reflects on home, displacement, Stanley Park, and the histories carried by land.',
      'Produced at Simon Fraser University School of Interactive Arts and Technology for IAT 344 Moving Images.',
      'Credits include Xinran Han as Director, DOP, and Editor; Minyang Zhang as Assistant; and Delai Gao as Illustrator.',
    ],
    link: 'https://www.youtube.com/watch?v=G7zBiNgmKqk',
  },
  {
    title: 'Butterfly in Stomach',
    youtubeId: '8hXpgYRkxsI',
    role: 'Director / DOP / Editor / Sound',
    intro:
      'A sound sculpture video exploring the phrase "butterflies in your stomach" through heartbeat, wings, red and blue light, and dreamlike motion.',
    details: [
      'Created for Simon Fraser University IAT 340 Sound Design as a sound-for-video assignment.',
      'The project began with spotting, recording, and synchronization, then developed into an emotional study of nervousness, affection, and loss.',
      'The final track combines heartbeat, wind, and dramatic melodic repetition.',
    ],
    link: 'https://www.youtube.com/watch?v=8hXpgYRkxsI',
  },
];

export const photographyAlbums = [
  { id: '1', title: 'Burrard Street', href: '#album-1', albumFolder: '1', description: 'Street scenes along Burrard Street.' },
  { id: '2', title: 'Rainy Windows', href: '#album-2', albumFolder: '2', description: 'Reflections and droplets on glass.' },
  { id: '3', title: 'Portraits', href: '#album-3', albumFolder: '3', description: 'Candid and posed portrait studies.' },
  { id: '4', title: 'Urban Geometry', href: '#album-4', albumFolder: '4', description: 'Lines, patterns, and architectural forms.' },
  { id: '5', title: 'Night Frames', href: '#album-5', albumFolder: '5', description: 'City lights and low-light moments.' },
  { id: '6', title: 'Transit', href: '#album-6', albumFolder: '6', description: 'On buses, trains, and platforms.' },
  { id: '7', title: 'Fragments', href: '#album-7', albumFolder: '7', description: 'Close-ups and abstract details.' },
];

export const designSections = [
  {
    title: 'UI/UX',
    description: 'Digital experience studies across web and app interfaces.',
    projects: [
      {
        title: 'Web Design for Holland Festival',
        image: '/Design.jpg',
        youtubeId: 'XwoyeREdLf4',
        status: 'IAT 235 Information Design',
        description:
          'A six-week project exploring poster design and microsite development for the Holland Festival. The microsite targets users seeking comprehensive artist resources before the festival, emphasizing creative process, artistry, and unique ideas with external links to artist websites.',
        link: 'https://www.youtube.com/watch?v=XwoyeREdLf4',
        linkLabel: 'Open on YouTube',
        details: [
          'Simon Fraser University, School of Interactive Arts and Technology 2023 Fall',
          'Prof: Russell Taylor | TA: Dennis Limbo, Nafira Waili, Paul Brokenshire',
          'Team: Xinran Han, Jenna Han, Honbete Lee, Josh Chang, Aron Aguilera',
          'Art Direction: Wolfgang Weingart | Client: Holland Festival',
        ],
      },
      {
        title: 'Boat',
        image: '/Design.jpg',
        status: 'IAT 445 Immersive Environments',
        youtubeId: 'MrTRE-UvG7s',
        description:
          'A VR horror puzzle game where the player, a fisherman who reels in a strange doll, becomes trapped in thick fog on an anchored boat. Exploring the boat and following clues reveals the truth behind the dolls and an unpredictable ending.',
        link: 'https://www.sfu.ca/siat/showcase/spring-2024-project-showcase/iat-445-boat.html',
        linkLabel: 'Open Project',
        details: [
          'Team: Xinran Han, Walter (Qiaohui) Xu, Ethan Allwood, Ningzhi (Koni) Tai',
          'Blends elements of horror and puzzle-solving to deliver a heart-pounding experience exploring fear and human emotion.',
        ],
      },
    ],
  },
  {
    title: 'Graphic',
    description: 'Print, cover, and motion-support assets for visual communication.',
    projects: [
      {
        title: 'Holland Festival',
        albumFolder: 'p1',
        status: 'Poster Design',
        description:
          'Poster work for Holland Festival',
      },
      {
        title: 'SS Global Streaming & Sourcing Worldwide',
        albumFolder: 'p2',
        status: 'Poster Design',
        description: 'SS Global Streaming & Sourcing Worldwide during The China Import and Export Fair',
      },
      {
        title: '2D Assets in Video',
        image: '/Design.jpg',
        status: 'External media links coming soon',
        description: 'Graphic assets created to support moving-image storytelling.',
      },
    ],
  },
];
