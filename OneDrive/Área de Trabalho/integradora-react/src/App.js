import logo from "./logo.svg";
import "./App.css";
import { Suspense, useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="imgWebsite">
        <img
          style={{ height: "600px", width: "100%" }}
          src="Projeto Empreenda.png"
          alt="Projeto Empreenda"
        />
      </div>
      <div id="resultados">
        <h2>Resultados</h2>
        <FormDivs imageSrc="Projeto Empreenda.png" />
        <FormDivs imageSrc="Projeto Empreenda.png" />
        <FormDivs imageSrc="Projeto Empreenda.png" />
        <FormDivs imageSrc="Projeto Empreenda.png" />
        <FormDivs imageSrc="Projeto Empreenda.png" />
      </div>
      <div id="entrevistas"></div>
    </div>
  );
}

function Nav() {
  const myStyle = {
    color: "inherit",
    textDecoration: "none",
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <ul>
        <li class="first-item">
          <a href="#" style={myStyle}>
            Home
          </a>
        </li>
        <li>
          <a href="#resultados" style={myStyle}>
            Resultados
          </a>
        </li>
        <li>
          <a href="#entrevistas" style={myStyle}>
            Entrevistas
          </a>
        </li>
        <li>
          <a href="#cursos" style={myStyle}>
            Cursos
          </a>
        </li>
      </ul>
    </nav>
  );
}

function FormDivs({ imageSrc }) {
  return (
    <div className="formResultado">
      <div className="textoForm">
        <p>
          Texto de exemplo para exibir ao lado da imagem...Texto de exemplo para
          exibir ao lado da imagem...Texto de exemplo para exibir ao lado da
          imagem...Texto de exemplo para exibir ao lado da imagem...Texto de
          exemplo para exibir ao lado da imagem...Texto de exemplo para exibir
          ao lado da imagem...Texto de exemplo para exibir ao lado da imagem...
        </p>
      </div>
      <div className="imgResultado">
        <img width="100%" src={imageSrc} alt="Imagem do Projeto" />
      </div>
    </div>
  );
}

export default App;
