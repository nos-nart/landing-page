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
      'dark': '#121212',
      'dark-400': '#272727',
      'dark-300': '#343434',
      'dark-500': '#1c1c1c',
      'dark-200': '#909090',
      'white': '#fff',
      'gray-200': '#f2f5f7',
      'gray-300': '#e2e8f0',
      'gray-400': '#717e82',
      'gray-500': '#a0aec0',
      'gray-600': '#718096',
      'gray-700': '#4a5568',
      'gray-800': '#2d3748',
      'gray-900': '#1a202c',
      'red-600': '#e53e3e'
    },
    inset: {
      '0': '0rem',
      '1': '3rem'
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['hover', 'focus'],
  },
  plugins: [
    // ...
    require('tailwindcss-grid')({
      grids: [2, 3, 5, 6, 8, 10, 12],
      gaps: {
        0: '0',
        2: '0.5rem',
        4: '1rem',
        8: '2rem',
        '4-x': '1rem',
        '4-y': '1rem',
      },
      autoMinWidths: {
        '16': '4rem',
        '24': '6rem',
        '300px': '300px',
      },
      variants: ['responsive'],
    }),
  ]
}
