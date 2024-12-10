import React from "react";
import VeiculoForm from "../components/VeiculoForm";
import VeiculoList from "../components/VeiculoList";

function App() {
  return (
    <div className="container">
      <h1>Adicionar Veículo</h1>
      <VeiculoForm />
      <VeiculoList />
    </div>
  );
}

export default App;
