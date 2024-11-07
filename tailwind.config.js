/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            blur: {
                160: "160px", // Adding custom blur value
            },
            backgroundImage: {
                "custom-gradient": "linear-gradient(90deg, #c21aa5, #ff31dc, #31fbff)",
            },
            boxShadow: {
                ccc: "-5px 3px 33px 0px rgba(255,0,255,0.23);", // Custom text shadow
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Add your Google font here
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "rgb(234, 179, 8)",
                secondary: "#c21aa5",
            },
        },
    },
    plugins: [],
};
