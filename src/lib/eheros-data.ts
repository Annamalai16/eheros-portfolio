export type Sponsor = {
  name: string;
  mark: string;
};

export type Session = {
  id: string;
  projectId: string;
  title: string;
  description: string;
  date: string;
  location: string;
  registrationUrl?: string;
  participants: number;
  thumbnail: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  thumbnail: string;
  sponsors: Sponsor[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "digital-spark",
    title: "Digital Spark Labs",
    description:
      "Hands-on technology workshops helping middle school students build confidence with creative coding and responsible AI.",
    longDescription:
      "Digital Spark Labs introduces students to practical technology through guided workshops, mentor circles, and project-based learning. Participants leave each session with a working prototype and a clearer path toward using technology for community problem solving.",
    duration: "Jan 2026 - May 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    sponsors: [
      { name: "Civic Tech Fund", mark: "CT" },
      { name: "Bright Futures", mark: "BF" },
    ],
    featured: true,
  },
  {
    id: "green-blocks",
    title: "Green Blocks Initiative",
    description:
      "Neighborhood sustainability sessions focused on urban gardening, recycling systems, and youth-led climate action.",
    longDescription:
      "Green Blocks Initiative equips residents and students with practical sustainability habits. The project combines outdoor service days with indoor planning sessions so every participant can contribute to cleaner, greener local spaces.",
    duration: "Mar 2026 - Aug 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    sponsors: [
      { name: "EarthRoot", mark: "ER" },
      { name: "Urban Canopy", mark: "UC" },
    ],
    featured: true,
  },
  {
    id: "wellness-bridge",
    title: "Wellness Bridge",
    description:
      "Community health education, mental wellness circles, and resource navigation for families and young adults.",
    longDescription:
      "Wellness Bridge creates approachable spaces for conversations about health, stress, nutrition, and access to support. Sessions are facilitated by trained volunteers and partner professionals who understand the needs of local families.",
    duration: "Apr 2026 - Oct 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    sponsors: [
      { name: "Care Collective", mark: "CC" },
      { name: "Harbor Clinic", mark: "HC" },
    ],
    featured: true,
  },
  {
    id: "story-makers",
    title: "Story Makers Studio",
    description:
      "A creative media project where youth document local heroes through photography, audio interviews, and short films.",
    longDescription:
      "Story Makers Studio trains participants in ethical storytelling, interviewing, editing, and digital publishing. Each cohort produces a mini-exhibition that celebrates neighborhood resilience and everyday leadership.",
    duration: "Jun 2026 - Sep 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    sponsors: [
      { name: "Open Lens", mark: "OL" },
      { name: "Arts Forward", mark: "AF" },
    ],
  },
  {
    id: "career-compass",
    title: "Career Compass",
    description:
      "Career readiness sessions connecting students with mentors, resume coaching, and workplace exposure.",
    longDescription:
      "Career Compass helps young people translate ambition into next steps. The project includes skill-building labs, mock interviews, professional panels, and mentor matching with local employers.",
    duration: "Feb 2026 - Nov 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    sponsors: [
      { name: "Pathway Partners", mark: "PP" },
      { name: "City Works", mark: "CW" },
    ],
  },
];

export const sessions: Session[] = [
  {
    id: "ai-for-good",
    projectId: "digital-spark",
    title: "AI for Good Prototype Day",
    description:
      "Students design simple AI-assisted concepts that address school or neighborhood needs.",
    date: "2026-05-09",
    location: "Eastside Community Lab",
    registrationUrl: "#contact",
    participants: 42,
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "code-and-create",
    projectId: "digital-spark",
    title: "Code and Create Studio",
    description:
      "A playful introduction to web pages, digital art, and collaboration using beginner-friendly tools.",
    date: "2026-04-18",
    location: "Roosevelt Library",
    registrationUrl: "#contact",
    participants: 36,
    thumbnail:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "garden-build",
    projectId: "green-blocks",
    title: "Community Garden Build",
    description:
      "Volunteers prepare beds, paint signage, and plant herbs for a shared neighborhood garden.",
    date: "2026-05-16",
    location: "Maple Avenue Green Lot",
    registrationUrl: "#contact",
    participants: 58,
    thumbnail:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "recycle-audit",
    projectId: "green-blocks",
    title: "Recycling Systems Audit",
    description:
      "Teams map waste patterns and create practical recommendations for local community spaces.",
    date: "2026-06-06",
    location: "EHeros Field Office",
    registrationUrl: "#contact",
    participants: 31,
    thumbnail:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "mindful-mornings",
    projectId: "wellness-bridge",
    title: "Mindful Mornings",
    description:
      "A family-friendly wellness session covering stress tools, breathing practice, and local resources.",
    date: "2026-05-23",
    location: "Harbor Clinic Hall",
    registrationUrl: "#contact",
    participants: 47,
    thumbnail:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "nutrition-table",
    projectId: "wellness-bridge",
    title: "Healthy Table Workshop",
    description:
      "Participants learn affordable meal planning, label reading, and simple recipes for busy weeks.",
    date: "2026-07-11",
    location: "North Market Kitchen",
    registrationUrl: "#contact",
    participants: 29,
    thumbnail:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "portrait-walk",
    projectId: "story-makers",
    title: "Neighborhood Portrait Walk",
    description:
      "Youth photographers practice consent-based portrait sessions and visual storytelling.",
    date: "2026-06-20",
    location: "Founders Plaza",
    registrationUrl: "#contact",
    participants: 24,
    thumbnail:
      "https://images.unsplash.com/photo-1522206024047-9c925421675b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "mentor-night",
    projectId: "career-compass",
    title: "Mentor Match Night",
    description:
      "Students meet professionals across technology, health, trades, arts, and public service.",
    date: "2026-05-30",
    location: "Central High Commons",
    registrationUrl: "#contact",
    participants: 64,
    thumbnail:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80",
    alt: "Community workshop participants collaborating at a table",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    alt: "Volunteers smiling during an outdoor community event",
  },
  {
    src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=80",
    alt: "Young people in a group learning session",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    alt: "Mentors and students gathered around laptops",
  },
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
    alt: "Community members celebrating together",
  },
  {
    src: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=900&q=80",
    alt: "Event speaker presenting to an audience",
  },
];

export const teamMembers = [
  {
    name: "Amara Lewis",
    role: "Executive Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Noah Patel",
    role: "Programs Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Maya Chen",
    role: "Community Partnerships",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Eli Brooks",
    role: "Volunteer Coordinator",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
];

export const upcomingSessions = sessions
  .filter((session) => new Date(session.date) >= new Date())
  .sort((a, b) => a.date.localeCompare(b.date))
  .slice(0, 2);

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getProjectSessions(projectId: string) {
  return sessions
    .filter((session) => session.projectId === projectId)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getProjectForSession(session: Session) {
  return projects.find((project) => project.id === session.projectId);
}
