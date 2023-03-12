/** @type {import('tailwindcss').Config} */
const primaryColor = '#3A54AA'
const secondaryColor = '#B0B3C4'
const thirdColor = 'rgb(129, 140, 248)'

module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary': primaryColor,
                'secondary': secondaryColor,
                'third': thirdColor
            },
            scale: {
                '110': '1.10'
            },
            animation: {
                jumping: '1.5s jumping linear infinite'
            },
            keyframes: {
                jumping: {
                    '0%': {
                        bottom: '0' 
                    },
                    '50%': {
                        bottom: '100%' 
                    },
                    '100%': {
                        bottom: '0'
                    }
                }
            }
        },
    },
    plugins: []
}