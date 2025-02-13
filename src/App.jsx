//importo Header, Main e Footer

import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  //creo array di link da passare come props dove label e href sono le proprietà dei singoli oggetti
  const links = [
    { label: 'CHARACTERS', href: '#' },
    { label: 'COMICS', href: '#' },
    { label: 'MOVIES', href: '#' },
    { label: 'TV', href: '#' },
    { label: 'GAMES', href: '#' },
    { label: 'COLLECTIBLES', href: '#' },
    { label: 'VIDEOS', href: '#' },
    { label: 'FANS', href: '#' },
    { label: 'NEWS', href: '#' },
    { label: 'SHOP', href: '#' }
  ];

  return (
    <>
      <div>
        {/* passo i link come props */}
        <Header links={links} />
        <Main />
        <Footer />
      </div>

    </>
  )
}

export default App