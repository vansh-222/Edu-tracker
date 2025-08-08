// 📁 controllers/subjectsController.js

const subjects = require('../data/subjects');

// ✅ Utility to calculate subject progress
const calculateProgress = (lessons) => {
  const total = lessons.length;
  const completed = lessons.filter(lesson => lesson.completed).length;
  return total === 0 ? 0 : parseFloat(((completed / total) * 100).toFixed(2));
};

// ✅ GET all subjects
const getSubjects = (req, res) => {
  res.status(200).json(subjects);
};

// ✅ POST a new subject with default lessons
const addSubject = (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'Title is required and must be a string.' });
  }

  // Create default lessons
  const lessons = [
   {
  title: 'Expressive Letterforms',
  completed: false,
  content: `
   <h2>Expressive Letterforms</h2>

<blockquote>
  <em>"Type speaks louder than words."</em>
</blockquote>

<p>
  Expressive letterforms go beyond traditional readability—they evoke emotion, tone, and personality. Instead of just communicating words, they communicate feelings. These types of letterforms are often used in editorial design, posters, album art, and branding.
</p>

<h3>💡 What You’ll Learn</h3>
<ul>
  <li>How to manipulate letterforms to convey mood or emotion</li>
  <li>Using exaggeration, distortion, and stylization</li>
  <li>When to prioritize expression over legibility</li>
  <li>Combining typography with illustration or texture</li>
</ul>

<h3>🎨 Techniques to Explore</h3>
<ol>
  <li><strong>Distortion:</strong> Stretching, warping, or twisting characters to reflect mood</li>
  <li><strong>Hand-drawn Lettering:</strong> Custom letterforms that feel personal or artistic</li>
  <li><strong>Texture & Overlay:</strong> Applying visual textures to type using Photoshop, Illustrator, or Procreate</li>
  <li><strong>Mixed Media:</strong> Combining photos, objects, and letters in 3D or collage style</li>
</ol>

<h3>📌 Key Tip</h3>
<p>
  Always start with a concept! Ask yourself: <em>What should this type feel like?</em> Then shape your letters to match that emotion—bold, calm, chaotic, elegant, playful?
</p>

<h3>🧠 Practice Exercise</h3>
<p>
  Choose a word (e.g., "Chaos" or "Calm") and design it in three different expressive styles. Focus on how the form reflects the meaning.
</p>

<h3>📚 Recommended Tools</h3>
<ul>
  <li>Adobe Illustrator</li>
  <li>Procreate</li>
  <li>Calligraphy pens or brushes</li>
  <li>Blender (for 3D letter exploration)</li>
</ul>

<h3>✨ Bonus Inspiration</h3>
<p>
  Explore work by designers like <strong>David Carson</strong>, <strong>Jessica Hische</strong>, and <strong>Stefan Sagmeister</strong> for unconventional and emotional type experiments.
</p>
  `
},
   {
  title: 'Kinetic Typography & Animation',
  completed: false,
  content: `
    <h2>Kinetic Typography & Animation</h2>

<blockquote>
  <em>"When type starts to dance, ideas come to life."</em>
</blockquote>

<p>
  Kinetic typography is the art of bringing type to life through movement. It adds energy and storytelling to static text by animating its position, size, opacity, rotation, and more.
</p>

<h3>💡 Why It Matters</h3>
<ul>
  <li>Enhances visual storytelling in videos, websites, and presentations</li>
  <li>Captures attention and creates emotional impact</li>
  <li>Guides viewer focus and improves engagement</li>
</ul>

<h3>🛠️ Common Techniques</h3>
<ol>
  <li><strong>Fade & Slide:</strong> Text fades in/out or slides into position smoothly</li>
  <li><strong>Scale & Bounce:</strong> Text grows or shrinks with playful motion</li>
  <li><strong>Split & Reveal:</strong> Words animate letter-by-letter or word-by-word</li>
  <li><strong>Sync with Audio:</strong> Text moves in rhythm with sound or voiceover</li>
</ol>

<h3>📌 Tools You Can Use</h3>
<ul>
  <li>Adobe After Effects</li>
  <li>CSS & Keyframe Animations</li>
  <li>GSAP (GreenSock Animation Platform)</li>
  <li>Figma Smart Animate (for prototypes)</li>
</ul>

<h3>🧠 Practice Challenge</h3>
<p>
  Pick a favorite quote or song lyric and animate it using keyframe timing. Focus on making the motion match the emotion and message.
</p>

<h3>✨ Bonus Tip</h3>
<p>
  Don’t overdo it! Too much motion can become distracting. Every animation should have purpose and flow.
</p>
  `
},

   {
  title: 'Typography in Branding & Logos',
  completed: false,
  content: `<h2>Typography in Branding & Logos</h2>

<blockquote>
  <em>"Your typeface is your voice."</em>
</blockquote>

<p>
  Typography plays a powerful role in brand identity. It communicates personality, values, and tone even before a single word is read. From luxury and elegance to youthfulness and rebellion — fonts speak.
</p>

<h3>💡 Why Typography Matters in Branding</h3>
<ul>
  <li>It creates a recognizable and memorable visual identity</li>
  <li>Builds emotional connection with the target audience</li>
  <li>Sets the tone for how the brand is perceived (serious, fun, modern, traditional)</li>
  <li>Supports consistency across all brand touchpoints</li>
</ul>

<h3>🔤 Types of Typographic Logos</h3>
<ol>
  <li><strong>Wordmarks:</strong> Full brand name in a custom or stylized font (e.g., Google, Coca-Cola)</li>
  <li><strong>Lettermarks:</strong> Initials or abbreviations used creatively (e.g., IBM, NASA)</li>
  <li><strong>Monograms:</strong> Elegant and compact type combinations, often for luxury brands</li>
  <li><strong>Hand-drawn Type:</strong> Unique, personality-driven fonts often used in creative startups</li>
</ol>

<h3>🛠️ Typography Tips for Logo Design</h3>
<ul>
  <li>Use <strong>font psychology</strong> — Serif = trust & tradition, Sans-serif = modern & clean, Script = elegant or playful</li>
  <li>Ensure readability at all sizes, especially small scale</li>
  <li>Don’t rely solely on font choice—adjust kerning, letterforms, and alignment for balance</li>
  <li>Pair with a simple icon only if it adds meaning (not just decoration)</li>
</ul>

<h3>📌 Tools for Typographic Branding</h3>
<ul>
  <li>Adobe Illustrator (for custom wordmarks)</li>
  <li>Figma (for layout and prototyping)</li>
  <li>FontPair & Google Fonts (for font pairing inspiration)</li>
  <li>Calligraphr (to make your own font!)</li>
</ul>

<h3>🧠 Practice Challenge</h3>
<p>
  Create a logo for a fictional brand (e.g., a tech startup or coffee shop) using only typography. Try making three versions: a wordmark, a lettermark, and a custom variation.
</p>

<h3>✨ Real-World Inspiration</h3>
<p>
  Study iconic logos like <strong>FedEx</strong> (hidden arrow), <strong>Netflix</strong> (strong curves & bold red), and <strong>Spotify</strong> (rhythmic, friendly type). Analyze what makes them unforgettable.
</p>
  `
},
    {
  title: 'Typographic Layout & Composition',
  completed: false,
  content: `
    <h2>Typographic Layout & Composition</h2>

<blockquote>
  <em>"Design is intelligence made visible — and typography is how you guide the eye."</em>
</blockquote>

<p>
  Typographic layout is the art of organizing text so it’s not only readable, but visually impactful. It determines how content flows, how the message is received, and how it feels. Whether you’re designing a magazine, poster, or website — layout is your visual storytelling tool.
</p>

<h3>💡 Core Principles of Good Layout</h3>
<ul>
  <li><strong>Alignment:</strong> Ensures text feels clean and ordered</li>
  <li><strong>Hierarchy:</strong> Directs attention using size, weight, and spacing</li>
  <li><strong>Whitespace:</strong> Gives breathing room and improves clarity</li>
  <li><strong>Contrast:</strong> Makes key content stand out (size, color, style)</li>
  <li><strong>Consistency:</strong> Keeps styles unified across your design</li>
</ul>

<h3>📐 Use of Grids & Guides</h3>
<p>
  Grids help you create structure and rhythm. They ensure alignment, balance, and cohesion — especially when working with columns, body text, and headlines. You can use baseline grids for text flow and modular grids for complex layouts.
</p>

<h3>🔤 Typography Techniques in Layout</h3>
<ol>
  <li><strong>Pull Quotes:</strong> Emphasize powerful lines using bold and size contrast</li>
  <li><strong>Drop Caps:</strong> Add elegance and visual entry points to large text blocks</li>
  <li><strong>Leading & Line Height:</strong> Adjust spacing between lines for readability</li>
  <li><strong>Tracking & Kerning:</strong> Fine-tune spacing between letters for polish</li>
</ol>

<h3>🛠️ Tools for Typography Layout</h3>
<ul>
  <li>Figma (for responsive grid-based layouts)</li>
  <li>Adobe InDesign (perfect for editorial and print layout)</li>
  <li>Canva (for quick and easy layout experimentation)</li>
  <li>CSS Grid & Flexbox (for web-based typographic design)</li>
</ul>

<h3>🧠 Practice Task</h3>
<p>
  Create a magazine-style layout for an article using two fonts. Use hierarchy, whitespace, and grid to make it feel clean and professional. Include a headline, subheading, body text, and a pull quote.
</p>

<h3>✨ Pro Tip</h3>
<p>
  Always zoom out and squint at your design. If your eye naturally knows where to start and flow — your composition is working!
</p>
  `
}

  ];

  const newSubject = {
    id: subjects.length + 1,
    title,
    lessons,
    progress: calculateProgress(lessons)
  };

  subjects.push(newSubject);
  res.status(201).json(newSubject);
};

// ✅ PATCH: Toggle lesson completion
const toggleLesson = (req, res) => {
  const subjectId = parseInt(req.params.subjectId);
  const lessonIndex = parseInt(req.params.lessonIndex);

  const subject = subjects.find(s => s.id === subjectId);
  if (!subject) {
    return res.status(404).json({ error: 'Subject not found' });
  }

  const lesson = subject.lessons[lessonIndex];
  if (!lesson) {
    return res.status(404).json({ error: 'Lesson not found' });
  }

  // Toggle lesson completion
  lesson.completed = !lesson.completed;

  // Recalculate subject progress
  subject.progress = calculateProgress(subject.lessons);

  res.status(200).json(subject);
};

module.exports = {
  getSubjects,
  addSubject,
  toggleLesson
};