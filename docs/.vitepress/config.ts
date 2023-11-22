import { defineConfig } from 'vitepress'
import {item} from "./utils";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SokuRitszZ",
  description: "Welcome to my blog.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      item('Home', '/'),
      item('About Me', '/about-me'),
      item('Blog', '/blog/'),
    ],

    sidebar: {
      '/blog/': [
        {
          text: '技术',
          items: [
            item('Simple Nest.js App CICD', '/blog/tech/simple-nestjs-cicd'),
            item('Soku Game Best Bundle Config', '/blog/tech/soku-game-bundle')
          ]
        },
        {
          text: '记录',
          items: [
            item('Startup Using MacOS', '/blog/record/mac-hajime'),
            item('Personal Eslint', '/blog/record/personal-eslint'),
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SokuRitszZ' }
    ]
  }
})


