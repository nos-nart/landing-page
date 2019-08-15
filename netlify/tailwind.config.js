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
            'gray-400': '#717e82',
            'gray-darkest': '#3d4852',
            'gray-darker': '#0e1e24',
            'white': '#fff',
            'gray-200': '#f2f5f7',
            'gray-300': '#e2e8f0',
            'gray-900': '#1a202c',
            'gray-600': '#718096',
            'gray-700': '#4a5568'
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