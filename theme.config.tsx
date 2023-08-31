import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { ImWhatsapp } from 'react-icons/im'
const config: DocsThemeConfig = {
  logo: <span>Weebinge</span>,
  project: {
    link: 'https://github.com/alenvelocity/weeinge',
  },
  chat: {
    link: 'https://gg.gg/afc_weebs',
    icon: <ImWhatsapp size={24}></ImWhatsapp>
  },
  docsRepositoryBase: 'https://github.com/alenvelocity/weeinge',
  footer: {
    text: 'Docs',
  },
}

export default config
