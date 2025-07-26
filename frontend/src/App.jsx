import { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
const socket = io("https://ludo-b5y7.onrender.com");

function App() {
  const [socketRes, setSocketRes] = useState("Aguardando...");
  const handleSocket = () => {
    socket.emit("mensagem", "Resposta do front");
  };

  useEffect(() => {
    socket.on("mensagemRecebida", (data) => {
      setSocketRes("Socket recebido.");
    });

    return () => socket.off("mensagemRecebida");
  }, []);

  return (
    <>
      <button onClick={handleSocket}>Testar socket</button>
      <p>{socketRes}</p>
    </>
  );
}

export default App;
