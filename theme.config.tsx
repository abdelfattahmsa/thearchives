import { DocsThemeConfig } from 'nextra-theme-docs'
import React from 'react'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
      🗂️ The Archives
    </span>
  ),
  docsRepositoryBase: 'https://github.com/peridot-holdings/the-archives',
  footer: {
    text: (
      <span style={{ fontSize: '0.85rem', color: 'var(--nextra-colors-gray-500)' }}>
        © {new Date().getFullYear()} Peridot Holdings — Knowledge shared freely, with references.
      </span>
    ),
  },
  useNextSeoProps() {
    return { titleTemplate: '%s — The Archives' }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="The Archives — Peridot Holdings' free knowledge hub covering engineering, technology, design, and Islamic studies."
      />
      <meta property="og:title" content="The Archives" />
      <meta
        property="og:description"
        content="Free knowledge wiki covering engineering, technology, design, and Islamic studies."
      />
    </>
  ),
  primaryHue: 90,
  primarySaturation: 55,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: 'Suggest edits on GitHub →',
  },
  feedback: {
    content: 'Question or correction? →',
    labels: 'feedback',
  },
}

export default config
