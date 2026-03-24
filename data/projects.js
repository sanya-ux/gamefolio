/* ===========================================
   Main Projects Data
   This file combines all project modules
   
   NOTE: Each project has its own file in:
   - data/projects/threadspace.js
   - data/projects/vishwas.js
   - data/projects/doromind.js
   
   Each artwork has its own file in:
   - data/artworks/artwork1.js
   
   Add new projects/artworks by creating new files!
   =========================================== */

const projects = {

  doromind: {
    id: 'doromind',
    title: 'DoroMind — Productivity App Redesign',
    hoverTitle: 'Productivity App | UX Design',
    timeline: '2026',
    keywords: 'UX Design, Pomodoro Timer',
    softwares: 'Figma',
    //tagline: 'Small habits, big clarity',
    cover: 'images/doromind.jpg',
    content: [
      { type: 'centertext', level: 2, text: 'This project is an exploration of calm productivity, enabling students to plan, focus, and reflect on their effort through a minimal and supportive interface.' },
      { type: 'image', src: 'projects/doromind/images/doro 11.jpg' },
      { type: 'quote', text: 'The intent was to rework both function and aesthetic to improve clarity, usability, and long-term engagement.' },
      //{ type: 'heading', level: 3, text: 'The Challenge' },
      { type: 'spacing', space: 16 },
      { type: 'card', class: 'color-doro', title: 'The Challenge', text: 'Design a focused, low-friction Pomodoro experience that helps students manage long study hours, plan tasks ahead, and stay motivated—without overwhelming them.' },
      // { type: 'heading', text: 'Product Strategy' },
      { type: 'card', class: 'color-doro', title: 'Product Strategy', text: 'Prioritize quick entry into focus sessions, meaningful task organization, and motivation through subtle rewards—balancing productivity with mental ease.' },
      { type: 'spacing', space: 16 },
      { type: 'image', src: 'projects/doromind/images/doro 8.jpg' },
      //{ type: 'paragraph', text: 'We chose soft, calming colors to evoke tranquility.' },
      { type: 'gallery2', images: ['projects/doromind/images/doro 12.jpg', 'projects/doromind/images/doro 9.jpg'], columns: 2 },
      { type: 'heading', text: 'Key Features' },
      {
        type: 'list', ordered: false, items: [
          'Focused Sessions- Minimal & focused UI',
          'Actionable Task Cards- Complete, move, delete, filter',
          'Progress Insights- Clear daily & weekly tracking',
          'Streaks to build Build consistency',
          'Gentle motivation & realistic daily targets',
          'White Noise — Distraction-free focus'
        ]
      },
      { type: 'spacing', space: 16 },
      { type: 'centertext', text: 'Research and interviews revealed that students struggle to plan weekly tasks and track long study hours. Existing apps either lack depth or overload users with features, reducing long-term engagement.' },
      { type: 'spacing', space: 16 },
      { type: 'image', src: 'projects/doromind/images/user flow.png' },
      { type: 'image', src: 'projects/doromind/images/user persona.jpg' },
      { type: 'image', src: 'projects/doromind/images/design guide.png' },
      { type: 'spacing', space: 16 },
      { type: 'heading', text: 'Design Consistency' },
      { type: 'paragraph', text: 'A dark, minimal palette paired with a calm visual hierarchy reduces cognitive load and keeps the interface effortless, distraction-free, and easy to return to.' },
      { type: 'image', src: 'projects/doromind/images/doro 3.jpg' },
      { type: 'image', src: 'projects/doromind/images/doro 14.jpg' },
      { type: 'spacing', space: 32 },
      { type: 'gallery2', images: ['projects/doromind/images/doro 6.jpg', 'projects/doromind/images/doro 5.jpg'], columns: 2 },
      { type: 'centertext', text: 'The analytics screen delivers meaningful daily and weekly focus insights for realistic self-tracking, while the task list uses priority-based, action-driven cards to support structured and flexible planning.' },
      { type: 'image', src: 'projects/doromind/images/doro 4.jpg' },
      { type: 'image', src: 'projects/doromind/images/doro 2.jpg' }, { type: 'gallery2', images: ['projects/doromind/images/doro 13.png', 'projects/doromind/images/doro 10.jpg'], columns: 2 },
      // { type: 'quote', text: 'The new identity feels both timeless and fresh.', author: 'CEO, Doromind' },
      { type: 'spacing', space: 16 },
      { type: 'centerheading', text: 'Focus, designed with restraint.' },
      { type: 'spacing', space: 64 }
    ]
  },

  threadspace: {
    id: 'threadspace',
    title: 'ThreadSpace — VR Prototyping',
    hoverTitle: 'VR Prototyping',
    timeline: '2024',
    keywords: 'Instructional Design, Virtual Reality',
    softwares: 'Figma, Blender',
    //tagline: 'Upcycle, stitch, and style— give your old clothes a second chance',
    image: 'images/threadspace.jpg',
    description: 'ThreadSpace is a VR experience that reimagines how people engage with upcycling and textile crafts. Users step into an immersive workshop environment where they can stitch, cut, and redesign garments using intuitive hand-tracked interactions. The project explores how spatial computing can make sustainable fashion accessible and joyful.',
    content: [
      { type: 'quote', text: 'Upcycle, stitch, and style- give your old clothes a second chance' },
      { type: 'image', src: 'projects/threadspace/images/tscoverlight.jpg' },// caption: 'Early interface sketches' },
      { type: 'centerheading', text: 'An intuitive, immersive environment for players to explore sewing basics, select tools, and create custom items like wrist warmers and much more.' },
      { type: 'spacing', space: 16 },
      { type: 'imagestretch', src: 'projects/threadspace/images/designprocess.jpg' },// caption: 'Early interface sketches' },      
      { type: 'spacing', space: 32 },
      { type: 'card', class: 'color-threadsp', title: 'Problem Space', text: 'Learning to sew shouldn’t feel like watching from the sidelines. Yet most platforms reduce making to steps on a screen.' },
      { type: 'spacing', space: 16 },
      { type: 'heading', level: 3, text: 'Bridging the Gaps' },
      {
        type: 'list', ordered: false, items: ['Expanding beyond basic projects with a diverse range of creative, meaningful upcycling experiences.',
          'Embedding sustainability at the core- not as a feature, but as a philosophy.',
          'Replacing rigid, passive instructions with immersive, hands-on control and guided interaction.',
          'Delivering contextual tips in real time to support confident making.'
        ]
      },
      { type: 'spacing', space: 16 },
      { type: 'image', src: 'projects/threadspace/images/moodboard.jpg', caption: 'Moodboard & Environment Design Reference' },
      { type: 'spacing', space: 16 },
      { type: 'heading', text: 'Inside the Experience' },
      {
        type: 'list', ordered: false, items: [

          'Hands-On Foundations - Learn essential skills like cutting, stitching, and thread matching through guided, interactive practice — not passive watching.',
          'Playful Tool Exploration- Experiment with needles, stitch types, and materials in a safe, exploratory environment.',
          'Project-Based Learning- Create functional pieces such as mini oven mitts, coin pouches, wrist warmers, and beyond.',
          'Immersive Studio Desk- Work within a cozy, interactive sewing space designed to feel tactile and grounded.',
          'Progressive Skill Building- Gradually unlock advanced creations like patchwork buckets and fabric trays as your confidence grows.',]
      },

      { type: 'spacing', space: 16 },
      { type: 'imagebig', src: 'projects/threadspace/images/taskflow.jpg' },
      { type: 'spacing', space: 32 },
      { type: 'imagebig', src: 'projects/threadspace/images/IA.jpg', caption: 'Information Architecture' },
      { type: 'spacing', space: 48 },
      { type: 'imagebig', src: 'projects/threadspace/images/wireframing.png', caption: 'Wireframing' },
      { type: 'spacing', space: 32 },
      { type: 'imagebig', src: 'projects/threadspace/images/UI Kit.png' },
      { type: 'spacing', space: 16 },
      { type: 'gallery2', images: ['projects/threadspace/images/VR Guidelines.jpg', 'projects/threadspace/images/environment.jpg'], columns: 2 },
      { type: 'centertext', text: 'The VR layout follows a clear spatial grid, positioning key elements within comfortable viewing zones for intuitive interaction. A diegetic desk workspace sits at torso level, with tools placed upfront, projects slightly to the right, and the guiding avatar gently positioned to the left- creating a balanced and immersive making environment.' },
      { type: 'imagemedium', src: 'projects/threadspace/images/avatar.jpg', caption: '3D Avatar Design in Blender' },
      { type: 'centerheading', text: 'Microinteractions' },
      { type: 'centertext', text: 'Every action responds — from subtle haptic cues to visual highlights that affirm correct movements. Small feedback moments transform each step into a satisfying, confidence-building win.' },
      { type: 'imagemedium', src: 'projects/threadspace/images/HE.jpg', caption: 'Usability Evaluation' },
      { type: 'centerheading', text: 'Video Prototype' },
      //{type: 'video', src: 'projects/threadspace/images/ts_vid.mp4' },
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/GN2DhsocK5g?si=IxPScbYoN542w47B'
      },
      { type: 'spacing', space: 32 },
      { type: 'centerheading', text: 'Immersive Making, Reimagined' },
      { type: 'spacing', space: 64 }
    ]
  },

  Roopro: {
    id: 'Roopro',
    title: 'Roop Ro Rajasthan',
    hoverTitle: 'VR Narrative Game',
    timeline: 'Jan 2025 -June 2025',
    keywords: 'Virtual Reality, Environment Design',
    softwares: 'Figma, Blender, Godot',
    //tagline: 'Upcycle, stitch, and style— give your old clothes a second chance',
    image: 'projects/essays/vr_roopro.png',
    description: 'ThreadSpace is a VR experience that reimagines how people engage with upcycling and textile crafts. Users step into an immersive workshop environment where they can stitch, cut, and redesign garments using intuitive hand-tracked interactions. The project explores how spatial computing can make sustainable fashion accessible and joyful.',
    content: [
      { type: 'centerheading', text: 'Designing an Immersive Folk Narrative in VR' },
      { type: 'spacing', space: 16 },
      { type: 'centertextwide', text: '<b>Roop Ro Rajasthan</b> is a VR experience that explores how immersive design can support <b>cultural preservation</b>. It reinterprets the traditional paṛ storytelling form into an interactive, spatial narrative where players engage with folklore through exploration and environmental cues.' },
      { type: 'centertextwide', text: 'The project focuses on translating cultural research into intuitive interactions, balancing authenticity with a stylized visual language inspired by Rajasthani architecture and landscapes. Iterative VR prototyping informed key decisions around navigation, storytelling flow, and player engagement.' },
      { type: 'spacing', space: 16 },

      { type: 'imagestretch', src: 'projects/roopro/ss6.png' },

      { type: 'centerheading', text: 'Opportunity' },
      { type: 'quote', text: 'The Pābūjī epic, traditionally performed by Bhopas using paṛ paintings, is in decline. Performances are shifting from cultural rituals to tourist-oriented entertainment. Limited interactive or immersive mediums exist to preserve and engage younger audiences' },
      { type: 'spacing', space: 16 },
      {
        type: 'row',
        left: [
          { type: 'heading', level: 3, text: 'Why VR?' },
          {
            type: 'list',
            ordered: false,
            items: [
              'First-person immersion to deepen emotional connection with Rajasthani folklore',
              'Spatial audio enables guided storytelling through localized Bhopa-style narration',
              '“Spiritual vision” mechanic to reveal past events and hidden cultural layers',
              'Supports the multi-sensory nature of the paṛ tradition (visual + oral)',
              'Enables intuitive, embodied interactions (scrolls, instruments, native combat)'
            ]
          }
        ],
        right: [
          { type: 'heading', level: 3, text: 'Design Goals' },
          {
            type: 'list',
            ordered: false,
            items: [
              'Create engaging gameplay through exploration-driven puzzles',
              'Translate cultural narratives into interactive systems, not just visuals',
              'Maintain authenticity while adapting for a modern, immersive medium',
              'Build a cohesive visual style that enhances storytelling and presence',
              'Design a rich, interactive world that encourages discovery and replayability'
            ]
          }
        ]
      },
      { type: 'spacing', space: 32 },
      { type: 'centerheading', text: 'Timeline' },
      { type: 'imagestretch', src: 'projects/roopro/gant.png' },
      { type: 'spacing', space: 32 },
      { type: 'heading', text: 'Gameplay loop' },
      { type: 'image', src: 'projects/roopro/loop.jpg' },
      { type: 'spacing', space: 32 },
      { type: 'heading', text: 'Key interactions' },
      {
        type: 'list',
        ordered: false,
        items: [
          '<strong>Unlocking Systems</strong> \u2013 Discover physical keys and use slingshot activation to open pathways, doors, and sacred chambers',
          '<strong>Traversal & Movement</strong> \u2013 First-person navigation with climbing and jumping to access terrain, structures, and hidden spaces',
          '<strong>Environmental Puzzles</strong> \u2013 Interact with cultural elements (chakki, ritual vessels, symbolic patterns) to solve context-based challenges',
          '<strong>NPC Dialogue</strong> \u2013 Engage with Bhopas and villagers through riddles, metaphor, and fragmented storytelling to gain hints and narrative',
          '<strong>Resource Exchange</strong> \u2013 Collect fruits (mango, khair) to trade, trigger story events, and unlock regions/artifacts',
          '<strong>Narrative Collection</strong> \u2013 Locate and assemble sacred slabs to reconstruct the Pabuji epic and drive progression'
        ]
      },
      { type: 'spacing', space: 32 },
      { type: 'heading', text: 'Genre & Game References' },
      { type: 'gallery3', images: ['projects/roopro/ref1.jpg', 'projects/roopro/ref2.jpg', 'projects/roopro/ref3.jpg'], captions: ['Red Dead Redemption 2- Open World in VR', 'Death\'s Door - Art and Asset Development', 'House of Da Vinci VR - Intuitive Interaction design and puzzle-based mechanics in VR '], columns: 3 },
      { type: 'spacing', space: 32 },
      { type: 'heading', text: 'Quick Visualisation' },
      { type: 'gallery2', images: ['projects/roopro/SB4.jpg', 'projects/roopro/SB5.jpg'], columns: 2 },
      { type: 'spacing', space: 32 },
      { type: 'heading', text: 'Final Visualisation' },
      { type: 'gallery3', images: ['projects/roopro/SB1.jpg', 'projects/roopro/SB2.jpg', 'projects/roopro/SB3.jpg'], columns: 3 },
      { type: 'spacing', space: 32 },
      { type: 'heading', text: 'Map layout logic' },
      { type: 'imagemedium', src: 'projects/roopro/map.png', caption: 'Player Journey' },
      { type: 'imagemedium', src: 'projects/roopro/map2.png' },
      { type: 'spacing', space: 16 },
      { type: 'paragraph', text: 'The player journey in Roop Ro Rajasthan is structured as a gradual spatial progression that introduces core mechanics, narrative elements, and symbolic interactions through exploration. It blends onboarding with discovery, allowing players to learn through the environment rather than explicit instruction.' },
      { type: 'paragraph', text: 'The experience prioritizes curiosity, environmental cues, and culturally grounded interactions, guiding players from initial orientation to early puzzle-solving while establishing narrative context.' },
      { type: 'spacing', space: 32 },
      { type: 'heading', text: 'Experience Flow' },
      { type: 'image', src: 'projects/roopro/flow1.png', caption: 'Cinematic for folklore intro' },
      { type: 'spacing', space: 16 },
      { type: 'image', src: 'projects/roopro/flow2.png', caption: 'Gameplay flow' },
      { type: 'spacing', space: 32 },
      { type: 'heading', text: 'Initial prototyping in bezi' },
      { type: 'paragraph', text: 'Early concepts were tested in Bezi using low-fidelity environments to validate spatial layout, navigation, and core interactions. This enabled quick iteration on player flow before detailed asset development.' },
      { type: 'image', src: 'projects/roopro/ss6.png', caption: 'Bezi prototype' },
      { type: 'spacing', space: 16 },
      { type: 'image', src: 'projects/roopro/ss7.png', caption: 'quick layouting in blender' },
      { type: 'spacing', space: 64 },
      { type: 'heading', text: 'Visual System & Art Direction' },
      { type: 'paragraph', text: 'Each curated board provided a tangible reference framework to ensure coherence across design decisions, supporting everything from environment modeling to character and UI development.' },
      { type: 'spacing', space: 32 },
      { type: 'heading', level: 3, text: 'Moodboarding' },
      { type: 'image', src: 'projects/roopro/moodboard/miro.gif' },
      { type: 'spacing', space: 32 },
      { type: 'heading', level: 3, text: 'Style decisions' },
      { type: 'paragraph', text: 'Initially exploring realistic renderings, the visual style transitioned into stylization, culminating in a cel-shaded aesthetic. This move allowed hand-painted textures and vibrant cultural symbolism to blend seamlessly into VR spaces, echoing the artistic lineage of Rajasthani folk art.' },
      { type: 'image', src: 'projects/roopro/ss3.png' },
      { type: 'spacing', space: 32 },
      { type: 'heading', level: 3, text: 'Color, lighting, materials' },
      { type: 'image', src: 'projects/roopro/moodboard/color.jpg', caption: 'Miro board' },
      { type: 'spacing', space: 32 },
      { type: 'heading', text: 'Character designs' },
      { type: 'gallery3', images: ['projects/roopro/roop3.jpg', 'projects/roopro/roop2.jpg', 'projects/roopro/roop.jpg'], columns: 3 },
      { type: 'spacing', space: 32 },
      { type: 'heading', text: 'Asset & Character Design' },
      { type: 'imagebig', src: 'projects/roopro/assets.png' },
      { type: 'spacing', space: 16 },
      { type: 'paragraph', text: '3D assets were developed using Blender, Houdini, and Substance Painter, and integrated into the Godot engine for implementation.' },
      { type: 'spacing', space: 32 },
      { type: 'heading', text: 'UI Design' },
      { type: 'paragraph', text: 'UI concepts were designed in Figma to explore layout, interaction patterns, and visual language for the VR experience.' },
      { type: 'spacing', space: 16 },
      { type: 'image', src: 'projects/roopro/ui1.jpg' },
      { type: 'image', src: 'projects/roopro/ui2.jpg' },
      { type: 'image', src: 'projects/roopro/ui3.jpg' },
      { type: 'image', src: 'projects/roopro/ui4.jpg' },
      { type: 'imagebig', src: 'projects/roopro/ui5.png' },
      { type: 'spacing', space: 64 },
      { type: 'heading', text: 'Interaction Design & Feedback' },
      { type: 'gallery2', images: ['projects/roopro/gifs/charpai.gif', 'projects/roopro/gifs/slingshot1.gif', 'projects/roopro/gifs/weapons.gif', 'projects/roopro/gifs/zone1.gif'], columns: 3 },
      { type: 'spacing', space: 16 },
      {
        type: 'row',
        left: [
          { type: 'heading', level: 4, text: 'Controller Mapping' },
          {
            type: 'list',
            ordered: false,
            items: [
              'Right Hand: Action and tool use (grab, shoot, rotate)',
              'Left Hand: Inventory and inspection (collectibles, containers)',
              'Two-Hand Gestures: Used for actions like climbing or opening gates'
            ]
          },
          { type: 'heading', level: 4, text: 'Diegetic UI & Guidance' },
          {
            type: 'list',
            ordered: false,
            items: [
              'Onboarding Scroll: Physical scroll used to introduce controls and objectives',
              'In-World Prompts: Hints delivered through NPC dialogue, carvings, and objects',
              'Text Frames: Instructions styled using traditional visual motifs'
            ]
          },
          { type: 'heading', level: 4, text: 'Audio Feedback' },
          {
            type: 'list',
            ordered: false,
            items: [
              'Ambient Sound: Environmental cues for mood and spatial awareness',
              'NPC Voice: Guides progression through dialogue and hints',
              'Action Cues: Sound feedback for interactions (e.g., slingshot, puzzle completion)'
            ]
          }
        ],
        right: [
          { type: 'image', src: 'projects/roopro/initial controls.jpg' },
          { type: 'spacing', space: 16 },
          { type: 'image', src: 'projects/roopro/gifs/matka.gif' }
        ]
      },
      { type: 'spacing', space: 32 },

      { type: 'heading', text: 'Challenges & Learnings' },
      {
        type: 'list',
        ordered: false,
        items: [
          'Balancing cultural authenticity with interactive gameplay required continuous iteration',
          'Translating a linear oral narrative into a spatial, non-linear experience was complex',
          'Ensuring intuitive interactions in VR highlighted the need for early prototyping and testing',
          'Maintaining visual consistency across diverse assets within a short timeline was challenging',
          'Performance optimization and cross-platform compatibility require early planning',
          'Guiding the player without explicit UI relied heavily on environmental cues and NPC design',
          'Designing culturally rooted puzzles required simplifying symbols without losing meaning',
          'Limited scope required prioritizing core mechanics over feature completeness',
          'A slow-paced, exploration-driven loop can sustain engagement without relying on combat'
        ]
      },
      { type: 'spacing', space: 64 }
    ]

  },

  visualFolio: {
    id: 'visualFolio',
    title: 'Visual Folio',
    hoverTitle: 'Compilation',
    timeline: 'Ongoing',
    keywords: 'Visual Design, Illustration, Concept Art',
    softwares: 'Procreate, Photoshop',
    //tagline: 'Selected experiments in motion and interactive UI.',
    image: 'images/visual.jpg',
    content: [
      { type: 'spacing', space: 32 },

      { type: 'centertext', text: 'A collection of concept explorations and storyboards - focused on ideation, world-building, and translating ideas into experiences.' },
      { type: 'spacing', space: 32 },

      //{ type: 'centertext', level: 2, text: 'Character Design' },
      { type: 'image', src: 'projects/visual/roop.jpg', caption: 'Character Design' },
      { type: 'spacing', space: 32 },

      //elle
      { type: 'centerheading', text: 'Concept art for a hypothetical RPG-platformer' },
      //{ type: 'centertext', text: 'When Ori meets Arriety' },
      { type: 'image', src: 'projects/visual/elle2.jpeg', caption: 'When Ori meets Arriety' },
      //{type: 'image', src: 'projects/visual/elle2.jpeg' },
      { type: 'image', src: 'projects/visual/elle7.jpeg', caption: 'Quick Ideation for environment and level design' },
      { type: 'image', src: 'projects/visual/elle4.jpeg', caption: 'Prop Design ideation' },

      //arena
      { type: 'centerheading', text: 'Critters Concept Art' },
      { type: 'gallery2', images: ['projects/visual/arena2.jpg', 'projects/visual/arena4.jpg', 'projects/visual/arena3.jpg', 'projects/visual/arena1.jpg'], columns: 2 },

      //miscxxx
      { type: 'centerheading', text: 'Miscellaneous' },
      { type: 'image', src: 'projects/visual/max1.jpeg', caption: 'Illustration for Max life ad campaign (academic)' },
      { type: 'image', src: 'projects/visual/Drawing 2.jpeg', caption: 'Illustration for Physics textbook' },
      { type: 'image', src: 'projects/visual/ghib.png' },
      { type: 'spacing', space: 128 },

    ]
  },


  vishwas: {
    id: 'vishwas',
    title: 'VISHWAS — UX Case Study',
    hoverTitle: 'UX Case Study | Design Thinking',
    timeline: '2024',
    keywords: 'Design Thinking, User Research',
    softwares: 'Figma',
    image: 'images/vishwas.jpg',
    description: 'VISHWAS is a design initiative to increase trust and adoption of Digilocker among first-time digital users in India. The work focused on simplifying onboarding flows, improving document verification UX, and creating visual language that communicates governmental authority while remaining approachable.',
    content: [
      {
        type: 'imagesmall', src: 'projects/vishwas/images/lock.png', // your filename here
      },
      {
        type: 'centertext', text: 'A centralised platform on the existing app – Digilocker to securely facilitate nomination and claim of assets and accounts, enabling easy access of all the digital credentials of a deceased individual.'
      },

      { type: 'spacing', space: 32 },

      {
        type: 'row',
        left: [
          { type: 'imagemedium', src: 'projects/vishwas/images/phone.png' }, //IMAGEEEEEE
        ],
        right: [

          {
            type: 'card', class: 'color-cool', text: 'Accumulation of digital assets in our lifetime can occupy huge amounts of space. Leaving them at the end of our life is not only unsustainable, it is not an easy task for our successors to manage either. We designed a solution that understands the stakeholders’ mindsets, motivations, needs and gaps.'
          },
          // { type: 'paragraph', text: 'We designed a solution that understands the stakeholders’ mindsets, motivations, needs and gaps.' },
        ],
      },
      { type: 'spacing', space: 32 },

      {
        type: 'card',
        title: 'Problem Statement',
        text: 'Long and painstaking process of data access of digital accounts of deceased individuals causing chaos and trust issues with resources to claim access for the same.'
      },
      {
        type: 'card',
        title: 'Solution',
        text: 'Create a system within Digilocker that will enable all the users to deal with the deactivation or preservation of inactive digital accounts and assets smoothly.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Why DigiLocker?'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Built-in cloud storage space links to your Aadhaar (UIDAI) number.',
          'The app encrypts the information you provide to issue documents with 256-bit SSL certificates.',
          'Since death certificate is a government issued document, verification process becomes easier.',
          'Insights from user interviews stated people\'s concern regarding safety for their digital data. People are hesitant to rely on third party ecosystems.',
          'Real-time verification system and its secure gateway for document sharing.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Why should Government care?'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'At the beginning of 2023, there were 398.0 million social media users in India who were 18 years of age or older, or 40.2 percent of the country\'s entire population.',
          'Census data: The information regarding Digilocker users’ type of digital data over various platforms would be collected to create statistics and reports.',
          'Cyber Crime: As the Digilocker is linked with Aadhaar of the user, in case their account is hacked, it could be immediately prompted to the cyber security cell.',
          'The government is expanding the purview of DigiLocker services and sharing the services for MSMEs, startups and other business entities.',
          'The Digital Personal Data Protection Bill 2023 (DPDP Bill) has passed in India’s Rajya Sabha and Lok Sabha to curb misuse of personal data by online platforms. It includes data localization provisions which ensure that data stays within the country.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Design Process'
      },

      { type: 'image', src: 'projects/vishwas/images/design-process.png' }, //IMAGEEEEEE

      {
        type: 'centerheading',
        level: 3,
        text: 'EMPATHIZE'
      },
      {
        type: 'heading',
        level: 4,
        text: 'Assumption Map'
      },

      { type: 'image', src: 'projects/vishwas/images/assumption map.png' }, //IMAGEEEEEE

      {
        type: 'heading',
        level: 4,
        text: 'Stakeholder Map'
      },

      { type: 'imagemedium', src: 'projects/vishwas/images/stakeholder map.png' }, //IMAGEEEEEE


      {
        type: 'row',
        left: [

          {
            type: 'heading',
            level: 4,
            text: 'Frame the Design Challenge'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Access the digital assets and data after we get a prompt from the platform.',
              'Figure out a method to deal with the digital assets of a deceased person.',
              'Design a management solution for the digital assets of a deceased person that is just from all perspectives.'
            ]
          },
        ],
        right: [

          { type: 'imagemedium', src: 'projects/vishwas/images/frame-challenge.png' }, //IMAGEEEEEE
        ],
      },
      {
        type: 'heading',
        level: 4,
        text: 'User Interview Questionnaire'
      },

      {
        type: 'row',
        left: [
          {
            type: 'smallheading',
            level: 5,
            text: 'Ice-Breaker'
          },
          {
            type: 'list', ordered: true,
            items: [
              'Can you tell me a bit about yourself.',
              'Do you use social media? What platforms do you use?',
              'What are your interests? What sort of content do you consume on social media?'
            ]
          },


          {
            type: 'smallheading',
            level: 5,
            text: 'Diving In'
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'How do you revisit the memories of your late loved ones?',
              'What do you think happens to social media accounts of deceased individuals? Personal experience.',
              'What do you think about memoir pages of deceased individuals? Anything else you have heard of.',
              'Do you know anybody who you used to know or follow who has passed away? How were their digital accounts dealt with?',
              'How were their digital accounts dealt with ?',
              'How would you have dealt with this?',
              'How did you feel when you were going through this?',
              'What challenges or issues did you or they face during this process?'

            ]
          },

          { type: 'imagemedium', src: 'projects/vishwas/images/interview-photo.png' }, //IMAGEEEEEE
          {
            type: 'text',
            small: true,
            text: 'Interview of about 4 people were conducted within IIT Campus for further analysis',
          },
        ],
        right: [
          {
            type: 'smallheading',
            level: 5,
            text: 'Users’ Opinion'
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'What would you like to do with the social media posts and interactions of someone who has passed away?',
              'How important do you think it is to preserve/delete accounts or assets?',
              'What are some things that would help you, if you were in this situation?',
              'How would you like your account to be handled by someone else?',
              'How should social media platforms inform users about the death of someone in their network?',
              'What would be the most considerate and effective way to deal with digital assets and accounts in your opinion?',
              'What do you think about memoir pages of deceased individuals?'
            ]
          },
          {
            type: 'smallheading',
            text: 'Closing Questions'
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'How would you have dealt with this?',
              'How did you feel when you were going through this?',
              'What challenges or issues did you or they face during this process?',
              'Do you have any additional thoughts or comments on this topic that you\'d like to share?',
              'Are you aware of any privacy-related concerns associated with managing the social media accounts of deceased individuals?',
              'Do you think there should be clearer guidelines or laws regarding this issue?',
              'What would you like to happen to your account once your time on this planet is done?'
            ]
          },
        ]
      },
      {
        type: 'heading',
        level: 4,
        text: 'Design Insights & Affinity Mapping'
      },

      { type: 'image', src: 'projects/vishwas/images/affinity.png' }, //IMAGEEEEEE

      {
        type: 'list',
        ordered: false,
        items: [
          'Internet is a permanent place and nothing really does get deleted.',
          'I want my chats and history to get deleted because it is personal and sensitive to me.',
          'I do not want to deal with grief or death because it makes me feel emotional and uncomfortable.',
          'There is lack of information and awareness regarding the process of deletion or deactivation, thus it creates hesitance among successors.',
          'I want there to be clear guidelines and regulations as to when any digital account should be deleted.',
          'I do not want my profile to be deleted because I want people, especially family, to see how I lived.',
          'I do not want to share my account to anyone because I fear misuse of my data.',
          'I want my important work/data that is helpful to anyone, for example GitHub and templates, to stay and I do not mind if other things are deleted.',
          'I want to revisit the memories I had with my loved ones.',
          'I feel innovation can be done regarding preservation instead of deleting personal content.'
        ]
      },
      {
        type: 'heading',
        level: 4,
        text: 'User Journey'
      },
      {
        type: 'paragraph',
        text: 'User Scenario: Friend A, after getting to know of the demise of Friend B, wants to help out their parents to get access of their digital assets.'
      },

      { type: 'image', src: 'projects/vishwas/images/user journey.png' }, //IMAGEEEEEE

      {
        type: 'paragraph',
        text: 'Opportunities: Increasing awareness on the platform, keeping track of census data and assets, etc.'
      },
      {
        type: 'heading',
        level: 4,
        text: 'User Persona'
      },

      { type: 'imagemedium', src: 'projects/vishwas/images/user persona.png' }, //IMAGEEEEEE

      {
        type: 'heading',
        level: 4,
        text: 'Empathy Map'
      },

      { type: 'imagemedium', src: 'projects/vishwas/images/empathy map.png' }, //IMAGEEEEEE

      {
        type: 'heading',
        level: 4,
        text: 'User Story'
      },

      { type: 'image', src: 'projects/vishwas/images/user story.png' }, //IMAGEEEEEE

      {
        type: 'centerheading',
        level: 3,
        text: 'IDEATE'
      },
      {
        type: 'heading',
        level: 4,
        text: 'Crazy 8\'s'
      },

      { type: 'image', src: 'projects/vishwas/images/crazy8.png' }, //IMAGEEEEEE

      {
        type: 'paragraph',
        text: 'Ideation tool done under time constraints to come up with spontaneous ideas.'
      },
      {
        type: 'heading',
        level: 4,
        text: '“How Might We?” Statements'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'How might we guide people to delete inactive accounts.',
          'How might we design a system which does not take up much space for inactive accounts.',
          'How might we design an optional solution for different user cases.',
          'How might we protect and preserve important work of users.',
          'How might we maintain the data privacy of users after their demise.'
        ]
      },
      {
        type: 'centerheading',
        level: 3,
        text: 'PROTOTYPE'
      },
      {
        type: 'heading',
        level: 4,
        text: 'User Flow'
      },

      { type: 'image', src: 'projects/vishwas/images/user flow.png' }, //IMAGEEEEEE

      {
        type: 'heading',
        level: 4,
        text: 'Information Architecture'
      },

      { type: 'image', src: 'projects/vishwas/images/information arch.png' }, //IMAGEEEEEE

      {
        type: 'heading',
        level: 4,
        text: 'Wireframing'
      },

      { type: 'image', src: 'projects/vishwas/images/wireframing.png' }, //IMAGEEEEEE

      {
        type: 'heading',
        level: 4,
        text: 'Final Prototyping'
      },

      { type: 'image', src: 'projects/vishwas/images/nominators-flow.png' }, //IMAGEEEEEE


      { type: 'imagemedium', src: 'projects/vishwas/images/nominee-flow.png' }, //IMAGEEEEEE


      { type: 'image', src: 'projects/vishwas/images/nominee-flow-after-demise.png' }, //IMAGEEEEEE

      {
        type: 'centerheading',
        level: 3,
        text: 'TEST'
      },
      {
        type: 'heading',
        level: 4,
        text: 'Usability Testing'
      },
      { type: 'spacing', space: 16 },
      {
        type: 'smallheading',
        level: 5,
        text: 'Testing Objective'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Evaluate whether users understand the new feature.',
          'Identify barriers while participants perform the main tasks.'
        ]
      },
      { type: 'spacing', space: 16 },
      {
        type: 'smallheading',
        level: 5,
        text: 'Methodology'
      },
      {
        type: 'row',
        left: [
          { type: 'imagemedium', src: 'projects/vishwas/images/testing.png' }, //IMAGEEEEEE
        ],
        right: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Concurrent Probing.',
              'Retrospective Probing.'
            ]
          },
        ],
      },
      {
        type: 'row',
        left: [
          {
            type: 'smallheading',
            level: 5,
            text: 'Parameters'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Do users understand the purpose of the feature?',
              'What barriers do users encounter while registration?',
              'Do users find the process difficult?',
              'Do users find the feature safe and trustworthy?'
            ]
          },
        ],
        right: [
          {
            type: 'smallheading',
            level: 5,
            text: 'Findings'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Gaps in the information architecture.',
              'Gaps in the user flow.',
              'Miscommunication in wording of body copy.'
            ]
          },
        ],
      },

      { type: 'spacing', space: 48 },
      { type: 'imagestretch', src: 'projects/vishwas/images/last.png' } //IMAGEEEEEE

    ]
  },

  aakara: {
    id: 'aakara',
    title: 'Aakara — Board Game Design',
    hoverTitle: 'Board Game Design',
    timeline: '2024',
    keywords: 'Game Design, Playtesting',
    softwares: 'Figma',
    //tagline: 'Exploring expressive letterforms inspired by Indian scripts.',
    image: 'images/aakara.png',
    content: [
      { type: 'quote', text: 'A Competitive Learning Game for Area & Perimeter (NCERT Grades 6–8)' },
      { type: 'image', src: 'projects/aakara/cover.jpg' },// caption: 'Early interface sketches' },
      { type: 'heading', level: 3, text: 'About the Game' },
      { type: 'paragraph', text: 'Aakara is an endogenous educational board game that introduces players to core mathematical concepts of Area and Perimeter through spatially guided, visual problem-solving.' },
      { type: 'paragraph', text: 'Players take turns drawing Challenge Cards that require responding to the current game state by performing specific actions. The goal is to use up all assigned sticks by accurately completing challenges, promoting intuitive understanding of geometric relationships through interactive play.' },
      { type: 'spacing', space: 16 },
      { type: 'centerheading', text: 'GAME OBJECTIVE' },
      { type: 'centertext', text: 'Complete your challenges and be the first to use all your sticks to win.' },
      { type: 'spacing', space: 16 },
      { type: 'imagestretch', src: 'projects/aakara/loop.jpg' },
      { type: 'spacing', space: 16 },
      { type: 'heading', level: 3, text: 'The Premise' },
      { type: 'paragraph', text: 'Instead of solving formulas on paper, students shape them.' },
      { type: 'image', src: 'projects/aakara/playtest2.jpg', caption: 'Paper prototype with matchsticks' },
      { type: 'heading', level: 3, text: 'Game Set' },
      {
        type: 'list', ordered: true, items: ['A laser-cut grid board',
          'Challenge card deck',
          'Color-coded dowels (for teams or individuals)',
          'An illustrated instruction manual'
        ]
      },
      { type: 'image', src: 'projects/aakara/playtest.jpg' },
      {
        type: 'row', left: [
          { type: 'heading', level: 3, text: 'Player Psychology' },
          { type: 'smallheading', level: 3, text: 'Observed in Playtests' },
          {
            type: 'list', ordered: true, items: ['Visible hesitation around composite area problems',
              'Strong mental math in some groups, formula comfort in others',
              'Competitive urgency increased engagement'
            ]
          },
          //{type: 'spacing', space: 16 },
          { type: 'smallheading', level: 3, text: 'Unexpected Insight' },
          {
            type: 'list', ordered: true, items: ['Students began helping each other break down shapes',
              'Peer collaboration emerged naturally within a competitive setup'
            ]
          },
        ],
        right: [
          { type: 'heading', level: 3, text: 'Replayability' },
          { type: 'smallheading', level: 3, text: 'Open-Ended Challenges' },
          { type: 'paragraph', text: 'Multiple valid constructions prevent card exhaustion.' },
          //{type: 'spacing', space: 16 },
          { type: 'smallheading', level: 3, text: 'Mixed Focus' },
          { type: 'paragraph', text: 'Cards rotate across area, perimeter, stick constraints, and board patterns.' },
          //{type: 'spacing', space: 16 },
          { type: 'smallheading', level: 3, text: 'Flexible Modes' },
          { type: 'paragraph', text: 'Team play and difficulty scaling extend longevity across classrooms.' },
        ]
      },
      { type: 'image', src: 'projects/aakara/box.png' },
      { type: 'imagesmall', src: 'projects/aakara/pattern.jpg' },
      { type: 'spacing', space: 64 }
    ]
  },

  motionFolio: {
    id: 'motionFolio',
    title: 'Motion & UI Folio',
    hoverTitle: 'Compilation',
    timeline: 'Ongoing',
    keywords: 'Motion Design, UI, Prototyping',
    softwares: 'After Effects, Figma, Blender',
    //tagline: 'Selected experiments in motion and interactive UI.',
    image: 'images/ui-folio.jpg',
    //layout: 'wide',
    content: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/N-5--dIyfCI?si=6hWTTdCyZd4fOmxa' },
      { type: 'spacing', space: 32 },
      { type: 'youtube', src: 'https://www.youtube.com/embed/DDomDkabLE8?si=R58QE9Q9hvZeUBZ8' },
      { type: 'spacing', space: 16 },
      { type: 'image', src: 'projects/uifolio/roopmenu.jpg' },
      { type: 'gallery2', images: ['projects/uifolio/roopsettings.jpg', 'projects/uifolio/roopload.jpg'], columns: 2 },
      { type: 'imagemedium', src: 'projects/uifolio/gassygus.jpg' },
      { type: 'gallery3', images: ['projects/uifolio/linkedin.jpg', 'projects/uifolio/sweet.jpg', 'projects/uifolio/cafe.jpg'], columns: 3 },
      //{type: 'spacing', space: 16 },
      { type: 'imagemedium', src: 'projects/uifolio/gameover.jpg' },
      { type: 'imagemedium', src: 'projects/uifolio/christmas.jpg' }
    ]
  },
};

const artworks = {
  // Sketches
  sketch1: {
    id: 'sketch-1',
    category: 'sketches',
    image: 'art/sketches/vert4.jpg'
  },
  sketch2: {
    id: 'sketch-2',
    category: 'sketches',
    image: 'art/sketches/hz3.jpg'
  },
  sketch3: {
    id: 'sketch-3',
    category: 'sketches',
    image: 'art/sketches/self.png'
  },
  sketch4: {
    id: 'sketch-3',
    category: 'sketches',
    image: 'art/sketches/vert6.jpg'
  },
  sketch5: {
    id: 'sketch-3',
    category: 'sketches',
    image: 'art/sketches/vert5.jpg'
  },

  sketch6: {
    id: 'sketch-3',
    category: 'sketches',
    image: 'art/sketches/study.jpg'
  },

  // Game Art
  gameArt1: {
    id: 'game-art-1',
    category: 'game-art',
    image: 'art/game-art/gameart5.jpeg'
  },
  gameArt2: {
    id: 'game-art-2',
    category: 'game-art',
    image: 'art/game-art/gameart7.jpg'
  },
  gameArt3: {
    id: 'game-art-3',
    category: 'game-art',
    image: 'art/game-art/gameart3.jpeg'
  },
  gameArt4: {
    id: 'game-art-3',
    category: 'game-art',
    image: 'art/game-art/gameart1.jpg'
  },
  gameArt5: {
    id: 'game-art-3',
    category: 'game-art',
    image: 'art/game-art/gameart8.jpeg'
  },
  gameArt6: {
    id: 'game-art-3',
    category: 'game-art',
    image: 'art/game-art/gameart9.png'
  },



  // Environment Design
  environment1: {
    id: 'environment-1',
    category: 'environment',
    image: 'art/environment/Screenshot 2024-11-03 203149.png'
  },
  environment2: {
    id: 'environment-2',
    category: 'environment',
    image: 'art/environment/Screenshot 2024-08-23 172626.png'
  },
  environment3: {
    id: 'environment-3',
    category: 'environment',
    image: 'art/environment/Screenshot 2025-03-21 005515.png'
  },
  environment: {
    id: 'environment-3',
    category: 'environment',
    image: 'art/environment/Screenshot 2024-09-03 001301.png'
  },

  // Illustration
  illustration1: {
    id: 'illustration-1',
    category: 'illustration',
    image: 'art/illustration/hz1.png'
  },
  illustration2: {
    id: 'illustration-2',
    category: 'illustration',
    image: 'art/illustration/hz5.jpg'
  },
  illustrationb: {
    id: 'illustration-b',
    category: 'illustration',
    image: 'art/illustration/basketcase.jpg'
  },
  illustration3: {
    id: 'illustration-3',
    category: 'illustration',
    image: 'art/illustration/vert1.jpg',
  },
  illustration4: {
    id: 'illustration-3',
    category: 'illustration',
    image: 'art/illustration/canopy.jpg',
  },
  illustration5: {
    id: 'illustration-3',
    category: 'illustration',
    image: 'art/illustration/hz2.jpg',
  }
};

// Essays shown under the Work tab
const essays = [
  {
    id: 'vibecode',
    title: 'Navigating AI-Assisted Coding as a Designer',
    description: 'On prompts, prototypes, and the strange experience of building something you only half understand.',
    url: 'https://medium.com/design-bootcamp/navigating-ai-assisted-coding-as-a-designer-8380779f5215',
    image: 'projects/essays/vcover.jpg'
  },
  {
    id: 'vr-roopro',
    title: 'Mistakes I made designing a VR game | Lessons I learnt | Part 1',
    description: 'Setting boundaries and learning about pre-production as we go!',
    url: 'https://medium.com/@snyy/mistakes-i-made-designing-a-vr-game-lessons-i-learnt-part-1-af8fb1d22047',
    image: 'projects/essays/vr_roopro.png'
  }
];

// Make projects and artworks available globally
window.portfolioData = {
  projects,
  artworks,
  essays
};
