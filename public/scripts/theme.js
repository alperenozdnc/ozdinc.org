const themeSwitcherButton = document.getElementById("theme-switcher-button");

const urlIdMap = {
    dark: {
        global: ["/styles/global-dark.css", "globalCSS-dark"],
        quote: ["/styles/quote-dark.css", "quoteCSS-dark"],
    },
    light: {
        global: ["/styles/global.css", "globalCSS"],
        quote: ["/styles/quote.css", "quoteCSS"],
    },
};

const themeButtonNameMap = {
    dark: "my eyes don't hurt/",
    light: "my eyes hurt/",
};

function reverseThemeName(name) {
    return name === "light" ? "dark" : "light";
}

function loadTheme(theme, toggling) {
    let oldTheme = reverseThemeName(theme);

    if (toggling) {
        unloadCSS(urlIdMap[oldTheme].global[1]);
        unloadCSS(urlIdMap[oldTheme].quote[1]);
    }

    loadCSS(urlIdMap[theme].global[0], urlIdMap[theme].global[1]);
    loadCSS(urlIdMap[theme].quote[0], urlIdMap[theme].quote[1]);

    themeSwitcherButton.innerText = themeButtonNameMap[theme];
}

function loadCSS(url, id) {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = url;
    link.id = id;

    document.head.appendChild(link);
}

function unloadCSS(id) {
    const linkElement = document.getElementById(id);

    linkElement.remove();
}

let theme = localStorage.getItem("theme");

if (!theme) {
    let defaultTheme = "light";

    localStorage.setItem("theme", defaultTheme);

    theme = defaultTheme;
}

loadTheme(theme, false);

themeSwitcherButton.onclick = () => {
    theme = reverseThemeName(theme);

    localStorage.setItem("theme", theme);

    loadTheme(theme, true);
};
