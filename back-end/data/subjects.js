// 📁 data/subjects.js

// 🔧 Utility function to calculate progress
const calculateProgress = (lessons) => {
  const total = lessons.length;
  const completed = lessons.filter(lesson => lesson.completed).length;
  return total === 0 ? 0 : parseFloat(((completed / total) * 100).toFixed(2));
};

// 🧠 Subject data
const subjects = [
  {
    id: 1,
    title: 'History of Graphic Design',
    lessons: [
      {
  title: 'Early Printing Techniques',
  completed: false,
  content: `
<h2>🕰️ 1. Woodblock Printing (200s CE - China)</h2>
<h4>Also known as: Block printing</h4>

How it worked:
A design or text was carved in reverse on a block of wood. Ink was applied to the block, and then it was pressed onto paper or fabric.

Used for:
Buddhist texts, decorative prints, fabrics.

Famous example:
The Diamond Sutra (868 CE) – world’s oldest known printed book!

 "Think of it as giant wooden stamps for each page!"

<h2>🧷 2. Movable Type Printing (1040 CE - China, Bi Sheng)</h2>
<h4>Game-changer! 🧠</h4>

What changed:
Instead of carving a whole page, individual characters (letters or symbols) were made from clay or wood, placed in trays, and arranged to form a page. These pieces were reusable!

Later upgraded in Korea and Europe with metal movable type (Korea – 1234 CE; Europe – 1450s CE).

<h2>🏆 3. Gutenberg’s Printing Press (1450s – Europe)</h2>
Invented by: Johannes Gutenberg in Germany
Major innovation: Metal movable type + mechanical press

How it worked:
Individual metal letters were assembled, inked, and pressed onto paper using a screw press.

Impact:
MASSIVE! It made books cheaper and more accessible. It powered the Renaissance, Reformation, and scientific revolution.

Famous example:
The Gutenberg Bible – one of the first major books printed in Europe.

🧠 Fun Fact: Gutenberg's press is often called the start of the Printing Revolution!

<h2>🎭 4. Intaglio Printing (1400s onward)</h2>
Used for: Art prints, currency, maps

How it worked:
Lines were carved into a metal plate (like copper). Ink was pressed into the grooves, and then paper was rolled over it using high pressure.

Sub-types: Engraving, Etching, Mezzotint.

✨ Used by famous artists like Rembrandt!

<h2>🎨 5. Lithography (1796)</h2>
Invented by: Alois Senefelder (Germany)

How it worked:
Drawings were made on flat stone using greasy ink. The stone was then treated so ink stuck only to the drawing. It was then pressed on paper.

Fun Twist:
Litho = "stone", Graphy = "writing" → Stone Writing!

🎨 Still used in artistic printmaking today!
`
},

     {
  title: 'Renaissance Influence',
  completed: false,
  content: `
<h2>🧠 What Was the Renaissance?</h2>

The Renaissance was a major cultural, artistic, intellectual, and scientific movement that began in Italy around the 14th century and spread across Europe until the 17th century.
The word Renaissance means "rebirth", and it refers to the revival of classical learning and ancient knowledge from Greek and Roman civilizations.

During this time, there was:

A shift from religious thinking to humanism, where the focus was placed on human potential, education, and creativity.

A rise in art, literature, philosophy, science, and innovation.

A growing demand for books, knowledge, and learning materials.

This curiosity and thirst for learning created the perfect environment for the invention and spread of printing technology.

🔗 How the Printing Press Influenced the Renaissance (and vice versa)

<h3>📚 1. The Book Boom – Printing Makes Knowledge Affordable</h3>

Before the invention of the printing press, books were handwritten by monks and scribes. It could take months or years to create just one book, and only the wealthy or churches could afford them.

But with Gutenberg’s Printing Press (1450s, Germany):

Books were printed quickly, accurately, and in large numbers.

Costs dropped dramatically, making books affordable for common people.

Literacy rates increased because people had access to materials to read.

This mass production of books helped spread Renaissance ideas far and wide across Europe.

<h3>🏛️ 2. Rebirth of Ancient Greek & Roman Knowledge</h3>

The Renaissance was all about reconnecting with the classical world – philosophers like Plato, Aristotle, Socrates, and texts on math, astronomy, and medicine.

Thanks to the printing press:

Ancient texts were rediscovered, translated, and reprinted.

Knowledge that had been lost for centuries was revived and made available to scholars and students.

This led to huge progress in education, critical thinking, and scientific discovery.

<h3>🎨 3. Spread of Humanism and New Ideas</h3>

Humanism was a core part of Renaissance thinking – it encouraged people to study subjects like literature, philosophy, history, and art.

The printing press allowed:

Humanist writings to spread throughout Europe.

Authors like Dante, Petrarch, Erasmus, and Machiavelli to be published and read widely.

People to challenge old beliefs and think independently.

This free flow of ideas weakened the strict control of the Church and allowed a more open-minded society to develop.

<h3>🖼️ 4. The Artistic Renaissance and Printmaking</h3>

The Renaissance was famous for its art – Leonardo da Vinci, Michelangelo, Raphael, and others created timeless masterpieces.

Printing helped the art world by:

Reproducing engravings, woodcuts, and etchings to reach wider audiences.

Creating manuals and books on anatomy, perspective, and techniques for other artists to learn.

Encouraging graphic design, typography, and visual storytelling through printed media.

Printed artwork could now travel across countries and inspire artists everywhere.

<h3>🕊️ 5. Fueling the Reformation and Scientific Revolution</h3>

The printing press wasn’t just about books – it also changed religion and science forever.

<h4>📜 In Religion:</h4>

Martin Luther’s 95 Theses (1517) were printed and spread rapidly.

This started the Protestant Reformation, where people began challenging the Catholic Church.

Printed Bibles in vernacular languages (local languages instead of Latin) allowed everyone to read and interpret religious texts on their own.

<h4>🔬 In Science:</h4>

Thinkers like Copernicus, Galileo, and Kepler published groundbreaking scientific works.

Theories about the solar system, gravity, and motion could now be tested, shared, and debated.

This gave rise to the Scientific Revolution.

<h4>📌 Conclusion: A Perfect Partnership</h4>

The Renaissance and the printing press were like a perfect team. The Renaissance created the demand for knowledge, and the printing press made it possible to deliver that knowledge.

Ideas could now spread in days instead of decades.

Artists, scientists, philosophers, and reformers could share their thoughts freely.

The world moved from the medieval age to the modern era – with books, art, science, and education leading the way.

🌍 The printing press didn’t just print books — it printed a new future.
`
}
,
      {
  title: 'Modernism',
  completed: false,
  content: `
<h2>🧾 What is Modernism?</h2>

Modernism was a bold cultural movement that emerged in the late 1800s and gained full momentum in the early 1900s. It was a reaction against traditional values, classical styles, and the dramatic changes brought by industrialization, urbanization, war, and technology.

💡 At its heart, Modernism was about breaking away from the past and experimenting with new ways of seeing, thinking, and creating.

<h3>🎯 Key Characteristics of Modernism:</h3>

<h4>✂️ Rejection of Tradition</h4>

Artists and writers rejected Victorian morality, classical beauty, and historical themes.

"Make it new!" was the motto — coined by poet Ezra Pound.

<h4>🔍 Focus on Individual Experience</h4>

Introspective, psychological, and experimental.

Explored themes of alienation, identity, and inner conflict.

<h4>🧪 Experimentation in Form and Style</h4>

Stream-of-consciousness writing

Abstract, non-representational art

Free verse poetry, collage, minimalism

<h4>⚔️ Response to War and Chaos</h4>

World War I and II deeply impacted Modernist thought.

Themes of disillusionment, fragmentation, and trauma appeared in much of the work.

<h4>🏙️ Celebration of Modern Life<h4>

Embraced technology, industry, machines, and urban life.

Artists depicted factories, skyscrapers, and fast-paced cities.

<h2>🖌️ Modernism in Art</h2>

🎨 Artists like Pablo Picasso, Wassily Kandinsky, and Marcel Duchamp experimented with:

Cubism – breaking objects into geometric forms

Dadaism – absurd, anti-art reactions to war

Surrealism – dreamlike, subconscious imagery

Art moved from representing reality to expressing ideas.

<h2>📖 Modernism in Literature<h2>

🧠 Writers used complex structures, symbolism, and experimental language.

<h4>Key figures:</h4>

1.James Joyce – Ulysses (stream of consciousness)

2.Virginia Woolf – To the Lighthouse

3.T.S. Eliot – The Waste Land

4.Franz Kafka – The Metamorphosis

📚 Literature became less about storytelling and more about inner worlds and fragmented reality.

<h2>🏛️ Modernism in Architecture & Design</h2>

Architects rejected decorative styles like Gothic and Baroque.

Emphasized function over form – "Less is more".

Famous movements:

Bauhaus (Germany) – clean lines, geometric shapes

International Style – glass, steel, and minimalism

<strong>✨ Think: straight lines, open space, concrete, and efficiency.</strong>

<h2>🎭 Modernism in Other Fields</h2>

Film: Silent film, jump cuts, symbolic storytelling (Metropolis, The Cabinet of Dr. Caligari)

Music: Atonality, jazz, dissonance (Stravinsky, Schoenberg)

Philosophy: Questioned objectivity and truth (Nietzsche, Freud)

<h2>📌 Why Modernism Mattered</h2>

It reflected a world in flux — people were grappling with war, technology, and a rapidly changing society.

Modernism challenged norms and gave birth to new art forms that still influence today’s culture.

It paved the way for Postmodernism, which came after 1945.

<h4>📢 In Short:</h4>

Modernism was about:

Breaking rules

Embracing change

Expressing inner chaos

Redefining art and life

It wasn’t just a style. It was a mindset. 🧠⚡
`
}

    ]
  },
  {
    id: 2,
    title: 'App Design Crash Course',
    lessons: [
      {
        title: 'Wireframe Basics',
completed: false,
content: `
<h2>📐 What is a Wireframe?</h2>

A <strong>wireframe</strong> is a simple, low-fidelity blueprint or visual guide that represents the layout and structure of a web page or app screen. It focuses on <em>functionality and layout</em> — not colors, fonts, or fancy graphics.

Wireframes are often black & white or grayscale, and they help designers, developers, and clients plan how the content will be arranged before moving to design and code.

<h3>🧠 Purpose of Wireframing</h3>

<ul>
  <li>Clarify the structure of a page or feature</li>
  <li>Visualize the content layout and UI elements</li>
  <li>Identify potential UX issues early</li>
  <li>Streamline communication with stakeholders</li>
</ul>

<h3>📊 Types of Wireframes</h3>

<h4>1. Low-Fidelity Wireframes</h4>
- Very basic  
- Often hand-drawn or built using boxes and labels  
- Focus only on layout, not design

<h4>2. Mid-Fidelity Wireframes</h4>
- More accurate spacing and alignment  
- Includes content blocks, button placements, etc.  
- Often made using tools like Figma or Balsamiq

<h4>3. High-Fidelity Wireframes</h4>
- Closely resembles actual UI  
- May include placeholder images, font types, even basic interactivity  
- Almost like a non-styled prototype

<h3>🛠️ Common Elements in Wireframes</h3>

<ul>
  <li>Headers and Navigation Bars</li>
  <li>Buttons, Links, Icons</li>
  <li>Text blocks or placeholders ("Lorem Ipsum")</li>
  <li>Image placeholders (often shown as grey boxes with an "X")</li>
  <li>Forms (input fields, dropdowns)</li>
</ul>

<h3>📐 Tools for Wireframing</h3>

<ul>
  <li>✏️ Pen & Paper – for quick sketches</li>
  <li>🧩 Figma – popular collaborative design tool</li>
  <li>📐 Balsamiq – known for low-fi wireframes</li>
  <li>🎯 Adobe XD, Sketch – good for mid- to high-fi wireframes</li>
</ul>

<h3>💡 Pro Tips</h3>

<ul>
  <li>Start with low-fi, move to hi-fi</li>
  <li>Don’t focus on colors or fonts too early</li>
  <li>Use annotations to explain functionality</li>
  <li>Test early! Wireframes are perfect for feedback and iteration</li>
</ul>

<h2>✅ Conclusion</h2>

Wireframes are the <strong>foundation</strong> of good UI/UX design.  
They help turn ideas into tangible layouts, avoid confusion, and save time in development. Whether you sketch them on paper or design them digitally, wireframes bring clarity to your creative chaos!

🧩 "Wireframes turn imagination into structure."
`

      },
      {
        title: 'UI Components',
completed: false,
content: `
<h2>💡 What Are UI Components?</h2>

UI (User Interface) components are reusable building blocks used to create the layout and functionality of web and app interfaces. Each component serves a specific purpose and enhances user interaction and experience.

They are like <strong>LEGO blocks</strong> – small parts that come together to form full pages or applications.

<h2>📘 Types of UI Components</h2>

<h3>1. 🧭 Navigation Components</h3>

Used to help users move through the interface.

<ul>
  <li><strong>Navbar / Header</strong> – Top section with logo, navigation links, profile picture, etc.</li>
  <li><strong>Sidebar</strong> – Vertical menu used to switch between different app pages or categories.</li>
  <li><strong>Tabs</strong> – Horizontal buttons that toggle between views, like "Overview | Settings | Reviews".</li>
  <li><strong>Breadcrumbs</strong> – Show page hierarchy like Home > Courses > UI Design.</li>
</ul>

<h3>2. 📝 Input Components</h3>

Used to gather information from the user.

<ul>
  <li><strong>Text Field</strong> – For single-line input like name, email.</li>
  <li><strong>Text Area</strong> – For multi-line input like messages or comments.</li>
  <li><strong>Checkbox</strong> – Allows selecting multiple options.</li>
  <li><strong>Radio Button</strong> – Select only one option from a group.</li>
  <li><strong>Toggle Switch</strong> – ON/OFF switch, commonly used for settings.</li>
  <li><strong>Dropdown Menu</strong> – A list of options that expands when clicked.</li>
  <li><strong>Slider</strong> – Select a value by sliding left or right.</li>
</ul>

<h3>3. 📦 Display Components</h3>

These components are used to present content or data.

<ul>
  <li><strong>Card</strong> – A box that contains text, images, buttons (used in dashboards, product lists, etc.)</li>
  <li><strong>List</strong> – Vertical collection of items (e.g. To-Do list).</li>
  <li><strong>Avatar</strong> – A user’s photo or initials, often circular.</li>
  <li><strong>Tooltip</strong> – A small popup that appears on hover with helpful info.</li>
  <li><strong>Modal / Popup</strong> – A dialog box that appears on top of the page to show additional content.</li>
</ul>

<h3>4. 📤 Action Components</h3>

Let users perform actions or trigger events.

<ul>
  <li><strong>Button</strong> – Most common component to submit, confirm, cancel, etc.</li>
  <li><strong>Icon Button</strong> – A button with only an icon (e.g. trash, edit, share).</li>
  <li><strong>Floating Action Button (FAB)</strong> – A prominent circular button often used for adding new items.</li>
</ul>

<h3>5. 📊 Feedback Components</h3>

Used to inform users about system responses.

<ul>
  <li><strong>Snackbar / Toast</strong> – Temporary message at the bottom/top of the screen.</li>
  <li><strong>Alert</strong> – Attention box (e.g. error, success, warning).</li>
  <li><strong>Loader / Spinner</strong> – Shown while content is loading.</li>
  <li><strong>Progress Bar</strong> – Indicates the progress of a task.</li>
</ul>

<h3>6. 📑 Layout Components</h3>

Help in structuring content on the screen.

<ul>
  <li><strong>Grid / Flexbox</strong> – Organize components in rows and columns.</li>
  <li><strong>Container</strong> – Used to wrap and align groups of components.</li>
  <li><strong>Divider</strong> – A line used to separate sections of content.</li>
</ul>

<h2>✨ Benefits of Using UI Components</h2>

<ul>
  <li>🚀 Faster development and design</li>
  <li>📦 Reusability across multiple screens</li>
  <li>🧩 Consistent user interface</li>
  <li>🔁 Easier maintenance and scalability</li>
</ul>

<h2>✅ Conclusion</h2>

UI components are the core of modern digital interfaces. Whether you're building with code or designing visually, understanding components helps you build clean, interactive, and scalable products faster.

🌱 <em>“Design once, use everywhere.”</em>
`

      },
      {
        title: 'Prototyping with Figma',
completed: false,
content: `
<h2>🧪 What is Prototyping?</h2>

Prototyping is the process of creating an interactive model of your design to simulate the user experience. It allows you to test functionality, gather feedback, and present how a real app or website will behave — all without writing code.

<h2>🎨 Why Use Figma for Prototyping?</h2>

Figma is a powerful, cloud-based design tool that makes it easy to build, link, and test interactive UI prototypes. Its real-time collaboration features and simple interface make prototyping fast and beginner-friendly.

<h2>⚙️ Prototyping Features in Figma</h2>

<ul>
  <li><strong>Interactive Links</strong> – Connect buttons, cards, and menus to other frames/pages.</li>
  <li><strong>Transitions</strong> – Add animations like slide, dissolve, or instant switches between screens.</li>
  <li><strong>Overlays</strong> – Display modals, dropdowns, or tooltips without switching screens.</li>
  <li><strong>Smart Animate</strong> – Automatically animates between matching elements (great for micro-interactions).</li>
  <li><strong>Hover Effects</strong> – Trigger animations or state changes when hovering over elements.</li>
</ul>

<h2>🛠️ How to Create a Prototype in Figma</h2>

<h3>Step 1: Design Your Screens</h3>
Create each screen or frame in Figma. Use UI components like buttons, cards, inputs, etc.

<h3>Step 2: Switch to Prototype Mode</h3>
Click the <strong>“Prototype”</strong> tab in the right panel. You’ll now be able to drag connections from one frame to another.

<h3>Step 3: Add Interactions</h3>
Drag the blue node (circle) from any component (like a button) to the target frame.  
Then set the trigger (e.g. "On Click") and animation (e.g. "Navigate to").

<h3>Step 4: Preview the Prototype</h3>
Click the <strong>“Play”</strong> button in the top-right corner to open your prototype in a new window and test the flow.

<h3>Step 5: Share and Collaborate</h3>
You can copy the link to share the prototype with teammates, stakeholders, or clients. No Figma account required to view!

<h2>📦 Prototyping Tips</h2>

<ul>
  <li>✅ Keep interactions simple and intuitive</li>
  <li>🎯 Use consistent transitions for a smoother experience</li>
  <li>🔄 Name your frames properly for easier linking</li>
  <li>📝 Add annotations if sharing with clients or developers</li>
  <li>📱 Test on different device sizes (desktop, tablet, mobile)</li>
</ul>

<h2>🚀 Use Cases of Prototyping</h2>

<ul>
  <li>UX testing and user feedback before development</li>
  <li>Client presentations and approval</li>
  <li>Developer handoff with full flow understanding</li>
  <li>Design thinking workshops and user flows</li>
</ul>

<h2>✅ Conclusion</h2>

Prototyping in Figma brings your static designs to life!  
It helps you test, validate, and improve the user experience — all before writing a single line of code.

✨ <em>“Don't just design it — experience it.”</em>
`

      },
      {
        title: 'User Testing',
completed: false,
content: `
<h2>🧪 What is User Testing?</h2>

User Testing is the process of observing real users as they interact with a product (like a website or app) to understand how easy and intuitive it is to use. It helps identify problems, uncover opportunities, and validate design decisions.

> 👤 It's all about learning how <strong>actual users</strong> experience your design — not how designers think they should!

<h2>🎯 Why is User Testing Important?</h2>

<ul>
  <li>📉 Reduces costly design mistakes</li>
  <li>🧠 Gives real insight into user behavior and pain points</li>
  <li>🛠️ Helps improve usability and functionality</li>
  <li>📈 Leads to better user satisfaction and product success</li>
</ul>

<h2>📚 Types of User Testing</h2>

<h3>1. Moderated Testing</h3>
- Done live with a facilitator guiding the user.  
- Great for deep insights, asking questions, and follow-ups.

<h3>2. Unmoderated Testing</h3>
- Users test on their own time, often using a recorded tool.  
- Faster and scalable for remote feedback.

<h3>3. Guerrilla Testing</h3>
- Very informal — asking people nearby (like in a cafe or hallway) to try your design.  
- Quick and low-cost!

<h3>4. A/B Testing</h3>
- Compare two versions (A and B) to see which performs better.  
- Used often for improving conversion rates.

<h3>5. Usability Testing</h3>
- Focused on how easy and efficient a design is to use.  
- Identifies confusion, blockers, and friction in user flow.

<h2>🧭 The User Testing Process</h2>

<h3>1. Define the Goals</h3>
What do you want to learn? (e.g., Can users easily sign up?)

<h3>2. Choose Participants</h3>
Target your actual users — not just friends or designers.

<h3>3. Create Tasks</h3>
Ask users to perform real scenarios.  
Example: "Find and enroll in a course on the website."

<h3>4. Observe & Record</h3>
Note where users struggle, succeed, or get confused.

<h3>5. Analyze & Improve</h3>
Turn observations into insights and refine your design.

<h2>🛠️ Tools for User Testing</h2>

<ul>
  <li><strong>Maze</strong> – Great for testing Figma prototypes</li>
  <li><strong>UsabilityHub</strong> – Remote tests and surveys</li>
  <li><strong>Lookback</strong> – Records live sessions</li>
  <li><strong>Hotjar</strong> – Heatmaps and behavior insights</li>
  <li><strong>Google Forms</strong> – Simple user feedback collection</li>
</ul>

<h2>💡 Tips for Effective Testing</h2>

<ul>
  <li>🎤 Let users think out loud while testing</li>
  <li>🔍 Watch actions, not just words</li>
  <li>📹 Record sessions for later analysis</li>
  <li>✏️ Keep tasks simple and clear</li>
  <li>📊 Don’t rely on just one test – iterate!</li>
</ul>

<h2>✅ Conclusion</h2>

User Testing is the secret to creating products that actually work for people.  
It turns assumptions into real knowledge and helps you design with confidence.

🌱 <em>“You are not your user — test to know, not to guess.”</em>
`

      }
      
    ]
  },
  {
  id: 3,
  title: 'Design Thinking Crash Course',
  lessons: [
    {
      title: 'What is Design Thinking?',
      completed: false,
      content: `
<h2>💭 What is Design Thinking?</h2>

Design Thinking is a human-centered approach to problem-solving. It's not just about making things pretty — it's about deeply understanding users and designing **solutions that truly work**.

It's a mindset, not a method. And it's used by designers, innovators, and teams across industries.

<h3>🧠 Core Principles:</h3>
<ul>
  <li>👂 Empathize – Understand your users' needs</li>
  <li>🔍 Define – Narrow down the core problem</li>
  <li>💡 Ideate – Generate wild and wonderful ideas</li>
  <li>🛠️ Prototype – Create quick models of solutions</li>
  <li>✅ Test – Try your prototypes with real users</li>
</ul>

🎯 <strong>Goal:</strong> Create user-first, innovative, and functional solutions!
`
    },
    {
      title: 'Design Thinking in Action',
      completed: false,
      content: `
<h2>⚙️ Real-World Applications</h2>

Design Thinking is everywhere — from tech startups to schools, from hospitals to governments.

<h3>🔧 Example 1: Healthcare</h3>
Designers created patient-friendly MRI machines by observing and empathizing with scared kids.

<h3>📦 Example 2: Packaging Design</h3>
IKEA uses prototyping and testing to reduce waste and maximize efficiency in package sizes.

<h3>🧪 Example 3: Apps & UX</h3>
Many successful apps like Airbnb, Uber, and Duolingo use design thinking to improve user experience based on real behavior.

<h2>📌 Summary</h2>
Design Thinking = Solving *real* problems, for *real* people, in *creative* ways. 🧠🚀
`
    }
  ]
},
{
  id: 4,
  title: 'Creative Typography Course',
  lessons: [
    {
      title: 'Typography Basics',
      completed: false,
      content: `
<h2>🔤 What is Typography?</h2>

Typography is the art and technique of arranging type. It involves fonts, spacing, sizing, contrast, and more — all to make text readable, appealing, and powerful.

<h3>👁️‍🗨️ Why Typography Matters:</h3>
<ul>
  <li>Influences mood and personality of a design</li>
  <li>Improves readability and user experience</li>
  <li>Communicates hierarchy and importance</li>
</ul>

<h3>🧱 Typography Terminology</h3>
<ul>
  <li><strong>Font</strong> vs <strong>Typeface</strong> – A font is a file, a typeface is a design</li>
  <li><strong>Kerning</strong> – Space between two letters</li>
  <li><strong>Leading</strong> – Line spacing between lines of text</li>
  <li><strong>Tracking</strong> – Overall letter spacing in a word or paragraph</li>
</ul>

Typography is where **words become design**.
`
    },
    {
      title: 'Expressive Typography',
      completed: false,
      content: `
<h2>🖋️ Express Yourself with Type</h2>

Creative typography goes beyond legibility — it tells a story with form.

<h3>🎨 Techniques:</h3>
<ul>
  <li>Using type as image or pattern</li>
  <li>Breaking the grid – using asymmetry for dynamic designs</li>
  <li>Layering text with colors, textures, and imagery</li>
</ul>

<h3>📚 Famous Examples:</h3>
- Paula Scher’s loud, architectural typography  
- Saul Bass’ kinetic type in movie intros  
- David Carson’s wild, rule-breaking magazine layouts

<h2>🧠 Rule of Thumb:</h2>
First learn the rules.  
Then *break them with purpose*. ✂️🔥
`
    }
  ]
},
{
  id: 5,
  title: 'Visual Hierarchy Masterclass',
  lessons: [
    {
      title: 'Intro to Visual Hierarchy',
      completed: false,
      content: `
<h2>🔍 What is Visual Hierarchy?</h2>

Visual hierarchy is the order in which users process information on a page. It helps guide their attention to the most important elements first.

<h3>📌 Why It Matters:</h3>
<ul>
  <li>Boosts readability and comprehension</li>
  <li>Makes designs feel intentional and clean</li>
  <li>Leads users to take desired actions</li>
</ul>

<h3>🎯 Goal:</h3>
Guide the eye. Prioritize information. Tell a visual story.

💡 <em>“Design is not just what it looks like, but how it works.” – Steve Jobs</em>
`
    },
    {
      title: 'Size, Scale & Contrast',
      completed: false,
      content: `
<h2>📏 Size & Scale</h2>

Larger elements naturally draw more attention. Use size to show priority.

<h3>Examples:</h3>
<ul>
  <li>Big bold headlines vs. smaller body text</li>
  <li>Larger CTA buttons for higher engagement</li>
</ul>

<h2>🎨 Contrast</h2>

Contrast helps separate elements and highlight key content.

<ul>
  <li><strong>Color contrast</strong>: Bright vs. dull</li>
  <li><strong>Font weight</strong>: Bold headers vs. light paragraphs</li>
  <li><strong>Element shape</strong>: Circles among squares grab attention</li>
</ul>

🚧 <em>Warning:</em> Too much contrast = visual clutter!
`
    },
    {
      title: 'Typography & Spacing',
      completed: false,
      content: `
<h2>🔤 Typography</h2>

Typography isn’t just about fonts — it's about communication.

<h3>Key Points:</h3>
<ul>
  <li><strong>Hierarchy of font sizes</strong>: Title > Subtitle > Body</li>
  <li><strong>Font weight</strong>: Use bold for emphasis</li>
  <li><strong>Font pairing</strong>: Mix serif and sans-serif for clarity</li>
</ul>

<h2>📏 Spacing & Alignment</h2>

Good spacing makes designs breathable and easy to scan.

<ul>
  <li>Use white space to separate content blocks</li>
  <li>Keep consistent margins and paddings</li>
  <li>Align text and elements to a grid or baseline</li>
</ul>

✨ <strong>Bonus Tip:</strong> Group related items together using proximity!
`
    },
    {
      title: 'Color as a Communication Tool',
      completed: false,
      content: `
<h2>🎨 Color & Emotion</h2>

Color evokes feelings and draws the eye.

<h3>Use color to:</h3>
<ul>
  <li>Guide attention (e.g. red for alerts, green for success)</li>
  <li>Create harmony and mood</li>
  <li>Represent brand identity</li>
</ul>

<h3>Hierarchy with Color:</h3>
<ul>
  <li>Use saturated colors sparingly for high-impact elements</li>
  <li>Use muted colors for secondary or background elements</li>
</ul>

🎯 <strong>Rule:</strong> 1 Primary, 1 Secondary, and 1 Accent color = magic combo!
`
    },
    {
      title: 'Putting It All Together',
      completed: false,
      content: `
<h2>🧠 Build a Cohesive Layout</h2>

Now combine all the principles:

<ul>
  <li>Use large, bold headlines to guide first glance</li>
  <li>Apply contrast and color to emphasize CTA buttons</li>
  <li>Keep text aligned and spaced properly</li>
</ul>

<h3>Try This Exercise:</h3>
Create a simple landing page for an app and use:
<ul>
  <li>H1, H2, and paragraph text</li>
  <li>1 button with high visual weight</li>
  <li>Color + spacing to separate sections</li>
</ul>

✅ You’ve officially created a hierarchy-driven design!

🌟 <em>“Good design is obvious. Great design is transparent.”</em>
`
    }
  ]
},
{
  id: 6,
  title: 'Microinteractions & Motion Design',
  lessons: [
    {
      title: 'What Are Microinteractions?',
      completed: false,
      content: `
<h2>🎛️ What Are Microinteractions?</h2>

Microinteractions are **small, subtle animations or responses** that occur in response to user actions.

<h3>Examples:</h3>
<ul>
  <li>❤️ Like button animation on Instagram</li>
  <li>🔁 Loading spinners when content loads</li>
  <li>🔔 Notification sounds or alerts</li>
</ul>

<h3>🎯 Purpose of Microinteractions:</h3>
<ul>
  <li>Improve UX by giving feedback</li>
  <li>Help users understand cause-effect actions</li>
  <li>Delight users and add personality</li>
</ul>

💡 <em>"The details are not the details. They make the design." — Charles Eames</em>
`
    },
    {
      title: 'Designing for Delight',
      completed: false,
      content: `
<h2>✨ Designing for Delight</h2>

The goal of microinteractions isn’t just function — it’s to make users smile! 😊

<h3>Top Triggers for Microinteractions:</h3>
<ul>
  <li><strong>Hover</strong> – highlight or animate on mouse-over</li>
  <li><strong>Click / Tap</strong> – button press, reaction</li>
  <li><strong>Scroll</strong> – scroll reveal or parallax effects</li>
  <li><strong>Swipe</strong> – cards, lists, or toggles</li>
</ul>

<h3>Design Tips:</h3>
<ul>
  <li>Keep it subtle and fast (under 500ms)</li>
  <li>Use easing curves (ease-in, ease-out)</li>
  <li>Test for usefulness, not just fun</li>
</ul>

✅ Microinteractions should feel natural — like digital body language.
`
    },
    {
      title: 'Tools & Techniques',
      completed: false,
      content: `
<h2>🛠️ Tools for Creating Microinteractions</h2>

<h3>🔧 In Figma:</h3>
<ul>
  <li><strong>Smart Animate</strong> – auto-animate matching elements</li>
  <li><strong>After Delay / Hover triggers</strong></li>
  <li><strong>Overlay & swap transitions</strong></li>
</ul>

<h3>🎞️ Other Tools:</h3>
<ul>
  <li><strong>Framer</strong> – for advanced motion design</li>
  <li><strong>Lottie</strong> – for exporting JSON animations</li>
  <li><strong>Adobe After Effects</strong> – cinematic-level control</li>
</ul>

<h3>📦 Code Tools:</h3>
<ul>
  <li><strong>CSS animations & transitions</strong></li>
  <li><strong>React Spring / Framer Motion</strong> (React libraries)</li>
</ul>

💡 Best Practice: Prototype before you animate — motion should match user goals.
`
    },
    {
      title: 'Case Studies & Practice',
      completed: false,
      content: `
<h2>📚 Real-World Examples</h2>

<h3>Instagram:</h3>
<ul>
  <li>Double-tap heart burst animation</li>
  <li>Scroll loader at the bottom of feed</li>
</ul>

<h3>Google Material Design:</h3>
<ul>
  <li>Ripple effect on button press</li>
  <li>Progress indicators during downloads</li>
</ul>

<h3>Apple iOS:</h3>
<ul>
  <li>Subtle bounce when scrolling past end</li>
  <li>Smooth transitions between app states</li>
</ul>

<h2>🎓 Practice Task:</h2>
<ul>
  <li>Create a prototype with a like button, a hover state, and a loading interaction using Figma</li>
</ul>

🌟 <strong>Reminder:</strong> Good motion is invisible. Bad motion is distracting!
`
    }
  ]
},
{
  id: 7,
  title: 'Web Accessibility Essentials',
  lessons: [
    {
      title: 'What is Web Accessibility?',
      completed: false,
      content: `
<h2>🌐 What is Web Accessibility?</h2>

Web accessibility means designing websites and apps that can be used by <strong>everyone</strong>, including people with disabilities.

<h3>🧠 Why It Matters:</h3>
<ul>
  <li>1 in 6 people globally has a disability</li>
  <li>It’s a basic human right</li>
  <li>Also required by laws like ADA & WCAG</li>
</ul>

<h3>💪 Disabilities to Consider:</h3>
<ul>
  <li>🦯 Visual – blind, low vision, color blindness</li>
  <li>🦻 Hearing – deaf or hard of hearing</li>
  <li>🧠 Cognitive – learning disabilities, dyslexia</li>
  <li>🤲 Motor – limited mobility or dexterity</li>
</ul>

✅ Accessible design makes your product better for everyone — even those without disabilities!
`
    },
    {
      title: 'WCAG Principles (POUR)',
      completed: false,
      content: `
<h2>📘 WCAG Guidelines – POUR</h2>

Web Content Accessibility Guidelines (WCAG) are the standard for accessibility. They are based on 4 main principles:

<h3>1. Perceivable</h3>
<ul>
  <li>Text alternatives for images</li>
  <li>Use captions for videos</li>
  <li>Readable fonts and contrast</li>
</ul>

<h3>2. Operable</h3>
<ul>
  <li>Website works with keyboard only</li>
  <li>Clickable elements are large enough</li>
  <li>Time-based actions can be paused</li>
</ul>

<h3>3. Understandable</h3>
<ul>
  <li>Clear navigation and layout</li>
  <li>Avoid jargon and complex language</li>
  <li>Predictable interface behavior</li>
</ul>

<h3>4. Robust</h3>
<ul>
  <li>Works on all devices and browsers</li>
  <li>Supports assistive technologies like screen readers</li>
</ul>

🌟 Tip: Follow WCAG 2.1 AA standards for best results!
`
    },
    {
      title: 'Assistive Technologies',
      completed: false,
      content: `
<h2>🧩 Assistive Tech Users Depend On</h2>

Assistive technologies help users interact with digital products more easily.

<h3>Examples:</h3>
<ul>
  <li><strong>Screen Readers</strong> – Read out content (e.g., NVDA, VoiceOver)</li>
  <li><strong>Screen Magnifiers</strong> – Zoom into content</li>
  <li><strong>Braille Displays</strong> – Tactile output for blind users</li>
  <li><strong>Speech Input</strong> – Navigate by voice commands</li>
  <li><strong>Switch Control</strong> – For motor impairments</li>
</ul>

<h3>Design Tip:</h3>
<ul>
  <li>Use semantic HTML (like <code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>) so screen readers can navigate properly</li>
  <li>Label all buttons and form fields</li>
</ul>

💬 <em>"If it works for assistive tech, it works for everyone."</em>
`
    },
    {
      title: 'Accessible UI Design Tips',
      completed: false,
      content: `
<h2>🖌️ Design with Inclusion in Mind</h2>

<h3>1. Use High Contrast</h3>
<ul>
  <li>Text should have a contrast ratio of at least 4.5:1</li>
  <li>Use dark text on light backgrounds (or vice versa)</li>
</ul>

<h3>2. Don’t Rely on Color Alone</h3>
<ul>
  <li>Use icons, labels, or patterns in charts, buttons, or alerts</li>
  <li>Colorblind users may miss red/green cues</li>
</ul>

<h3>3. Add Focus Indicators</h3>
<ul>
  <li>Show outlines when elements are focused with keyboard</li>
</ul>

<h3>4. Use Alt Text</h3>
<ul>
  <li>Describe the function or content of each image</li>
  <li>e.g., “Submit button with paper plane icon”</li>
</ul>

<h3>5. Test with Real Users!</h3>
<ul>
  <li>Get feedback from users with different abilities</li>
</ul>

✅ Accessibility = usability + empathy
`
    }
  ]
},
{
  id: 8,
  title: 'Copywriting for Designers',
  lessons: [
    {
      title: 'What is UX Copywriting?',
      completed: false,
      content: `
<h2>✍️ What is UX Copywriting?</h2>

UX (User Experience) Copywriting is the art of writing clear, helpful, and human-centered content for interfaces — like buttons, error messages, forms, and more.

It guides users, reduces confusion, and makes the digital experience smoother.

<h3>💡 Example:</h3>
Instead of:  
<code>Error 404</code>  
Use:  
<code>Oops! We couldn’t find that page.</code>

<h3>📌 Good UX Copy...</h3>
<ul>
  <li>🚪 Opens doors – makes users feel welcome</li>
  <li>🧭 Gives direction – helps them know what to do</li>
  <li>🎯 Reduces friction – avoids confusion and doubt</li>
</ul>

💬 <em>“Design is how it works. Copy is how it speaks.”</em>
`
    },
    {
      title: 'Principles of Great Copy',
      completed: false,
      content: `
<h2>🧠 Principles of Great UX Copy</h2>

<h3>1. Be Clear</h3>
<ul>
  <li>Use simple, everyday words</li>
  <li>Cut jargon, fluff, and long sentences</li>
</ul>

<h3>2. Be Useful</h3>
<ul>
  <li>Write with a purpose – don’t just sound clever</li>
  <li>Every word should guide, explain, or motivate</li>
</ul>

<h3>3. Be Human</h3>
<ul>
  <li>Talk like a friendly assistant, not a robot</li>
  <li>Use contractions (you’re, we’ve) to sound natural</li>
</ul>

<h3>4. Be Consistent</h3>
<ul>
  <li>Use the same tone, voice, and labels across screens</li>
</ul>

<h3>5. Be Context-Aware</h3>
<ul>
  <li>Adapt copy to match the user's state: excited, confused, stuck, successful</li>
</ul>

🔑 <strong>Golden Rule:</strong> “Write for people, not screens.”
`
    },
    {
      title: 'Microcopy Magic',
      completed: false,
      content: `
<h2>✨ Microcopy: Tiny Words, Huge Impact</h2>

Microcopy is small bits of text that support the user journey — often invisible, but incredibly powerful!

<h3>Where Microcopy Lives:</h3>
<ul>
  <li>🛎️ Buttons (“Join now”, “Try free”)</li>
  <li>📋 Forms (“We’ll never spam you”) </li>
  <li>📦 Empty states (“No items yet — time to add some!”)</li>
  <li>💥 Errors (“Oops! Something went wrong.”)</li>
  <li>✅ Success (“Account created. Welcome aboard!”)</li>
</ul>

<h3>Tips for Microcopy:</h3>
<ul>
  <li>Guide users, not lecture them</li>
  <li>Make errors helpful, not harsh</li>
  <li>Use positive reinforcement</li>
  <li>Match tone to context (funny? friendly? formal?)</li>
</ul>

🎯 <em>Microcopy is design in words.</em>
`
    },
    {
      title: 'Writing with Voice & Tone',
      completed: false,
      content: `
<h2>🎙️ Writing with Voice & Tone</h2>

Your product should feel like it has a personality — that’s where voice and tone come in.

<h3>🎤 Voice = Brand Personality</h3>
<ul>
  <li>Is your product playful, trustworthy, casual, formal?</li>
  <li>Maintain the same voice across all screens</li>
</ul>

<h3>🎭 Tone = Emotion per Moment</h3>
<ul>
  <li>Friendly during sign-up</li>
  <li>Empathetic during error messages</li>
  <li>Excited when user completes a task</li>
</ul>

<h3>✏️ Example:</h3>

<b>Voice:</b> Playful  
<b>Tone (on success):</b> “Woohoo! You’re in. Let’s do this.”  
<b>Tone (on error):</b> “Hmm... that didn’t work. Let’s try again?”

✅ Copy reflects emotion — so match your user’s feelings.
`
    }
  ]
},

];

// 🔁 Add calculated progress to each subject
subjects.forEach((subject) => {
  subject.progress = calculateProgress(subject.lessons);
});

module.exports = subjects;