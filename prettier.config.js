/** @type {import('prettier').Config} \*/
module.exports = {
  semi: false,
  singleQuote: true,
  plugins: [
    require('prettier-plugin-organize-imports'),
    require('prettier-plugin-tailwindcss'),
  ],
}
