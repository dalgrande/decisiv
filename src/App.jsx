import React from "react";
import "./App.css";
import PoliticiansProvider from "./contexts/PoliticiansContext";
import Header from "./components/Page/Header/Header";
import CardList from "./components/Page/CardList/CardList";
import Pagination from "./components/Page/Pagination/Pagination";
import Filters from "./components/Page/Filters/Filters";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="container">
        <PoliticiansProvider>
          <Filters />
          <CardList />
          <Pagination />
        </PoliticiansProvider>
      </section>
    </div>
  );
}

export default App;
