import { useState } from 'react'
import Header from './components/header/header'
import { TEXTS } from './utils/translations'
import Footer from './components/footer/footer'
import Form from './components/form/calc'
import TextSection from './components/textSection/textSection'



function App() {

  return (
    <>
      <Header titel={TEXTS.header.title} />
      <TextSection content={TEXTS.textSection.text} />
      <Form />
      <Footer copyrightInfo = {TEXTS.footer.copyrightInfo} authorInfo={TEXTS.footer.authorInfo} />
    </>
  )
}

export default App
