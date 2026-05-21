/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ], 
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "gold": {
                            "DEFAULT": "#C5A02E",
                            "light": "#D4AF37",
                            "dark": "#996515"
                        },
                        "background-base": "#f2ead3", // Saturated beige (approx 12% more saturation than original #f8f5f2)
                        "charcoal": "#2b2b2b",
                        "taupe": "#d8d2c2",
                    },
                    fontFamily: {
                        "display": ["Newsreader", "serif"]
                    }
                }
            },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}