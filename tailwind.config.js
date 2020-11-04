module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      minHeight: {
        500: '500px',
      },
      maxHeight: {
        500: '500px',
      },
    },
  },
  variants: {},
  plugins: [],
};
