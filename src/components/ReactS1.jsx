import React from "react";

const ReactS1 = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>React.js Features</title>
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        body {\n            font-family: 'Inter', sans-serif;\n            margin: 0;\n            padding: 0;\n            overflow: hidden;\n        }\n        .slide {\n            width: 1280px;\n            min-height: 720px;\n            background: linear-gradient(135deg, #0f172a 0%, #312e81 100%);\n            color: white;\n            position: relative;\n            overflow: hidden;\n        }\n        .content {\n            padding: 4rem;\n            position: relative;\n            z-index: 10;\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n        }\n        .grid-pattern {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background-image: \n                radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),\n                radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);\n            background-size: 40px 40px;\n            background-position: 0 0, 20px 20px;\n            opacity: 0.3;\n        }\n        .react-icon {\n            position: absolute;\n            right: 80px;\n            top: 50%;\n            transform: translateY(-50%);\n            opacity: 0.2;\n            font-size: 400px;\n            color: #61dafb;\n            animation: rotate 30s linear infinite;\n        }\n        @keyframes rotate {\n            from { transform: translateY(-50%) rotate(0deg); }\n            to { transform: translateY(-50%) rotate(360deg); }\n        }\n        .title {\n            font-size: 5rem;\n            font-weight: 800;\n            background: linear-gradient(to right, #fff, #ccc);\n            -webkit-background-clip: text;\n            color: transparent;\n            margin-bottom: 1rem;\n            line-height: 1.1;\n        }\n        .subtitle {\n            font-size: 1.8rem;\n            font-weight: 400;\n            margin-bottom: 2rem;\n            opacity: 0.9;\n        }\n        .description {\n            max-width: 650px;\n            font-size: 1.2rem;\n            line-height: 1.6;\n            opacity: 0.8;\n        }\n        .badge {\n            position: absolute;\n            bottom: 40px;\n            right: 40px;\n            padding: 0.5rem 1rem;\n            background: rgba(255, 255, 255, 0.1);\n            border-radius: 30px;\n            backdrop-filter: blur(5px);\n            font-size: 0.9rem;\n            display: flex;\n            align-items: center;\n            gap: 8px;\n        }\n        .w3-logo {\n            height: 24px;\n        }\n    ",
        }}
      />
      <div className="slide">
        <div className="grid-pattern" />
        <i className="fab fa-react react-icon" />
        <div className="content">
          <div className="mb-2 opacity-75">MODERN WEB DEVELOPMENT</div>
          <h1 className="title">React.js Features</h1>
          <h2 className="subtitle">Building Modern User Interfaces</h2>
          <p className="description">
            React is a JavaScript library for building user interfaces. It
            allows developers to create reusable UI components and build
            single-page applications with exceptional performance.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="flex items-center px-4 py-2 bg-blue-600 bg-opacity-30 rounded-lg">
              <i className="fas fa-code mr-2" /> Declarative
            </div>
            <div className="flex items-center px-4 py-2 bg-blue-600 bg-opacity-30 rounded-lg">
              <i className="fas fa-puzzle-piece mr-2" /> Component-Based
            </div>
            <div className="flex items-center px-4 py-2 bg-blue-600 bg-opacity-30 rounded-lg">
              <i className="fas fa-bolt mr-2" /> Learn Once, Write Anywhere
            </div>
          </div>
        </div>
        <div className="badge">
          <span>Content from</span>
          <strong>W3Schools</strong>
        </div>
      </div>
    </>
  );
};

export default ReactS1;
