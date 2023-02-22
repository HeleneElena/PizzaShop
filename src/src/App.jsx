import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Section } from "./components/Section/Section";

export const App = () => {

  return (
    <>
      <Header />

      <main>
        <Navigation />
        <Section />
      </main>

      <footer></footer>
    </>
  )
}

