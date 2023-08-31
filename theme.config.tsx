import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { ImWhatsapp } from 'react-icons/im'
import { useRouter } from 'next/router'
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
  head: () => {
    return (
      <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Weeinge" />
      <meta property="og:description" content="Get Weebvctmono'd" />
      </>
    )
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Weeinge'
      }
    } else {
      return { 
        titleTemplate: "Weeinge: Get Weebvctmono'd"
      }
    }
  }
}

export default config
