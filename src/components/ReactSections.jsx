import React from "react";
import {
  FaReact,
  FaPuzzlePiece,
  FaBoxOpen,
  FaSyncAlt,

} from "react-icons/fa";

const reactSections = {
  intro: {
    title: "Introduction to React.js",
    icon: <FaReact className="inline text-sky-500" />,
    content: (
      <>
        <p className="text-lg mb-4">
          React.js is a free and open-source front-end JavaScript library
          for building user interfaces based on components. It's maintained
          by Meta and a community of individual developers and companies.
        </p>
        <p className="text-lg mb-4">
          React allows developers to create large web applications that can
          change data, without reloading the page. Its main purpose is to be
          fast, simple, and scalable.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Key Features (from W3Schools):
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>
            <strong className="font-bold">Component-Based:</strong> Build
            encapsulated components that manage their own state, then
            compose them to make complex UIs.
          </li>
          <li>
            <strong className="font-bold">Declarative:</strong> Describe
            what you want the UI to look like, and React handles updating
            the DOM efficiently.
          </li>
          <li>
            <strong className="font-bold">Virtual DOM:</strong> React uses a
            virtual representation of the UI to optimize updates, leading to
            faster rendering.
          </li>
          <li>
            <strong className="font-bold">JSX:</strong> JSX allows you to
            write HTML in React, making code easier to understand and write.
          </li>
          <li>
            <strong className="font-bold">Unidirectional Data Flow:</strong>{" "}
            Data flows one way, making the app easier to debug and
            understand.
          </li>
          <li>
            <strong className="font-bold">
              Learn Once, Write Anywhere:
            </strong>
            Develop for the web, and also for mobile with React Native.
          </li>
          <li>
            <strong className="font-bold">Hooks:</strong> Use state and
            other React features in functional components.
          </li>
          <li>
            <strong className="font-bold">Reusable Components:</strong>{" "}
            Build small, reusable pieces of UI for scalable applications.
          </li>
        </ul>
      </>
    ),
    example: null,
  },
  components_jsx: {
    title: "Components & JSX",
    icon: <FaPuzzlePiece className="inline text-indigo-500" />,
    content: (
      <>
        <p className="text-lg mb-4">
          React applications are built using components, which are
          independent, reusable pieces of UI. Components can be functional
          (using functions) or class-based (using ES6 classes).
        </p>
        <p className="text-lg mb-4">
          JSX (JavaScript XML) is a syntax extension for JavaScript. It
          allows you to write HTML-like code directly within your JavaScript
          files, making it easier to describe UI structures.
        </p>
        <h3 className="2xl font-semibold text-gray-800 mb-3">
          Rules of JSX:
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>Return a single root element.</li>
          <li>Use `className` instead of `class`.</li>
          <li>
            Use camelCase for HTML attributes (e.g., `onClick`, `htmlFor`).
          </li>
          <li>
            Close all tags (e.g., `<img />
            `, `<input />
            `).
          </li>
          <li>
            Embed JavaScript expressions using curly braces (`{"{"}
            expression{"}"}`).
          </li>
        </ul>
      </>
    ),
    example: `import React from 'react';

// Functional Component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Another Functional Component using Arrow Function
const WelcomeMessage = () => {
  const user = "React User";
  return (
    <div className="container">
      <p>Welcome, {user} to our page.</p>
      <button onClick={() => console.log('Clicked!')}>Click Me</button> {/* Changed alert to console.log */}
    </div>
  );
};

// Usage of components
const App = () => {
  return (
    <div>
      <Greeting name="Alice" />
      <WelcomeMessage />
    </div>
  );
};

export default App;`,
  },
  props: {
    title: "Props (Properties)",
    icon: <FaBoxOpen className="inline text-yellow-600" />,
    content: (
      <>
        <p className="text-lg mb-4">
          Props are arguments passed into React components. They are
          read-only, meaning a component should never modify its own props.
        </p>
        <p className="text-lg mb-4">
          Props allow you to pass data from a parent component to a child
          component, enabling dynamic and reusable components.
        </p>
        <p className="text-lg mb-4">
          Think of props as function arguments. When React sees a component,
          it passes JSX attributes as a single object to the component's
          function (or class constructor).
        </p>
      </>
    ),
    example: `import React from 'react';

function UserCard(props) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <UserCard name="John Doe" age={30} city="New York" />
      <UserCard name="Jane Smith" age={24} city="London" />
    </div>
  );
};

export default App;`,
  },
  state_hooks: {
    title: "State & Hooks (`useState`, `useEffect`)",
    icon: <FaSyncAlt className="inline text-green-600" />,
    content: (
      <>
        <p className="text-lg mb-4">
          State is data that changes over time and affects the rendering of
          a component. Unlike props, state is managed within the component
          itself.
        </p>
      </>
    ),
    // Add the rest of the content and example
  },
  // Add the remaining sections here
};

export default reactSections;