"use client";

import React, { useState, useMemo, useEffect } from "react";
import { FaHtml5, FaListUl, FaTable, FaRegFileCode } from "react-icons/fa";
import { MdOutlineInput, MdOutlinePermMedia } from "react-icons/md";
import { SiSemanticrelease } from "react-icons/si";
import { highlightHtml } from "@/constants";
import HtmlHero from "@/components/HtmlHero";

// Helper function to apply basic syntax highlighting to HTML code

// Main App component for HTML Presentation
const HtmlPage = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define HTML sections with content
  const htmlSections = useMemo(
    () => ({
      intro: {
        title: "Introduction to HTML",
        icon: <FaHtml5 className="inline text-orange-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              HTML (HyperText Markup Language) is the standard markup language
              for creating web pages and web applications. It describes the
              structure of a Web page semantically and originally included cues
              for the appearance of the document.
            </p>
            <p className="text-lg mb-4">
              HTML elements are the building blocks of HTML pages. With HTML,
              you can structure content by using headings, paragraphs, lists,
              links, images, and more.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Key Features of HTML:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">Markup Language:</strong> Uses
                tags to define elements within a document.
              </li>
              <li>
                <strong className="font-bold">Structure:</strong> Provides the
                semantic structure of web content.
              </li>
              <li>
                <strong className="font-bold">Hypertext:</strong> Supports
                linking to other documents and resources.
              </li>
              <li>
                <strong className="font-bold">Cross-platform:</strong> Rendered
                by web browsers across various operating systems.
              </li>
            </ul>
          </>
        ),
        example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple paragraph.</p>
    <a href="https://www.example.com">Visit Example.com</a>
</body>
</html>`,
        liveExample: (
          <div className="border rounded-lg p-4 bg-gray-50 mt-4">
            <h1 className="text-2xl font-bold mb-2">Hello, World!</h1>
            <p className="mb-2">This is a simple paragraph.</p>
            <a
              href="https://www.example.com"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Example.com
            </a>
          </div>
        ),
      },
      elements_attributes: {
        title: "HTML Elements & Attributes",
        icon: <FaRegFileCode className="inline text-blue-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              An HTML element is defined by a start tag, some content, and an
              end tag. Elements can also be empty (self-closing).
            </p>
            <p className="text-lg mb-4">
              Attributes provide additional information about HTML elements.
              They are always specified in the start tag and usually come in
              name/value pairs.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Common Elements:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">
                  `&lt;h1&gt;` to `&lt;h6&gt;`
                </strong>
                : Headings
              </li>
              <li>
                <strong className="font-bold">`&lt;p&gt;`</strong>: Paragraphs
              </li>
              <li>
                <strong className="font-bold">`&lt;a&gt;`</strong>: Anchor
                (hyperlink)
              </li>
              <li>
                <strong className="font-bold">`&lt;img&gt;`</strong>: Image
              </li>
              <li>
                <strong className="font-bold">
                  `&lt;ul&gt;`, `&lt;ol&gt;`, `&lt;li&gt;`
                </strong>
                : Lists
              </li>
              <li>
                <strong className="font-bold">
                  `&lt;div&gt;`, `&lt;span&gt;`
                </strong>
                : Generic containers
              </li>
              <li>
                <strong className="font-bold">
                  `&lt;input&gt;`, `&lt;button&gt;`, `&lt;form&gt;`
                </strong>
                : Form elements
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Common Attributes:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>`id`: Unique identifier for an element.</li>
              <li>
                `class`: Specifies one or more classnames for an element (for
                CSS styling).
              </li>
              <li>`src`: Source for images or scripts.</li>
              <li>`href`: Destination address for links.</li>
              <li>`alt`: Alternative text for images.</li>
              <li>`style`: Inline CSS styles.</li>
            </ul>
          </>
        ),
        example: `<p className="introduction" id="first-paragraph">
    This is a paragraph with a <a href="/about.html">link</a>.
</p>

<img src="https://placehold.co/200x150/000000/FFFFFF?text=Placeholder" alt="A descriptive image placeholder" width="200" height="150" />

<button type="button" onClick={() => console.log('Button clicked!')}>Click Me</button>`,
      },
      forms_inputs: {
        title: "HTML Forms & Inputs",
        icon: <MdOutlineInput className="inline text-green-600" />,
        content: (
          <>
            <p className="text-lg mb-4">
              HTML forms are used to collect user input. The collected input is
              most often sent to a server for processing.
            </p>
            <p className="text-lg mb-4">
              The <strong className="font-bold">`&lt;form&gt;`</strong> element
              is a container for different types of input elements, like text
              fields, checkboxes, radio buttons, submit buttons, etc.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Common Input Types:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>`text`: Single-line text input.</li>
              <li>`password`: Password input (masked characters).</li>
              <li>`submit`: A button for submitting the form.</li>
              <li>`radio`: For selecting one of many choices.</li>
              <li>`checkbox`: For selecting zero or more of many choices.</li>
              <li>`email`: For email addresses.</li>
              <li>`number`: For numerical input.</li>
              <li>`date`: For date input.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Form Attributes:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                `action`: Specifies where to send the form-data when a form is
                submitted.
              </li>
              <li>
                `method`: Specifies the HTTP method (`get` or `post`) to be used
                when submitting the form-data.
              </li>
              <li>`name`: Specifies the name of the form.</li>
            </ul>
          </>
        ),
        example: `<form action="/submit-form" method="post">
    <label htmlFor="username">Username:</label><br />
    <input type="text" id="username" name="username" defaultValue="JohnDoe" /><br /><br />

    <label htmlFor="password">Password:</label><br />
    <input type="password" id="password" name="password" /><br /><br />

    <input type="radio" id="html" name="fav_language" value="HTML" />
    <label htmlFor="html">HTML</label><br />
    <input type="radio" id="css" name="fav_language" value="CSS" />
    <label htmlFor="css">CSS</label><br /><br />

    <input type="checkbox" id="subscribe" name="subscribe" value="newsletter" />
    <label htmlFor="subscribe"> Subscribe to newsletter</label><br /><br />

    <label htmlFor="comments">Comments:</label><br />
    <textarea id="comments" name="comments" rows="4" cols="50" defaultValue="Write your comments here...">
    </textarea><br /><br />

    <input type="submit" value="Submit" />
</form>`,
      },
      semantic_html5: {
        title: "Semantic HTML5",
        icon: <SiSemanticrelease className="inline text-purple-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Semantic HTML5 elements provide meaning to the web content, rather
              than just presentation. Using semantic elements helps search
              engines, screen readers, and other developers understand the
              structure and purpose of your content.
            </p>
            <p className="text-lg mb-4">
              While{" "}
              <strong className="font-bold">
                `&lt;div&gt;` and `&lt;span&gt;`
              </strong>{" "}
              are generic containers, semantic tags give more context.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Key Semantic Elements:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">`&lt;header&gt;`</strong>:
                Introductory content or a set of navigational links.
              </li>
              <li>
                <strong className="font-bold">`&lt;nav&gt;`</strong>: Navigation
                links.
              </li>
              <li>
                <strong className="font-bold">`&lt;main&gt;`</strong>: The
                dominant content of the `&lt;body&gt;`.
              </li>
              <li>
                <strong className="font-bold">`&lt;article&gt;`</strong>:
                Self-contained content, like a blog post or news article.
              </li>
              <li>
                <strong className="font-bold">`&lt;section&gt;`</strong>: A
                standalone section within a document.
              </li>
              <li>
                <strong className="font-bold">`&lt;aside&gt;`</strong>: Content
                indirectly related to the main content (e.g., sidebars).
              </li>
              <li>
                <strong className="font-bold">`&lt;footer&gt;`</strong>: Footers
                for a document or section.
              </li>
              <li>
                <strong className="font-bold">
                  `&lt;figure&gt;`, `&lt;figcaption&gt;`
                </strong>
                : For self-contained content like images, diagrams, with a
                caption.
              </li>
              <li>
                <strong className="font-bold">`&lt;time&gt;`</strong>:
                Represents a specific period in time.
              </li>
            </ul>
          </>
        ),
        example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Semantic HTML5 Example</title>
</head>
<body>

    <header>
        <h1>Website Title</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>My Blog Post</h2>
            <p>Published on <time dateTime="2023-10-26">October 26, 2023</time></p>
            <section>
                <h3>Introduction</h3>
                <p>This is the introduction to my amazing blog post.</p>
            </section>
            <section>
                <h3>Main Content</h3>
                <p>Here's the main body of the content.</p>
                <figure>
                    <img src="https://placehold.co/300x200/FF0000/FFFFFF?text=Figure" alt="A red placeholder image" />
                    <figcaption>A beautiful illustration for the post.</figcaption>
                </figure>
            </section>
        </article>

        <aside>
            <h4>Related Articles</h4>
            <ul>
                <li><a href="#">Article 1</a></li>
                <li><a href="#">Article 2</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>© 2023 My Website. All rights reserved.</p>
    </footer>

</body>
</html>`,
      },
      media_embedding: {
        title: "Media Embedding",
        icon: <MdOutlinePermMedia className="inline text-pink-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              HTML5 introduced native support for embedding audio and video
              directly into web pages without requiring third-party plugins like
              Flash.
            </p>
            <p className="text-lg mb-4">
              This provides a more consistent and accessible way to deliver
              multimedia content.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              `&lt;video&gt;` Element:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>`src`: URL of the video file.</li>
              <li>
                `controls`: Displays default video controls (play, pause,
                volume).
              </li>
              <li>
                `autoplay`: Starts playing the video automatically (often
                blocked by browsers).
              </li>
              <li>`loop`: Loops the video.</li>
              <li>`muted`: Mutes the video by default.</li>
              <li>`poster`: An image to display before the video plays.</li>
              <li>
                `&lt;source&gt;`: Allows specifying multiple video formats for
                browser compatibility.
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              `&lt;audio&gt;` Element:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                Similar attributes to `&lt;video&gt;` (`src`, `controls`,
                `autoplay`, `loop`, `muted`).
              </li>
              <li>Supports various audio formats (`.mp3`, `.wav`, `.ogg`).</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              `&lt;iframe&gt;` Element:
            </h3>
            <p className="text-lg mb-4">
              Used to embed another HTML document within the current HTML
              document. Commonly used for embedding content from other websites
              (e.g., YouTube videos, Google Maps).
            </p>
          </>
        ),
        example: `<video width="320" height="240" controls poster="https://placehold.co/320x240/E0BBE4/FFFFFF?text=Video+Poster">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>`,
      },
      tables: {
        title: "HTML Tables",
        icon: <FaTable className="inline text-yellow-600" />,
        content: (
          <>
            <p className="text-lg mb-4">
              HTML tables are used to display tabular data (data presented in
              rows and columns).
            </p>
            <p className="text-lg mb-4">
              While tables are primarily for data, they were historically
              misused for page layout. Modern web design uses CSS Grid and
              Flexbox for layout, reserving tables for their semantic purpose.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Table Elements:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">`&lt;table&gt;`</strong>: The
                container for the entire table.
              </li>
              <li>
                <strong className="font-bold">`&lt;thead&gt;`</strong>: Groups
                the header content in a table.
              </li>
              <li>
                <strong className="font-bold">`&lt;tbody&gt;`</strong>: Groups
                the body content in a table.
              </li>
              <li>
                <strong className="font-bold">`&lt;tfoot&gt;`</strong>: Groups
                the footer content in a table.
              </li>
              <li>
                <strong className="font-bold">`&lt;tr&gt;`</strong>: Defines a
                table row.
              </li>
              <li>
                <strong className="font-bold">`&lt;th&gt;`</strong>: Defines a
                table header cell (usually bold and centered).
              </li>
              <li>
                <strong className="font-bold">`&lt;td&gt;`</strong>: Defines a
                table data cell.
              </li>
              <li>
                <strong className="font-bold">`&lt;caption&gt;`</strong>:
                Specifies a table caption.
              </li>
              <li>
                `colspan`, `rowspan`: Attributes to make a cell span multiple
                columns or rows.
              </li>
            </ul>
          </>
        ),
        example: `<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <caption>Monthly Savings</caption>
  <thead>
    <tr>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Month</th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>January</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>$100</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>February</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Total</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>$180</td>
    </tr>
  </tfoot>
</table>`,
      },
      lists: {
        title: "HTML Lists",
        icon: <FaListUl className="inline text-cyan-600" />,
        content: (
          <>
            <p className="text-lg mb-4">
              HTML provides several ways to structure lists of information,
              making content more organized and readable.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Unordered Lists (
              <strong className="font-bold">`&lt;ul&gt;`</strong>):
            </h3>
            <p className="text-lg mb-4">
              Used for lists of items where the order does not explicitly
              matter. Items are typically marked with bullet points.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Ordered Lists (<strong className="font-bold">`&lt;ol&gt;`</strong>
              ):
            </h3>
            <p className="text-lg mb-4">
              Used for lists of items where the order does matter (e.g., steps
              in a recipe, a ranking). Items are typically marked with numbers
              or letters.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Description Lists (
              <strong className="font-bold">`&lt;dl&gt;`</strong>):
            </h3>
            <p className="text-lg mb-4">
              Used to list terms and their descriptions. Each term is defined by
              a <strong className="font-bold">`&lt;dt&gt;`</strong> (description
              term) and its description by a{" "}
              <strong className="font-bold">`&lt;dd&gt;`</strong> (description
              details).
            </p>
          </>
        ),
        example: `<h2>My Favorite Fruits</h2>
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>

<h2>Steps to Make Coffee</h2>
<ol>
  <li>Boil water</li>
  <li>Add coffee grounds to filter</li>
  <li>Pour hot water over grounds</li>
  <li>Enjoy!</li>
</ol>

<h2>Programming Languages</h2>
<dl>
  <dt>HTML</dt>
  <dd>- Structure for web pages.</dd>
  <dt>CSS</dt>
  <dd>- Styles for web pages.</dd>
  <dt>JavaScript</dt>
  <dd>- Interactivity for web pages.</dd>
</dl>`,
      },
    }),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 font-sans text-gray-900">
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      /> */}
      {/* Hero Section with Breadcrumb */}
      <HtmlHero />
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation for small screens */}
          <nav className="md:hidden w-full bg-white rounded-2xl shadow-lg p-5 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Topics</h2>
            <ul className="space-y-2">
              {Object.keys(htmlSections).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center w-full text-left py-2 px-4 rounded-lg transition-all duration-200 ${
                      activeSection === key
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    <span className="mr-2">{htmlSections[key].icon}</span>
                    {htmlSections[key].title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Sidebar Navigation */}
          <nav className="hidden md:block w-full md:w-[20%] bg-white rounded-2xl shadow-xl p-6 flex-shrink-0">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              HTML Features
            </h2>
            <ul className="space-y-2">
              {Object.keys(htmlSections).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center w-full text-left py-3 px-5 rounded-xl transition-all duration-200 group ${
                      activeSection === key
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    <span className="mr-3 text-lg">
                      {htmlSections[key].icon}
                    </span>
                    <span className="flex-1">{htmlSections[key].title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content Display Area */}
          <main className="flex-grow bg-white rounded-2xl shadow-xl p-8 md:w-[70%] min-w-0">
            <div className="mb-8 flex items-center gap-3">
              <span className="text-3xl">
                {htmlSections[activeSection].icon}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 border-b-2 pb-2 border-blue-100 flex-1">
                {htmlSections[activeSection].title}
              </h2>
            </div>
            <div className="prose max-w-none text-gray-700">
              {htmlSections[activeSection].content}
              {htmlSections[activeSection].example && (
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    Code Example:
                  </h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto border border-gray-800">
                    <code
                      dangerouslySetInnerHTML={highlightHtml(
                        htmlSections[activeSection].example
                      )}
                    />
                  </pre>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HtmlPage;
