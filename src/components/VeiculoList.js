import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function VeiculoList() {
  const [veiculos, setVeiculos] = useState([]);
  const [fetchVeiculos, setFetchVeiculos] = useState(true);

  useEffect(() => {
    const fetchVeiculos = async () => {
      const response = await fetch("http://localhost:4545/api/getVeiculos");
      const data = await response.json();
      setVeiculos(data);
    };
    fetchVeiculos();
    setFetchVeiculos(false);
  }, [fetchVeiculos]);

  return (
    <div id="veiculo-list">
      <h2>Lista de Veículos</h2>
      <ul className="list-group">
        {veiculos.map((veiculo) => (
          <li key={veiculo.placa} className="list-group-item">
            <div className="row">
              <div className="col-2">
                <span className="badge rounded-pill bg-primary">
                  {veiculo.placa}
                </span>
              </div>
              <div className="col">
                <span className="badge rounded-pill bg-success">
                  {veiculo.chassi}
                </span>
                <span className="badge rounded-pill bg-info">
                  {veiculo.anoFabricacao}
                </span>
                <span className="badge rounded-pill bg-warning">
                  {veiculo.cor}
                </span>
                <span className="badge rounded-pill bg-secondary">
                  {veiculo.status}
                </span>
              </div>
              <div className="col">
                <span className="badge rounded-pill bg-primary">
                  {veiculo.modeloId}
                </span>
                <span className="badge rounded-pill bg-success">
                  {veiculo.modelo && veiculo.modelo.nome}
                </span>
                <span className="badge rounded-pill bg-info">
                  {veiculo.modelo &&
                    new Date(veiculo.modelo.anoModelo).getFullYear()}
                </span>
                <span className="badge rounded-pill bg-warning">
                  {veiculo.modelo && veiculo.modelo.qtModelo}
                </span>
                <span className="badge rounded-pill bg-secondary">
                  {veiculo.modelo && veiculo.modelo.categoriaId}
                </span>
                <span className="badge rounded-pill bg-secondary">
                  {veiculo.modelo && veiculo.modelo.marcaId}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VeiculoList;
