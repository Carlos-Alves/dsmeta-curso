import Header from "./components/Header"
import SalesCard from "./components/SalesCard";

import './index.css';

function App() {
 return(
    <>
    <Header/>
  <h1>Olá, mundo!</h1>
  <main>
      <section id="sales">
        <div className="dsmeta-container">
            <SalesCard/>
        </div>
      </section>
    </main>
  </>
 )
}

export default App
