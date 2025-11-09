import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Homepage from "./pages/Homepage.jsx";


export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <main>
      <Homepage/>
      </main>
      <Footer year={year} />
    </>
  );
}
