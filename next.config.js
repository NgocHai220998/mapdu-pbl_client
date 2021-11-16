/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

const { END_POINT_DEVELOPMENT, END_POINT_PRODUCTION } = require('./constants/config')

module.exports = removeImports({
  reactStrictMode: true,
  env: {
    END_POINT: process.env.NODE_ENV !== "production" ?
      END_POINT_DEVELOPMENT : END_POINT_PRODUCTION,
  }
})