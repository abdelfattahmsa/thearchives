import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../../styles/globals.css'

export const metadata = {
  metadataBase: new URL('https://thearchives.vercel.app'),
  title: {
    template: '%s — The Archives',
    default: 'The Archives',
  },
  description:
    'Free knowledge wiki covering engineering, technology, design, and Islamic studies — by Peridot Holdings.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={
                <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
                  🗂️ The Archives
                </span>
              }
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/abdelfattahmsa/thearchives"
          footer={
            <Footer>
              © {new Date().getFullYear()} Peridot Holdings — Knowledge shared freely, with
              references.
            </Footer>
          }
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ backToTop: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
