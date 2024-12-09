import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
