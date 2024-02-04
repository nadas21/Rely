import { Card } from "./components/Card"
import { Fakshin } from "./components/Fakshin"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero/hero"
import { Money } from "./components/Money"
import { Now } from "./components/Now1"
import { Bg } from "./components/bg"

function App() {

  return (
    <>
     <Header/>
     <main>
      <Hero/>
      <Bg/>
      <Card/>
      <Money/>
      {/* <Now/> */}
      {/* <Fakshin/> */}
     </main>
    </>
  )
}

export default App
