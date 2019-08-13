module.exports = {
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        colors: {
            'teal': '#00ad9e',
            'dark-lighter': '#0e1e24',
            'gray-lighter': '#717e82',
            'gray-darkest': '#3d4852',
            'gray-darker': '#0e1e24',
            'white': '#fff',
        }
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        textColor: ['hover', 'focus'],
    },
    plugins: [
        // Some useful comment
    ]
}