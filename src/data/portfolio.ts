export const site = {
  name: "Xinran Han",
  title: "Xinran Han Portfolio",
  description:
    "Interactive design specialist and independent producer working across video, photography, and design.",
  locale: "en"
};

export const navItems = [
  {
    title: "Video",
    href: "/video/",
    image: "/Video.jpg",
    description: "Narrative, documentary, and experimental moving-image work."
  },
  {
    title: "Photography",
    href: "/photography/",
    image: "/Photography.jpg",
    description:
      "Albums of places, people, and moments through visual storytelling."
  },
  {
    title: "Design",
    href: "/design/",
    image: "/Design.jpg",
    description:
      "UI/UX and graphic design projects across digital and print contexts."
  },
  {
    title: "Art Installation",
    href: "/art-installation/",
    image: "/Photography.jpg",
    description:
      "Immersive and spatial installation works."
  }
];

export const profile = {
  avatar: "/user_avatar.jpg",
  intro:
    "I am an Interactive Design Specialist and Independent Producer, driven by a love for ongoing innovation, researching digital art domains to uncover more blended creative opportunities."
};

export const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/xinran-h-03667926b/",
    ariaLabel: "Xinran Han on LinkedIn"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reyn.ran/",
    ariaLabel: "Xinran Han on Instagram"
  },
  {
  label: "SoundCloud",
  href: "https://soundcloud.com/",
  ariaLabel: "Xinran Han on SoundCloud"
},
{
    label: "Email",
    href: "mailto:xinranh100599@gmail.com",
    ariaLabel: "Email Xinran Han"
  }
];

export const videoProjects = [
  {
    title: "An Existence That We Can Call Home",
    youtubeId: "G7zBiNgmKqk",
    role: "Director / DOP / Editor",
    intro:
      "A documentary poetry video recognized as the 2nd place film for the Poet Laureate City Poems Contest 2023 and screened at the Museum of Vancouver.",
    details: [
      "Adapted from the poem by James Kim, the work reflects on home, displacement, Stanley Park, and the histories carried by land.",
      "Produced at Simon Fraser University School of Interactive Arts and Technology for IAT 344 Moving Images.",
      "Credits include Xinran Han as Director, DOP, and Editor; Minyang Zhang as Assistant; and Delai Gao as Illustrator.",
          "“Home” is a word that is filled with complex emotions. Different people have different understandings. These kinds of feelings are even more conflicting when we try to seek a conclusion ourselves or try to find something similar from other persons, so we decided to stand on our perspective and the perspective of indigenous people who were living in Stanley park. We hope these two slightly different situations can lead our audience to come up with their own answer when they watch our films. ",
          "This documentary is based on the poem “An Existence That We Can Call Home” by poet James Kim. This poem explores the history behind the establishment of the park as one of Vancouver's most famous viewpoints, but only a few people know the history behind this viewpoint. Our team is a group of international students who knows very little about the history of Canada, especially the dark side that is related to the indigenous people. After coming to Vancouver, we were shocked by the report of how the Canadian Indian residential school system works and how indigenous people have been treated during past decades. When our group knows the history of the construction of the park, we feel inexplicably sad while standing on the land, and thinking about the past and future of the people who lost their homes forever. Everyone needs to be in a community, a place that they can call home, and a sense of belonging. For those who have less power, and have been relocated without personal intention, the only thing we can do is protect their stories from being forgotten. As a group of creators that always seek truth, we believe that we should use the skills we learned to memorize those tragedies for those people in minor and vulnerable situations, and we have abilities to do that. ",
          "My team's response combined the creative process with the reflection of me, the director, about my opinion of the definition of home. We were thinking and talking about homes, and we walked around Chinatown and Little Italy to look at people's lives who moved to other countries away from their original homes. Each of them has a unique reason why they moved to another country, might be looking for a new way of living, working hard for their dreams, or leaving their homes unwilling. The people moved to an unfamiliar land, and they formed a new gathering place. We used a clip from “American beauty,\" a garbage bag that flowed with the wind. I think that when people are thinking about where their homes and belongings are, it reminds me of this garbage bag. Walk in circles, repeat, and have no ideas where to go and where the destination is."
    ],
    link: "https://www.youtube.com/watch?v=G7zBiNgmKqk"
  },
  {
    title: "Butterfly in Stomach",
    youtubeId: "8hXpgYRkxsI",
    role: "Director / DOP / Editor / Sound",
    intro:
      'A sound sculpture video exploring the phrase "butterflies in your stomach" through heartbeat, wings, red and blue light, and dreamlike motion.',
    details: [
      'Start with a concept → shoot the video → create a spotting log → record and create the sounds → synchronize the content.',
'Concept: Our concept comes from an English slang term, "butterfly in your stomach".',
'I first saw this description from a movie, Jojo Rabbit in 2019. The main character in this movie is a little boy, and the whole movie is depicted from a child’s perspective. This slang term is not the overall tone of the movie but comes from a very short clip. When the boy had a crush on another girl, he said that it feels like a lot of butterflies fluttering in his stomach. I looked up this slang term after watching the movie, and it’s more like describing a tense mood, like a first date, a wedding day, a job presentation, or before a sporting event. But I like this heartwarming explanation better. Every time I think of this slang term, I’ll think of a human rib (which also looks a lot like a cage) with beautiful butterflies flying around it.',
'After watching the examples from the course, I immediately thought of this long-loved slang term. The sound of a heartbeat, and the sound of a butterfly flying, will be very good video content.',
'This feeling is like “I almost wish we were butterflied and lived but three summer days. There such days with you I could fill with more delight than so common years could ever contain.”',
'Every time I think of this feeling, I think of so many words that I wrote but couldn’t utter (I love the sound of the typewriter, but only I can hear the words written on it.), butterflies flying in a white room like a dream. And the end of this story is, she left. It felt like lots of butterflies dying.',
'Our shot Aesthetics：For video shooting, we chose red and blue jels for lighting. Red is a lot like love, while blue is sadness. For the part of a person\'s shadow, we choose to constantly change the exposure of the shooting to create an uncapturable “dream” sense.',
'The music software we use is Cubasis and Logic Pro. The final music is called “heart”. This song has some repeat melody with the sound of heartbeat and wind. In the part close to the end, there is a little sense of dramatic conflict',
'Hope this track will give you a heartbeat and stomach-churning too.'
    ],
    link: "https://www.youtube.com/watch?v=8hXpgYRkxsI"
  }
];

export interface PhotoAlbum {
  id: string;
  title: string;
  href?: string;
  description: string;
  albumFolder?: string;
  showName?: boolean;
  children?: PhotoAlbum[];
}

export const photographyAlbums: PhotoAlbum[] = [
  {
    id: "landscape",
    title: "Landscape",
    description: "",
    showName: true,
    albumFolder: "Landscape",
    showName: true
  },
  {
    id: "portraits",
    title: "Portraits",
    description: "",
    children: [
      {
        id: "lily-chou-chou",
        title: "It's not about Lily Chou-Chou",
        description: "2023",
        albumFolder: "Portraits/It's not about Lily Chou-Chou"
      },
      {
        id: "green-papaya",
        title: "Smells like the Green Papaya",
        description: "2024",
        albumFolder: "Portraits/Smells like the Green Papaya"
      },
      {
        id: "la-mort-de-ophelia",
        title: "La Mort de Ophelia",
        description: "2023",
        albumFolder: "Portraits/La Mort de Ophelia"
      },
      {
        id: "floating",
        title: "Floating",
        description: "2023",
        albumFolder: "Portraits/floating"
      },
      {
        id: "the-lovers",
        title: "The Lovers",
        description: "2025",
        albumFolder: "Portraits/The Lovers"
      }
    ]
  }
];

export const artInstallationProjects = [
  {
    title: "Exposure (interactive video)",
    youtubeId: "bl8YboQVXxo",
    role: "Artist",
    intro:
      "Our interactive art installation, titled \"Exposure,\" aims to convey a powerful message and engage audiences in a heart-wrenching experience. The name \"Exposure\" was chosen deliberately, as it carries a dual meaning: in photography, it refers to the process of capturing an image, while in Chinese culture, it refers to the revealing of hidden things. Our project seeks to visually expose and express emotions and heartbreak through an interactive video installation.",
    details: [
      "By: Xinran Han, Xiandong Lyu, Ka In Huang", 
      "Course: IAT 443 Interactive Video"
    ],
    link: "https://www.sfu.ca/siat/showcase/spring-2023-project-showcase/explore-the-projects/iat-443-exposure.html",
    photos: ["/Art Installartion/1682377305474.jpg", "/Art Installartion/1682377311570.jpg"]
  }
];

export const designSections = [
  {
    title: "UI/UX",
    description: "Digital experience studies across web and app interfaces.",
    projects: [
      {
        title: "SS Global Streaming & Sourcing Worldwide",
        src: "/Web Design/SS Global Web Design.mp4",
        status: "Web Design, 2025",
        description:
          "SS Global Streaming & Sourcing Worldwide during The China Import and Export Fair",
        details: [
          "Poster design and microsite development for SS Global",
          "Showcasing global streaming and sourcing services during the China Import and Export Fair"
        ]
      },
      {
        title: "Web Design for Holland Festival",
        youtubeId: "XwoyeREdLf4",
        status: "Web Design, 2023",
        description:
          "A six-week project exploring poster design and microsite development for the Holland Festival. The microsite targets users seeking comprehensive artist resources before the festival, emphasizing creative process, artistry, and unique ideas with external links to artist websites.",
        link: "https://www.youtube.com/watch?v=XwoyeREdLf4",
        linkLabel: "Open on YouTube",
        details: [
          "Simon Fraser University, School of Interactive Arts and Technology 2023 Fall",
          "Prof: Russell Taylor | TA: Dennis Limbo, Nafira Waili, Paul Brokenshire",
          "Team: Xinran Han, Jenna Han, Honbete Lee, Josh Chang, Aron Aguilera",
          "Art Direction: Wolfgang Weingart | Client: Holland Festival"
        ]
      }
    ]
  },
  {
    title: "Graphic",
    description:
      "Print, cover, and motion-support assets for visual communication.",
    projects: [
      {
        title: "SS Global Streaming & Sourcing Worldwide",
        albumFolder: "p2",
        status: "Poster Design, 2026",
        description:
          "SS Global Streaming & Sourcing Worldwide during The China Import and Export Fair"
      },
      {
        title: "Holland Festival",
        albumFolder: "p1",
        status: "Poster Design, 2023",
        description: "Poster work for Holland Festival"
      },
      {
        title: "Boat",
        status: "Art director, 2D Assets Designer",
        src: "/VR Guide.mp4",
        description:
          "A VR horror puzzle game where the player, a fisherman who reels in a strange doll, becomes trapped in thick fog on an anchored boat. Exploring the boat and following clues reveals the truth behind the dolls and an unpredictable ending.",
        link: "https://www.sfu.ca/siat/showcase/spring-2024-project-showcase/iat-445-boat.html",
        linkLabel: "Open Project",
        details: [
          "Team: Xinran Han, Walter (Qiaohui) Xu, Ethan Allwood, Ningzhi (Koni) Tai",
          "Blends elements of horror and puzzle-solving to deliver a heart-pounding experience exploring fear and human emotion."
        ]
      },
      {
        title: "Slides Design",
        albumFolder: "Slides",
        status: "slides design",
        description:
          "By: Xinran Han, Mariam Yarkova, Chris Moon, Lynn"
      }
    ]
  }
];
