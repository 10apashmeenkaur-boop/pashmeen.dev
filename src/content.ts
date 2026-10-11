// Every fact on the page lives here. Sources: Pashmeen_Kaur_Resume.pdf (Oct 2026)
// and the public repos on github.com/10apashmeenkaur-boop.
// Anything marked TODO was missing from those sources — fill it in yourself.

const GH = 'https://github.com/10apashmeenkaur-boop'

export const profile = {
  name: 'Pashmeen Kaur',
  title: 'AI & Software Engineer · Full-Stack Developer',
  location: 'Raipur, India',
  email: 'pkaur048.btech2023@che.nitrr.ac.in',
  github: 'github.com/10apashmeenkaur-boop',
  githubUrl: GH,
  linkedin: 'linkedin.com/in/pashmeen-kaur-2a9b39358',
  linkedinUrl: 'https://www.linkedin.com/in/pashmeen-kaur-2a9b39358',
  resume: '/Pashmeen-Kaur-Resume.pdf',
  tagline: '"Crafting Interfaces with Wit, Grit & Pixel-Perfect Precision"',
  summary:
    'B.Tech student at NIT Raipur (graduating 2027), passionate about AI development: machine learning, RAG pipelines, agentic systems and computer vision, shipped as clean, production-grade software. Equally at home building the React front end and the FastAPI back end behind it.',
}

export const arsenal = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'] },
  {
    label: 'AI, ML & Agents',
    items: ['RAG', 'LangChain', 'LLM Fine-Tuning', 'Prompt Engineering', 'scikit-learn'],
  },
  {
    label: 'Computer Vision',
    items: ['OpenCV', 'NumPy', 'YOLOv11', 'Roboflow', 'CVAT', 'Camera Calibration', 'Planar Homography', 'Segmentation'],
  },
  { label: 'Backend & APIs', items: ['FastAPI', 'Flask', 'Node.js', 'Uvicorn', 'REST API Design', 'Postman'] },
  {
    label: 'Frontend & Design',
    items: ['React.js', 'Next.js', 'React Native', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Figma', 'UI/UX'],
  },
  {
    label: 'Data, Cloud & DevOps',
    items: ['MySQL', 'MongoDB', 'Docker', 'Git', 'GitHub Actions (CI/CD)', 'Vercel', 'Render', 'Netlify'],
  },
]

// TODO: these are self-ratings — adjust the widths and words to what you're comfortable claiming.
export const ratings = [
  { name: 'Python', level: 'Fluent', pct: 85 },
  { name: 'React / Next.js', level: 'Fluent', pct: 82 },
  { name: 'RAG & Agents', level: 'Adept', pct: 75 },
  { name: 'Computer Vision', level: 'Adept', pct: 75 },
]

export const career = [
  {
    company: 'Cloord Solutions',
    sector: 'Software',
    role: 'Software Engineering Intern',
    type: 'Frontend Web Development',
    period: ['Jun 2026', 'Jul 2026'],
    points: [
      'Built a responsive Next.js / React landing page in TypeScript, shipping reusable Navbar, Hero, Dashboard Preview, Features, CTA and Footer components.',
      'Implemented responsive layouts, animations, interactive states and dashboard visualisations aligned to the product design system.',
      'Integrated features into an existing production codebase through Git feature branches, pull requests and code review.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
  },
  {
    company: 'Innovation Cell, NIT Raipur',
    sector: 'Student Technical Body',
    role: 'Frontend Technical Executive',
    type: 'Position of Responsibility',
    period: ['Jun 2024', 'Aug 2025'],
    points: ['Maintained and shipped updates to the official Innovation Cell website, owning UI consistency and release cadence.'],
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    company: 'Literati, NIT Raipur',
    sector: 'The Literary Community',
    role: 'PR & Sponsorship Coordinator',
    type: 'Position of Responsibility',
    period: ['2023', 'Present'],
    points: [
      'Coordinated and anchored flagship literary events end to end.',
      'Authored articles for Shilpi, the annual magazine (2023–2025).',
    ],
    stack: ['Writing', 'Public Speaking', 'Sponsorship'],
  },
]

export const education = [
  {
    degree: 'B.Tech, Chemical Engineering',
    major: 'CGPA 8.4 / 10',
    school: 'National Institute of Technology, Raipur',
    place: 'Raipur, Chhattisgarh',
    years: ['2023', '2027'],
  },
  { degree: 'Class XII (CBSE)', major: '89.4%', school: 'Surya Public School', place: 'Lucknow', years: ['2023'] },
  {
    degree: 'Class X (ICSE)',
    major: '96.4%',
    school: "St. Mary's Convent Inter College",
    place: 'Lucknow · CISCE Award of Excellence',
    years: ['2021'],
  },
]

type Work = { name: string; stack: string; desc: string; impact: string; links: { label: string; url: string }[] }

export const works: Work[] = [
  {
    name: 'Hira Vision',
    stack: 'Python · OpenCV · YOLOv11 · FastAPI',
    desc: 'Industrial grate-wear inspection for Hira Group, Raipur: measures slot wear in millimetres from existing plant CCTV, replacing a manual caliper check that meant shutting the machine down.',
    impact:
      'Best Team Award. Homography calibration validated within 3% of spec; plate-to-plate spread cut from 1.24 mm to 0.86 mm.',
    links: [{ label: 'Source', url: `${GH}/Stack_Vision` }],
  },
  {
    name: 'Enterprise Multi-Agent RAG Support Agent',
    stack: 'LangChain · Flask · React',
    desc: 'A stateful multi-agent support system: RAG over enterprise documents with vector search, agentic tool calling, and multi-step routing of Tier-1 and Tier-2 support queries.',
    impact: 'Streaming responses and graceful degradation keep the UI responsive during slow LLM calls.',
    links: [{ label: 'Source', url: `${GH}/Enterprise-LangGraph-Support-Agent` }],
  },
  {
    name: 'Zero-Agent',
    stack: 'Python · LLM Agents',
    desc: 'Give AI a goal and it builds the agent it needs, in a live generate → test → fail → repair → execute loop.',
    impact: 'Self-repairing agent generation: failures feed back into the next attempt automatically.',
    links: [{ label: 'Source', url: `${GH}/zero-agent` }],
  },
  {
    name: 'Lead Flow CRM',
    stack: 'React · TypeScript · @dnd-kit · Node.js',
    desc: 'A responsive CRM with Kanban drag-and-drop pipelines, optimistic updates, full CRUD over REST and status filtering, built from high-fidelity Figma designs.',
    impact: 'Typed state-transition guards make invalid lead states unrepresentable.',
    links: [
      { label: 'Live demo', url: 'https://lead-flow-crm-app.vercel.app' },
      { label: 'Source', url: `${GH}/Lead-Flow-CRM-App` },
    ],
  },
  {
    name: 'Nodeflow',
    stack: 'React · TypeScript · SVG',
    desc: 'A visual workflow builder: drag nodes onto a grid, wire them with Bezier or orthogonal connectors, and export the flow to JSON.',
    impact: 'Typed port rules and time-travel undo/redo built on the command pattern.',
    links: [
      { label: 'Live demo', url: 'https://nodeflow-chi.vercel.app' },
      { label: 'Source', url: `${GH}/Nodeflow` },
    ],
  },
  {
    name: 'Role-Based Access Control System',
    stack: 'Angular · Node.js · TypeScript',
    desc: 'A full-stack verification dashboard that uses server-side role-based access control to securely route and filter enterprise data.',
    impact: 'Authorisation enforced on the server, not just hidden in the UI.',
    links: [
      { label: 'Live demo', url: 'https://full-stack-role-based-access-contro.vercel.app' },
      { label: 'Source', url: `${GH}/Full-Stack-Role-Based-Access-Control-Verification-System` },
    ],
  },
  {
    name: 'Heart Disease Prediction',
    stack: 'Python · scikit-learn · Jupyter',
    desc: 'An end-to-end ML project, from problem definition and exploratory data analysis to model training and evaluation.',
    impact: 'Full pipeline documented in a reproducible notebook.',
    links: [{ label: 'Source', url: `${GH}/Heart-Disease-Prediction` }],
  },
]

export const commendations = [
  {
    title: 'Best Team Award, Future Ready Cross Business Garh',
    note: 'With Hira Group, Raipur: delivered a validated MVP running on live plant CCTV, through build and demo review rounds.',
    year: 'Sep 2026',
  },
  {
    title: 'National Finalist, Ground Business Reality, BITS Pilani',
    note: 'Top 6 of 10,000+ (Healthcare domain): Closed-Loop Insulin Dosage Optimizer and delivery simulation.',
    year: '2026',
  },
  {
    title: 'First Runner-up, UI/UX Challenge, Xccelerate, IIIT Naya Raipur',
    note: 'By Money Matters with CSIDC: POCKETWISE, an investment-portfolio recommendation screen with predictive savings modelling.',
    year: '2026',
  },
  {
    title: 'Google: Introduction to Generative AI',
    note: 'Certification · plus The I-Scale Complete AI Engineer course',
    year: '—',
  },
  { title: 'Award of Excellence, CISCE', note: 'Certificate of Merit for 96.4% in ICSE', year: '2021' },
]

export const coursework = [
  'Generative AI',
  'AI / ML Fundamentals',
  'AI Agents for Automation',
  'Large Language Models (LLMs)',
  'Statistics for Data Science',
]

// Shown in the first back-page column (replaces "Human Languages" in the Figma).
export const toolbox = [
  { name: 'Coding agents', level: 'Claude Code · Cursor · OpenCode · Antigravity' },
  { name: 'Automation', level: 'n8n · Zapier · Composio · Lovable' },
  { name: 'Studios', level: 'Google AI Studio · NotebookLM' },
  { name: 'LLMs', level: 'Claude · ChatGPT · Gemini · Perplexity' },
]

export const numbers = [
  { value: '13', label: 'Public Repositories', note: 'AI, computer vision, full-stack & data' },
  { value: 'Top 6', label: 'National Finalist', note: 'Of 10,000+ at BITS Pilani' },
  { value: '8.4', label: 'CGPA at NIT Raipur', note: 'B.Tech, Class of 2027' },
  { value: '∞', label: 'Cups of Coffee Consumed', note: 'All in the name of great code' },
]
