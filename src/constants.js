/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/html/constants.js

export const HTML_ESCAPE_REGEX = [
  { regex: /&/g, replacement: "&" },
  { regex: /</g, replacement: "<" },
  { regex: />/g, replacement: ">" },
];

export const TOKEN_PATTERNS = [
  { regex: /()/g, className: "text-gray-500 italic" }, // HTML comments (Fixed regex)
  { regex: /(<!DOCTYPE html>)/g, className: "text-purple-400" }, // DOCTYPE
  // Tag names: <tagname> or </tagname>
  {
    regex: /(<\/?)([a-zA-Z0-9-]+)\b/g,
    className: "text-blue-500",
    replacer: (match, ltSlash, tagName) =>
      `${ltSlash}<span class="text-blue-500">${tagName}</span>`,
  },
  // Attribute names: attribute="value"
  {
    regex: /\b([a-zA-Z-]+)(=)("[^"]*")/g,
    className: "text-yellow-500",
    replacer: (match, attrName, eq, attrValue) =>
      `<span class="text-yellow-500">${attrName}</span>${eq}<span class="text-green-400">${attrValue}</span>`,
  },
  // Self-closing tag slash
  { regex: /(\/>)/g, className: "text-gray-300" },
  // Other punctuation
  { regex: /([="])/g, className: "text-gray-300" },
];// src/app/html/page.jsx


// ...

export const highlightHtml = (code) => {
  let htmlEscapedCode = code.replace(HTML_ESCAPE_REGEX[0].regex, HTML_ESCAPE_REGEX[0].replacement)
    .replace(HTML_ESCAPE_REGEX[1].regex, HTML_ESCAPE_REGEX[1].replacement)
    .replace(HTML_ESCAPE_REGEX[2].regex, HTML_ESCAPE_REGEX[2].replacement);

  let currentCode = htmlEscapedCode;

  TOKEN_PATTERNS.forEach((pattern) => {
    currentCode = currentCode.replace(pattern.regex, (match, ...args) => {
      if (pattern.replacer) {
        return pattern.replacer(match, ...args);
      }
      return `<span class="${pattern.className}">${match}</span>`;
    });
  });

  return { __html: currentCode };
};

