module.exports = {
  content: [
    './lib/constant.ts',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['var(--font-roboto)', 'sans-serif'],
    },
    extend: {
      colors: {
        iron: '#dadce0',
        porcelain: '#f1f3f4',
        beeswax: '#feefc3',
        shark: {
          light: '#28292c',
          DEFAULT: '#202124',
        },
        mercury: '#e4e4e4',
        alabaster: '#f9f9f9',
        tuna: '#37383b',
        abbey: '#525356',
        malibu: '#8ab4f8',
        'gray-chateau': '#9aa0a6',
        'royal-blue': '#1a73e8',
        'shuttle-gray': '#5f6368',
        'oslo-gray': '#80868B',
        'black-marlin': '#41331c',

        // Light
        froly: '#f28b82',
        'selective-yellow': '#fbbc04',
        'paris-daisy': '#fff475',
        reef: '#ccff90',
        'aero-blue': '#a7ffeb',
        'humming-bird': '#cbf0f8',
        sail: '#aecbfa',
        mauve: '#d7aefb',
        'ping-pink': '#fdcfe8',
        cashmere: '#e6c9a8',
        'athens-gray': '#e8eaed',
        bunker: '#161a20',

        // Dark
        buccaneer: '#5c2b29',
        'west-coast': '#614a19',
        himalaya: '#635d19',
        'thatch-green': '#345920',
        'green-pea': '#16504b',
        casal: '#2d555e',
        cello: '#1e3a5f',
        jacarta: '#42275e',
        'tawny-port': '#5b2245',
        'metallic-bronze': '#442f19',
        mako: '#3c3f43',
        loblolly: '#bdc6d0',
      },
    },
  },
  plugins: [],
};
