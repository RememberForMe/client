/** @type {import('tailwindcss').Config} */
const primaryColor = '#3A54AA'
const secondaryColor = '#B0B3C4'

module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary': primaryColor,
                'secondary': secondaryColor 
            }
        },
    },
    plugins: []
}