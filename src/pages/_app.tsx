import type { AppProps } from "next/app"

import "~/shared/css/globals.css"

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default MyApp
