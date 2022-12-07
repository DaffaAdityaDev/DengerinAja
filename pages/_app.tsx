import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import ControlPanelContainer from '../layout/ControlPanelContainer/ControlPanelContainer'
export default function App({ Component, pageProps }: AppProps) {
  const [test, setTest] = useState<number>(0);
  return (
    <ControlPanelContainer>
      <Component 
        {...pageProps} 
        test={test}
        setTest={setTest}
      />
    </ControlPanelContainer>
  )
}
