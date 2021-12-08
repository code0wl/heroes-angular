module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{html,ts}'],
  },
  corePlugins: {
    preflight: false,
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#2196f3',
        accent: '#039688',
        warn: '#f44336',
      },
      gridTemplateRows: {
        layout: '5rem auto',
      },
      gridTemplateColumns: {
        layout: '16rem auto',
      },
      lineHeight: {
        'mat-button': '36px',
      },
    },
  },
  variants: {},
  plugins: [],
};
