/** @type {import('next').NextConfig} */

const { END_POINT_DEVELOPMENT, END_POINT_PRODUCTION } = require('./constants/config')

module.exports = {
  reactStrictMode: true,
  env: {
    END_POINT: process.env.NODE_ENV !== "production" ?
      END_POINT_DEVELOPMENT : END_POINT_PRODUCTION,
  }
}