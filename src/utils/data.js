/* eslint-disable @typescript-eslint/no-unused-vars */
const cards = [
  {
    title: "HTML",
    color: "orange",
    border: "border-orange-500",
    text: "text-orange-600",
    href: "/html",
    desc: "Master the foundational language for building web pages. Learn about semantic structure, forms, and accessibility.",
    btn: "bg-orange-500 hover:bg-orange-600",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    color: "blue",
    border: "border-blue-500",
    text: "text-blue-600",
    href: "/css",
    desc: "Style your web applications with confidence. Explore Flexbox, Grid, animations, and responsive design techniques.",
    btn: "bg-blue-500 hover:bg-blue-600",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "JavaScript",
    color: "yellow",
    border: "border-yellow-500",
    text: "text-yellow-600",
    href: "/javascript",
    desc: "Add interactivity and dynamic behavior to your websites. Dive into DOM manipulation, asynchronous JavaScript, and modern ES6+ features.",
    btn: "bg-yellow-500 hover:bg-yellow-600",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "React.js",
    color: "sky",
    border: "border-sky-500",
    text: "text-sky-600",
    href: "/react",
    desc: "Build powerful and scalable user interfaces with React.js. Learn about components, state management, and the React ecosystem.",
    btn: "bg-sky-500 hover:bg-sky-600",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Python",
    color: "green",
    border: "border-green-600",
    text: "text-green-700",
    href: "/python",
    desc: "Explore the versatility of Python for web development (Django, Flask), data science, and automation.",
    btn: "bg-green-600 hover:bg-green-700",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
];

// Stats data
const stats = [
  { number: "50K+", label: "Active Students" },
  { number: "200+", label: "Courses Available" },
  { number: "98%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" },
];

// Features data
const features = [
  {
    icon: "🎯",
    title: "Hands-on Projects",
    description:
      "Build real-world applications that showcase your skills to potential employers.",
  },
  {
    icon: "👥",
    title: "Expert Mentorship",
    description:
      "Get guidance from industry professionals with years of experience.",
  },
  {
    icon: "📱",
    title: "Mobile-First Learning",
    description:
      "Learn on any device with our responsive platform designed for modern learners.",
  },
  {
    icon: "🏆",
    title: "Industry Certificates",
    description:
      "Earn recognized certificates that validate your front-end development skills.",
  },
];



// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer at Google",
    content:
      "This platform transformed my career. The hands-on approach and expert guidance helped me land my dream job.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Mike Chen",
    role: "UI/UX Designer at Microsoft",
    content:
      "The courses are incredibly well-structured. I went from beginner to professional in just 6 months.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Full Stack Developer at Netflix",
    content:
      "The community support and mentorship made all the difference in my learning journey.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

  
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const highlightCss = (code) => {
  // Define colors using Tailwind CSS classes for a VS Code-like appearance for CSS
  const selectorColor = "text-yellow-500"; // For selectors like body, .class, #id
  const propertyColor = "text-blue-400"; // For property names like color, background-color
  const valueColor = "text-green-400"; // For property values like blue, #FFF, 16px
  const commentColor = "text-gray-500 italic"; // For CSS comments
  const atRuleColor = "text-purple-400"; // For @media, @keyframes
  const keywordColor = "text-red-400"; // For !important
  const numberColor = "text-yellow-400"; // For numbers with units or just numbers
  const punctuationColor = "text-gray-300"; // For (){}[],.;:

  const tokenPatterns = [
    { regex: /()/g, className: commentColor }, // HTML comments (Fixed regex)
    { regex: /(<!DOCTYPE html>)/g, className: doctypeColor }, // DOCTYPE
    // Tag names: <tagname> or </tagname>
    {
      regex: /(<\/?)([a-zA-Z0-9-]+)\b/g,
      className: tagNameColor,
      replacer: (match, ltSlash, tagName) =>
        `${ltSlash}<span class="${tagNameColor}">${tagName}</span>`,
    },
    // Attribute names: attribute="value"
    {
      regex: /\b([a-zA-Z-]+)(=)("[^"]*")/g,
      className: attributeNameColor,
      replacer: (match, attrName, eq, attrValue) =>
        `<span class="${attributeNameColor}">${attrName}</span>${eq}<span class="${attributeValueColor}">${attrValue}</span>`,
    },
    // Self-closing tag slash
    { regex: /(\/>)/g, className: punctuationColor },
    // Other punctuation
    { regex: /([="])/g, className: punctuationColor },
  ];
  

   // 1. HTML escape the entire code string first.
   let htmlEscapedCode = code
   .replace(/&/g, "&") // Must be done first!
   .replace(/</g, "<") // Escape <
   .replace(/>/g, ">"); // Escape >
  // Define patterns with their corresponding class names.
  // The order here is important for sequential replacement: more specific patterns first.

  let currentCode = htmlEscapedCode;

  // Apply each pattern sequentially.
  tokenPatterns.forEach((pattern) => {
    currentCode = currentCode.replace(pattern.regex, (match) => {
      // Direct wrap: always wrap the matched token.
      // This ensures valid HTML output and avoids the previous ReferenceError.
      return `<span class="${pattern.className}">${match}</span>`;
    });
  });

  return { __html: currentCode };
};


    
export { cards, stats, features, testimonials, tokenPatterns, htmlEscapedCode };// 1. HTML escape the entire code string first.

