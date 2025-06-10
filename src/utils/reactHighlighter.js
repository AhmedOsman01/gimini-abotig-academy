// Helper function to apply basic syntax highlighting to React/JSX code
export const highlightReact = (code) => {
  // Define colors using Tailwind CSS classes for a VS Code-like appearance for React/JSX
  const keywordColor = "text-purple-400";
  const operatorColor = "text-red-400";
  const stringColor = "text-green-400";
  const numberColor = "text-yellow-400";
  const commentColor = "text-gray-500 italic";
  const functionCallColor = "text-blue-400";
  const componentNameColor = "text-cyan-400";
  const jsxTagColor = "text-blue-600";
  const jsxAttributeColor = "text-orange-400";
  const punctuationColor = "text-gray-300";

  // 1. HTML escape the entire code string first.
  let htmlEscapedCode = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Define patterns with their corresponding class names.
  const tokenPatterns = [
    { regex: /(\/\/.*)/g, className: commentColor }, // Single-line comments
    { regex: /(\/\*[\s\S]*?\*\/)/g, className: commentColor }, // Multi-line comments
    { regex: /(`[^`]*`|"[^"]*"|'[^']*')/g, className: stringColor }, // Strings
    {
      regex:
        /\b(import|export|default|const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|this|super|class|extends|async|await|of|in|typeof|instanceof)\b/g,
      className: keywordColor,
    }, // Keywords
    // JSX Component Tags
    {
      regex: /(<)(\/?)([A-Z][a-zA-Z0-9_]*)\b/g,
      className: componentNameColor,
      replacer: (match, lt, slash, name) =>
        `${lt}${slash}<span class="${componentNameColor}">${name}</span>`,
    },
    // Standard HTML Tags within JSX
    {
      regex: /(<)(\/?)([a-z][a-zA-Z0-9_]*)\b/g,
      className: jsxTagColor,
      replacer: (match, lt, slash, tag) =>
        `${lt}${slash}<span class="${jsxTagColor}">${tag}</span>`,
    },
    // JSX Attributes
    {
      regex: /\b([a-zA-Z_][a-zA-Z0-9_]*)(?==("[^"]*"|{[^}]*}))/g,
      className: jsxAttributeColor,
    },
    {
      regex: /(===|!==|<=|>=|&&|\|\||\+\+|--|\*\*)/g,
      className: operatorColor,
    }, // Multi-char operators
    { regex: /(=|\+|-|\*|\/|%|!|<|>)/g, className: operatorColor }, // Single-char operators
    { regex: /\b(\d+(\.\d+)?)\b/g, className: numberColor }, // Numbers
    {
      regex: /\b([a-z_][a-zA-Z0-9_]*)(?=\s*\()/g,
      className: functionCallColor,
    }, // Function calls
    { regex: /([{}()[\];:,])/g, className: punctuationColor }, // Punctuation
  ];

  let currentCode = htmlEscapedCode;

  // Apply each pattern sequentially.
  tokenPatterns.forEach((pattern) => {
    currentCode = currentCode.replace(pattern.regex, (match, ...args) => {
      // If a custom replacer is provided (for JSX tags/attributes), use it.
      if (pattern.replacer) {
        return pattern.replacer(match, ...args);
      }
      // Otherwise, direct wrap the matched token.
      return `<span class="${pattern.className}">${match}</span>`;
    });
  });

  return { __html: currentCode };
};