import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'



function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
    <Fonts />
    <Layout router={router}>
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  </Chakra>
  )
}

export default MyApp