import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function VeiculoForm({ onVeiculoCriado }) {
  const [placa, setPlaca] = useState("");
  const [chassi, setChassi] = useState("");
  const [anoFabricacao, setAnoFabricacao] = useState("");
  const [cor, setCor] = useState("");
  const [modeloId, setModeloId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      alert(successMessage); // Exibe a mensagem de sucesso após a atualização do estado
      window.location.reload(); // Recarrega a página
    }
  }, [successMessage]); // Este efeito será executado quando o successMessage mudar

  const handleSubmit = async (e) => {
    e.preventDefault();
    const veiculo = {
      placa,
      chassi,
      anoFabricacao,
      cor,
      modeloId,
    };
    try {
      const response = await fetch("http://localhost:4545/api/CreateVeiculo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(veiculo),
      });
      if (response.ok) {
        setSuccessMessage("Veículo adicionado com sucesso!");
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Erro ao adicionar veículo!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <div className="form-group mb-3">
        <label htmlFor="placa">Placa</label>
        <input
          type="text"
          id="placa"
          className="form-control"
          placeholder="Placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="chassi">Chassi</label>
        <input
          type="text"
          id="chassi"
          className="form-control"
          placeholder="Chassi"
          value={chassi}
          onChange={(e) => setChassi(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="anoFabricacao">Ano de Fabricação</label>
        <input
          type="number"
          id="anoFabricacao"
          className="form-control"
          placeholder="Ano de Fabricação"
          value={anoFabricacao}
          onChange={(e) => setAnoFabricacao(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="cor">Cor</label>
        <input
          type="text"
          id="cor"
          className="form-control"
          placeholder="Cor"
          value={cor}
          onChange={(e) => setCor(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="modeloId">ID do Modelo</label>
        <input
          type="number"
          id="modeloId"
          className="form-control"
          placeholder="ID do Modelo"
          value={modeloId}
          onChange={(e) => setModeloId(e.target.value)}
          required
        />
      </div>
      {successMessage && (
        <div className="alert alert-success mt-3" role="alert">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger mt-3" role="alert">
          {errorMessage}
        </div>
      )}
      <button type="submit" className="btn btn-primary w-100">
        Adicionar Veículo
      </button>
    </form>
  );
}

export default VeiculoForm;
