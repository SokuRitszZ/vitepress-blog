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
          text: '技术相关',
          items: [
            item('Simple Nest.js App CICD', '/blog/simple-nestjs-cicd')
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SokuRitszZ' }
    ]
  }
})


