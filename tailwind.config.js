/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/public/views/**/*.{html}'],
  purge: ['./components/**/*.{html,js}',
          './src/app/**/*.{js,html,jsx,tsx,mdx}',],
  theme: {
    extend: {},
  },
  plugins: [],
}

