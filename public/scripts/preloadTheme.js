let _theme = localStorage.getItem("theme") || "light";

if (_theme === "light") {
    document.head.innerHTML += `
        <link href="/styles/global.css" rel="stylesheet" id="globalCSS" />
        <link href="/styles/quote.css" rel="stylesheet" id="quoteCSS" />
    `;
} else {
    document.head.innerHTML += `
        <link href="/styles/global-dark.css" rel="stylesheet" id="globalCSS-dark" />
        <link href="/styles/quote-dark.css" rel="stylesheet" id="quoteCSS-dark" />
    `;
}
