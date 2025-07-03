// ✅ postcss.config.js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {}, // ✅ NOVO plugin correto para Tailwind v4
    autoprefixer: {},
  },
};
