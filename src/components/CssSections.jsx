import React from "react";


import {
  FaSearch,
  FaCogs,
  FaImage,
  FaFont,
  FaMagic,
  FaRulerCombined,
  FaMobileAlt,
  FaWaveSquare,
  FaFilm,
  FaBullseye,
  FaSlidersH,
  FaBox,
  FaLayerGroup,
} from "react-icons/fa";
import { SiCss3 } from "react-icons/si";

// Define CSS sections with content
const cssSections = {
  intro: {
    title: "Introduction to CSS",
    icon: <SiCss3 className="inline text-blue-500" />, // Changed from FaPalette to SiCss3
    content: (
      <>
        <p className="text-lg mb-4">
          CSS (Cascading Style Sheets) is the language we use to style an HTML
          document. It describes how HTML elements should be displayed on
          screen, paper, or in other media.
        </p>
        <p className="text-lg mb-4">
          CSS is a cornerstone technology of the World Wide Web, alongside HTML
          and JavaScript. It's what transforms raw content into beautifully
          designed web experiences!
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Why CSS is Essential:
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>
            <strong className="font-bold">Separation of Concerns:</strong> Keeps
            content (HTML) and presentation (CSS) separate, making code cleaner
            and easier to manage.
          </li>
          <li>
            <strong className="font-bold">Efficiency:</strong> Styles can be
            defined once and applied across multiple web pages, saving time and
            ensuring consistency.
          </li>
          <li>
            <strong className="font-bold">Responsiveness:</strong> Enables
            websites to adapt and look great on any device size, from mobile
            phones to large desktops.
          </li>
          <li>
            <strong className="font-bold">Rich User Experience:</strong> Allows
            for animations, transitions, and complex layouts that enhance user
            interaction.
          </li>
        </ul>
      </>
    ),
    example: null,
  },
  syntax_selectors: {
    title: "CSS Syntax & Selectors",
    icon: <FaSearch className="inline text-blue-500" />,
    content: (
      <>
        <p className="text-lg mb-4">
          A CSS rule-set consists of a selector and a declaration block.
        </p>
        <p className="text-lg mb-4">
          The selector points to the HTML element you want to style. The
          declaration block contains one or more declarations separated by
          semicolons.
        </p>
        <p className="text-lg mb-4">
          Each declaration includes a CSS property name and a value, separated
          by a colon.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Common Selectors:
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>
            <strong className="font-bold">Element Selector:</strong> `p {"{"}{" "}
            ... {"}"}` (styles all `&lt;p&gt;` elements)
          </li>
          <li>
            <strong className="font-bold">ID Selector:</strong> `#header {"{"}{" "}
            ... {"}"}` (styles the element with `id="header"`)
          </li>
          <li>
            <strong className="font-bold">Class Selector:</strong> `.button{" "}
            {"{"} ... {"}"}` (styles all elements with `class="button"`)
          </li>
          <li>
            <strong className="font-bold">Universal Selector:</strong> `* {"{"}{" "}
            ... {"}"}` (styles all elements)
          </li>
          <li>
            <strong className="font-bold">Attribute Selector:</strong>{" "}
            `[type="text"] {"{"} ... {"}"}` (styles elements with a specific
            attribute/value)
          </li>
          <li>
            <strong className="font-bold">Descendant Selector:</strong> `div p{" "}
            {"{"} ... {"}"}` (styles `&lt;p&gt;` elements inside `&lt;div&gt;`s)
          </li>
          <li>
            <strong className="font-bold">Child Selector:</strong> `ul &gt; li{" "}
            {"{"} ... {"}"}` (styles `&lt;li&gt;` elements that are direct
            children of `&lt;ul&gt;`)
          </li>
          <li>
            <strong className="font-bold">Adjacent Sibling Selector:</strong>{" "}
            `h1 + p {"{"} ... {"}"}` (styles the first `&lt;p&gt;` immediately
            following an `&lt;h1&gt;`)
          </li>
          <li>
            <strong className="font-bold">General Sibling Selector:</strong> `h1
            ~ p {"{"} ... {"}"}` (styles all `&lt;p&gt;` elements that are
            siblings of an `&lt;h1&gt;`)
          </li>
        </ul>
      </>
    ),
    example: `/* A basic CSS rule-set */
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f0f4f8; /* Light blue-gray */
}

/* Styling an element by its ID */
#main-title {
  color: #1a202c; /* Dark gray */
  text-align: center;
}

/* Styling elements by their class */
.card {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}`,
  },
  properties: {
    title: "Core CSS Properties",
    icon: <FaCogs className="inline text-gray-700" />,
    content: (
      <>
        <p className="text-lg mb-4">
          CSS properties control the visual presentation of HTML elements. There
          are hundreds of properties, but some are fundamental for any design.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Color & Background:
        </h3>
        <p className="text-lg mb-4">
          `color` (text color), `background-color` (element background),
          `background-image`, `background-repeat`, `background-position`.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Text & Fonts:
        </h3>
        <p className="text-lg mb-4">
          `font-family`, `font-size`, `font-weight`, `text-align`,
          `line-height`, `text-decoration`, `letter-spacing`, `word-spacing`.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Box Model:
        </h3>
        <p className="text-lg mb-4">
          Every HTML element is a rectangular box. The box model defines how
          `content`, `padding`, `border`, and `margin` are applied and
          calculated.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Display Property:
        </h3>
        <p className="text-lg mb-4">
          Controls how an element is rendered. Key values: `block`, `inline`,
          `inline-block`, `none`, `flex`, `grid`.
        </p>
      </>
    ),
    example: `/* Color and Background */
.hero-section {
  background-color: #4a90e2; /* Blue */
  color: white;
  padding: 3rem;
}

/* Text and Fonts */
h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
}

/* Box Model Example */
.product-item {
  width: 300px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  margin: 15px;
  box-sizing: border-box; /* Crucial for consistent sizing */
}

/* Display Property */
.nav-item {
  display: inline-block;
  margin-right: 1rem;
}`,
  },
  advanced_backgrounds_gradients: {
    title: "Advanced Backgrounds & Gradients",
    icon: <FaImage className="inline text-purple-500" />,
    content: (
      <>
        <p className="text-lg mb-4">
          CSS3 significantly enhanced background properties, allowing for more
          complex and visually rich designs, including gradients and multiple
          backgrounds.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Background Properties:
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>
            `background-size`: Controls the size of the background image
            (`cover`, `contain`, specific dimensions).
          </li>
          <li>
            `background-origin`: Specifies the positioning area of the
            background image (e.g., `padding-box`, `border-box`, `content-box`).
          </li>
          <li>
            `background-clip`: Determines how the background extends into the
            element's padding and border areas.
          </li>
          <li>
            <strong className="font-bold">Multiple Backgrounds:</strong> You can
            apply multiple background images to a single element, layered on top
            of each other.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          CSS Gradients:
        </h3>
        <p className="text-lg mb-4">
          Allow for smooth transitions between two or more specified colors.
          They are treated as image values.
        </p>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>
            `linear-gradient()`: Creates a linear color progression (e.g., top
            to bottom, left to right, or at an angle).
          </li>
          <li>
            `radial-gradient()`: Creates a radial color progression (e.g., from
            the center outwards).
          </li>
        </ul>
      </>
    ),
    example: `/* Multiple Backgrounds & background-size */
.multi-bg-element {
  background-image: url('https://placehold.co/100x100/FF5733/FFFFFF?text=A'), url('https://placehold.co/150x150/33FF57/FFFFFF?text=B');
  background-position: top left, bottom right;
  background-repeat: no-repeat;
  background-size: 50px, 70px;
  padding: 20px;
  border: 10px solid #ccc;
}

/* Linear Gradient */
.linear-gradient-box {
  background-image: linear-gradient(to right, #ff7e5f, #feb47b); /* Orange to Peach */
  height: 100px;
}

/* Radial Gradient */
.radial-gradient-box {
  background-image: radial-gradient(circle, #a8c0ff, #392b58); /* Light Blue to Dark Purple */
  height: 100px;
  border-radius: 50%;
}`,
  },
  text_effects_web_fonts: {
    title: "Text Effects & Web Fonts",
    icon: <FaFont className="inline text-yellow-600" />,
    content: (
      <>
        <p className="text-lg mb-4">
          CSS3 brought powerful capabilities for styling text and embedding
          custom fonts, greatly enhancing typographic possibilities.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Text Effects:
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>
            `text-shadow`: Applies a shadow effect to text. Can have multiple
            shadows.
          </li>
          <li>
            `word-wrap` / `overflow-wrap`: Controls whether the browser can
            break lines within words to prevent content from overflowing its
            container.
          </li>
          <li>
            `text-overflow`: Specifies how overflowed content that is not
            displayed should be signaled to the user (e.g., `ellipsis`).
          </li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Web Fonts (`@font-face`):
        </h3>
        <p className="text-lg mb-4">
          The `@font-face` CSS at-rule allows you to define and embed custom
          fonts into your web pages, ensuring consistent typography across
          different user systems.
        </p>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>`font-family`: A name for your custom font.</li>
          <li>
            `src`: Specifies the path to the font files (e.g., `.woff2`,
            `.woff`, `.ttf`, `.otf`).
          </li>
          <li>
            `font-weight`, `font-style`: Optional descriptors to match font
            variations.
          </li>
        </ul>
      </>
    ),
    example: `/* Text Shadow */
.fancy-heading {
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 3rem;
}

/* Word Wrap / Text Overflow */
.comment-box {
  width: 200px;
  border: 1px solid #ccc;
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflowing content */
  text-overflow: ellipsis; /* Show "..." for overflow */
}

/* @font-face example */
@font-face {
  font-family: 'MyCustomFont';
  src: url('my-custom-font.woff2') format('woff2'),
       url('my-custom-font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.custom-font-text {
  font-family: 'MyCustomFont', sans-serif;
  font-size: 1.5rem;
}`,
  },
  filter_effects: {
    title: "CSS Filter Effects",
    icon: <FaMagic className="inline text-indigo-500" />,
    content: (
      <>
        <p className="text-lg mb-4">
          CSS `filter` property provides graphical effects like blurring, color
          shifting, or brightness adjustments to elements, typically images, but
          also applicable to any HTML element.
        </p>
        <p className="text-lg mb-4">
          It's a powerful way to apply Photoshop-like effects directly in CSS
          without needing image editing software.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Common Filter Functions:
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>`blur(px)`: Blurs the image.</li>
          <li>`brightness(%)`: Adjusts brightness.</li>
          <li>`contrast(%)`: Adjusts contrast.</li>
          <li>`grayscale(%)`: Converts to grayscale.</li>
          <li>`hue-rotate(deg)`: Applies a hue rotation.</li>
          <li>`invert(%)`: Inverts colors.</li>
          <li>`opacity(%)`: Sets transparency.</li>
          <li>`saturate(%)`: Saturates colors.</li>
          <li>`sepia(%)`: Applies a sepia tone.</li>
          <li>
            `drop-shadow(h-shadow v-shadow blur spread color)`: Applies a drop
            shadow (similar to `box-shadow` but for the alpha mask).
          </li>
        </ul>
      </>
    ),
    example: `/* Apply a blur effect to an image on hover */
.image-filter {
  transition: filter 0.3s ease-in-out;
}

.image-filter:hover {
  filter: blur(5px) grayscale(70%);
}

/* Apply a filter to a div */
.filtered-box {
  width: 150px;
  height: 150px;
  background-color: #c6f6d5; /* Light Green */
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.4));
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #2f855a;
}`,
  },
  layout: {
    title: "CSS Layout: Flexbox & Grid",
    icon: <FaRulerCombined className="inline text-green-600" />,
    content: (
      <>
        <p className="text-lg mb-4">
          Modern CSS offers powerful layout modules for creating complex and
          responsive designs.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Flexbox (Flexible Box Layout):
        </h3>
        <p className="text-lg mb-4">
          A one-dimensional layout method for arranging items in rows or
          columns. It excels at distributing space along a single axis and
          aligning items.
        </p>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>`display: flex;` creates a flex container.</li>
          <li>`justify-content`: Aligns items along the main axis.</li>
          <li>`align-items`: Aligns items along the cross axis.</li>
          <li>`flex-direction`, `flex-wrap`, `gap` are key properties.</li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          CSS Grid Layout:
        </h3>
        <p className="text-lg mb-4">
          A two-dimensional layout system for arranging items into rows and
          columns. Ideal for overall page layouts and complex component
          structures.
        </p>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>`display: grid;` creates a grid container.</li>
          <li>
            `grid-template-columns`, `grid-template-rows`: Define the grid's
            structure.
          </li>
          <li>`gap`: Sets spacing between grid cells.</li>
          <li>`grid-column`, `grid-row`: Place items within the grid.</li>
        </ul>
      </>
    ),
    example: `/* Flexbox Example: Centering content */
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #e0f7fa; /* Light Cyan */
}

/* Grid Example: Responsive 3-column layout */
.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #fce4ec; /* Light Pink */
}`,
  },
  responsive: {
    title: "Responsive Web Design",
    icon: <FaMobileAlt className="inline text-blue-400" />,
    content: (
      <>
        <p className="text-lg mb-4">
          Responsive design ensures your website adapts seamlessly to various
          screen sizes and devices, providing an optimal viewing experience for
          all users.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Key Techniques:
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>
            <strong className="font-bold">Media Queries:</strong> Apply styles
            conditionally based on device characteristics (e.g., `max-width`,
            `min-width`, `orientation`).
          </li>
          <li>
            <strong className="font-bold">Fluid Layouts:</strong> Use relative
            units (`%`, `vw`, `vh`, `em`, `rem`) for dimensions instead of fixed
            pixels.
          </li>
          <li>
            <strong className="font-bold">Flexible Images & Media:</strong>{" "}
            Ensure images and videos scale down without overflowing (`max-width:
            100%; height: auto;`).
          </li>
          <li>
            <strong className="font-bold">Mobile-First Approach:</strong> Design
            for the smallest screen first, then progressively enhance for larger
            screens.
          </li>
        </ul>
      </>
    ),
    example: `/* Media Query for screens smaller than 768px */
@media (max-width: 767px) {
  .container {
    flex-direction: column; /* Stack items vertically on small screens */
    padding: 1rem;
  }
  .sidebar {
    display: none; /* Hide sidebar on small screens */
  }
}

/* Fluid image example */
img {
  max-width: 100%;
  height: auto;
  display: block; /* Removes extra space below images */
}`,
  },
  transitions_transforms: {
    title: "Transitions & Transforms",
    icon: <FaWaveSquare className="inline text-pink-400" />,
    content: (
      <>
        <p className="text-lg mb-4">
          CSS transitions and transforms add dynamic visual effects, making your
          web pages more interactive and engaging.
        </p>
        <p className="text-lg mb-4">
          They occur smoothly over a specified duration.
        </p>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>
            `transition-property`: Which property to animate (e.g., `opacity`,
            `background-color`).
          </li>
          <li>
            `transition-duration`: How long the animation takes (e.g., `0.3s`,
            `500ms`).
          </li>
          <li>
            `transition-timing-function`: The speed curve of the animation
            (e.g., `ease-in-out`, `linear`).
          </li>
          <li>`transition-delay`: When the animation should start.</li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          CSS Transforms:
        </h3>
        <p className="text-lg mb-4">
          Allow you to move, rotate, scale, and skew elements in 2D or 3D space
          without affecting the document flow.
        </p>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>`translate(x, y)`: Moves an element.</li>
          <li>`rotate(angle)`: Rotates an element.</li>
          <li>`scale(x, y)`: Resizes an element.</li>
          <li>`skew(x-angle, y-angle)`: Skews an element.</li>
          <li>
            `perspective()`, `rotateX()`, `rotateY()`, `rotateZ()` for 3D
            effects.
          </li>
        </ul>
      </>
    ),
    example: `/* Transition Example: Smooth button hover */
.animated-button {
  background-color: #667eea; /* Indigo */
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease-out;
}

.animated-button:hover {
  background-color: #5a67d8; /* Darker Indigo */
  transform: translateY(-3px) scale(1.02);
}

/* Transform Example: Rotating a box */
.rotate-box {
  width: 100px;
  height: 100px;
  background-color: #f6ad55; /* Orange */
  margin: 50px;
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Bounce effect */
}

.rotate-box:hover {
  transform: rotate(180deg) scale(1.1);
}`,
  },
  animations: {
    title: "CSS Animations (Keyframes)",
    icon: <FaFilm className="inline text-red-400" />,
    content: (
      <>
        <p className="text-lg mb-4">
          CSS animations allow you to create complex, multi-step animations
          using keyframes. Unlike transitions, animations can run automatically
          and repeatedly.
        </p>
        <p className="text-lg mb-4">
          The `@keyframes` rule defines the animation's sequence, specifying
          styles at various points (e.g., `from`/`to` or percentages).
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Key Animation Properties:
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>`animation-name`: Links the element to the `@keyframes` rule.</li>
          <li>
            `animation-duration`: How long one cycle of the animation takes.
          </li>
          <li>`animation-timing-function`: Speed curve for the animation.</li>
          <li>`animation-delay`: When the animation starts.</li>
          <li>
            `animation-iteration-count`: How many times the animation should
            play (`infinite` for continuous).
          </li>
          <li>
            `animation-direction`: Whether the animation should play forwards,
            backwards, or alternate.
          </li>
          <li>
            `animation-fill-mode`: How styles are applied before and after the
            animation.
          </li>
        </ul>
      </>
    ),
    example: `/* Define the animation sequence */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Apply the animation to an element */
.bouncing-element {
  width: 80px;
  height: 80px;
  background-color: #68d391; /* Green */
  border-radius: 50%;
  margin: 50px auto;
  animation: bounce 1s ease-in-out infinite; /* Name, duration, timing, repetition */
}`,
  },
  pseudo_classes_elements: {
    title: "Pseudo-classes & Pseudo-elements",
    icon: <FaBullseye className="inline text-cyan-600" />,
    content: (
      <>
        <p className="text-lg mb-4">
          These powerful CSS features allow you to target elements based on
          their state or to style specific parts of an element without adding
          extra HTML markup.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Pseudo-classes (`:`):
        </h3>
        <p className="text-lg mb-4">
          Select elements based on a special state. Examples:
        </p>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>`:hover`: When the user's mouse pointer is over an element.</li>
          <li>
            `:active`: When an element is being activated (e.g., clicked).
          </li>
          <li>
            `:focus`: When an element has input focus (e.g., a form field).
          </li>
          <li>
            `:nth-child(n)`: Selects elements based on their position among
            siblings.
          </li>
          <li>
            `:first-child`, `:last-child`: Selects the first/last child of its
            parent.
          </li>
          <li>
            `:not(selector)`: Selects elements that do NOT match the specified
            selector.
          </li>
          <li>`:checked`: For checked radio buttons or checkboxes.</li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Pseudo-elements (`::`):
        </h3>
        <p className="text-lg mb-4">
          Style a specific part of an element. Examples:
        </p>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>
            `::before`, `::after`: Inserts content before/after an element's
            content. Often used with the `content` property.
          </li>
          <li>
            `::first-line`: Styles the first line of a block-level element.
          </li>
          <li>
            `::first-letter`: Styles the first letter of a block-level element.
          </li>
          <li>
            `::selection`: Styles the portion of an element that is highlighted
            by a user.
          </li>
        </ul>
      </>
    ),
    example: `/* Pseudo-class Example */
a:hover {
  color: #ef4444; /* Red on hover */
  text-decoration: underline;
}

input:focus {
  border-color: #3b82f6; /* Blue border on focus */
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

/* Pseudo-element Example */
p::first-line {
  font-weight: bold;
  color: #059669; /* Green */
}

.icon-box::before {
  content: "⭐"; /* Add a star icon before the content */
  margin-right: 0.5rem;
}`,
  },
  variables: {
    title: "CSS Variables (Custom Properties)",
    icon: <FaSlidersH className="inline text-purple-600" />,
    content: (
      <>
        <p className="text-lg mb-4">
          CSS variables, officially called custom properties, allow you to
          define reusable values (like colors, font sizes, spacing) throughout
          your stylesheets. This significantly improves maintainability and
          flexibility.
        </p>
        <p className="text-lg mb-4">
          They are defined with two hyphens (`--`) followed by a name (e.g.,
          `--primary-color: #3B82F6;`).
        </p>
        <p className="text-lg mb-4">
          To use a variable, you use the `var()` function (e.g., `color:
          var(--primary-color);`).
        </p>
        <p className="text-lg mb-4">
          Variables are scoped, meaning they can be defined globally (on `:root`
          or `html`) or locally within specific selectors, allowing for powerful
          theming capabilities.
        </p>
      </>
    ),
    example: `:root {
  --primary-color: #2563EB; /* Deep Blue */
  --secondary-color: #8B5CF6; /* Purple */
  --text-color: #334155; /* Dark Slate */
  --spacing-md: 1.5rem;
}

body {
  font-family: 'Roboto', sans-serif;
  color: var(--text-color);
  background-color: #F8FAFC;
}

.card {
  background-color: white;
  padding: var(--spacing-md);
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: var(--primary-color);
}

button {
  background-color: var(--secondary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #7C3AED; /* Darker Purple */
}`,
  },
  units: {
    title: "CSS Units & Values",
    icon: <FaRulerCombined className="inline text-yellow-500" />,
    content: (
      <>
        <p className="text-lg mb-4">
          CSS units specify the size or length of a property. Choosing the right
          unit is crucial for responsive, accessible, and scalable designs.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Absolute Units (Fixed):
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>
            `px` (pixels): Fixed size relative to the viewing device. Most
            common, but not always ideal for responsiveness.
          </li>
          <li>
            `pt` (points), `pc` (picas), `in` (inches), `cm` (centimeters), `mm`
            (millimeters): Primarily for print stylesheets.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Relative Units (Scalable):
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>`%` (percentage): Relative to the parent element's size.</li>
          <li>
            `em`: Relative to the font-size of the element itself (or its
            nearest parent with a defined font-size).
          </li>
          <li>
            `rem` (root em): Relative to the font-size of the root
            `&lt;html&gt;` element. Excellent for consistent scaling across the
            entire document.
          </li>
          <li>
            `vw` (viewport width): Relative to 1% of the viewport's width.
          </li>
          <li>
            `vh` (viewport height): Relative to 1% of the viewport's height.
          </li>
          <li>
            `vmin` (viewport minimum): Relative to the smaller of `vw` or `vh`.
          </li>
          <li>
            `vmax` (viewport maximum): Relative to the larger of `vw` or `vh`.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Other Value Types:
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>
            `color`: Hex (`#RRGGBB`), RGB (`rgb(R,G,B)`), HSL (`hsl(H,S,L)`),
            named colors (`red`).
          </li>
          <li>`url()`: For images or other external resources.</li>
          <li>
            `deg`, `rad`, `grad`, `turn`: For angles (e.g., in `rotate()`).
          </li>
          <li>`s`, `ms`: For time (e.g., in `transition-duration`).</li>
        </ul>
      </>
    ),
    example: `/* Absolute Unit */
.fixed-size-box {
  width: 250px;
  height: 180px;
  border: 2px solid #ccc;
}

/* Relative Units for Responsiveness */
html {
  font-size: 18px; /* Base font size for rem calculations */
}

.responsive-heading {
  font-size: 2.5rem; /* 2.5 * 18px = 45px */
  line-height: 1.2em; /* 1.2 * its own font-size */
}

.full-screen-hero {
  width: 100vw; /* Full viewport width */
  height: 70vh; /* 70% of viewport height */
  background-image: url('https://placehold.co/1200x600/60A5FA/FFFFFF?text=Hero+Image');
  background-size: cover;
}`,
  },
  box_sizing: {
    title: "Box Sizing",
    icon: <FaBox className="inline text-blue-700" />,
    content: (
      <>
        <p className="text-lg mb-4">
          The `box-sizing` property defines how the total width and height of an
          element are calculated. It's crucial for predictable layouts.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          `content-box` (Default):
        </h3>
        <p className="text-lg mb-4">
          The `width` and `height` properties only apply to the content area.
          Padding and border are added *outside* of this specified width/height,
          increasing the element's total size.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          `border-box`:
        </h3>
        <p className="text-lg mb-4">
          The `width` and `height` properties include the content, padding, and
          border. Padding and border are added *inside* the specified
          width/height, making layout calculations much more intuitive.
        </p>
        <p className="text-lg mb-4">
          It's a common practice to set `box-sizing: border-box;` globally for
          easier layout management.
        </p>
      </>
    ),
    example: `/* Default behavior */
.box-content {
  width: 100px;
  height: 100px;
  padding: 20px;
  border: 5px solid red;
  /* Total width will be 100px + 20px*2 + 5px*2 = 150px */
}

/* Preferred modern behavior */
.box-border {
  width: 100px;
  height: 100px;
  padding: 20px;
  border: 5px solid blue;
  box-sizing: border-box;
  /* Total width will be exactly 100px */
}

/* Global reset (recommended) */
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}`,
  },
  z_index: {
    title: "Z-index & Stacking Context",
    icon: <FaLayerGroup className="inline text-gray-500" />,
    content: (
      <>
        <p className="text-lg mb-4">
          The `z-index` property controls the vertical stacking order of
          positioned elements that overlap. Elements with a higher `z-index`
          value are placed on top of elements with a lower value.
        </p>
        <p className="text-lg mb-4">
          `z-index` only works on elements that have a `position` value other
          than `static` (e.g., `relative`, `absolute`, `fixed`, `sticky`).
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Stacking Context:
        </h3>
        <p className="text-lg mb-4">
          A stacking context is a three-dimensional rendering context generated
          by certain CSS properties. Elements within the same stacking context
          are stacked according to their `z-index` values. An element's
          `z-index` only has meaning within its own stacking context.
        </p>
        <p className="text-lg mb-4">
          Properties that create a new stacking context include (but are not
          limited to): `position: absolute` or `relative` with `z-index` other
          than `auto`, `position: fixed` or `sticky`, `opacity` less than 1,
          `transform` other than `none`, `filter` other than `none`.
        </p>
      </>
    ),
    example: `/* Example of z-index usage */
.box-common {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 50px;
}

.box-low-z {
  background-color: #fbd38d; /* Light Orange */
  z-index: 1;
}

.box-high-z {
  background-color: #63b3ed; /* Light Blue */
  top: 70px;
  left: 70px;
  z-index: 2; /* This box will appear on top */
}`,
  },
};

export default cssSections;
