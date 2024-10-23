/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", ],
    theme: {
        extend: {
            colors: {
                "dark-pink": "#cd74ae",
                "light-pink": "#fffbff",
                "light-model": "#4f4f4fc4",
                "para-color": " #e0e0e0",
                "theme-color": 'linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB)',
                "button-color": "#fffff",
                "gold-color": "#d99f46",
                "light-green": "#83c12a",
                "purple": "#bf00ff",
                "light-yellow": "#fde43f4d",
            },
            backgroundImage: {
                'theme-gradient': 'linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB)',
            },
            fontFamily: {
                mono: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
    // corePlugins: {
    //     preflight: false,
    // },
}