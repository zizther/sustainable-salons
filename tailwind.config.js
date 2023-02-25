// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html", "./src/js/**/*.js"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                cream: "#f1ede2",
                ivory: "#fbfbfb",
                mint: "#abe7c4",
                "mint-light": "#dafdd5",
                "off-white": "#fcf9f5",
                teal: "#005e70",
                "teal-dark": "#003d4f",
                "ui-disabled": "#AAA69A",

                chemicals: "#edf68b", // chemicals
                disposables: "#b0c0fa", // disposables
                hair: "#b89c77", // hair
                metals: "#cac5c0", // metals
                paper: "#b7e8f1", // paper
                plastics: "#f095ac", // plastics
                ponytails: "#f6c6de", // ponytails
                razors: "#f69869", // razors
                tools: "#ee7970", // tools
                more: "#b193ea", // & more
            },
            backgroundImage: {
                squiggle: "url('/assets/images/squiggle.svg')",
            },
            fontFamily: {
                sans: ["PangeaText", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                xs: "0.75rem", // 12px
                sm: "0.875rem", // 14px
                base: "1rem", // 16px
                lg: "1.125rem", // 18px
                xl: "1.25rem", // 20px
                "2xl": "1.375rem", // 22px
                "3xl": "1.5rem", // 24px
                "4xl": "2rem", // 32px
                "5xl": "2.5rem", // 40px
                "6xl": "2.75rem", // 44px
                "7xl": "3rem", // 48px
                "8xl": "5rem", // 80px
                "9xl": "6rem", // 96px
            },
        },
        zIndex: {
            minus: "-1",
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            20: 20,
            30: 30,
            40: 40,
            50: 50,
            60: 60,
            70: 70,
            80: 80,
            90: 90,
            100: 100,
            auto: "auto",
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [],
};
