import { useState } from "preact/hooks";

interface ModuloProps {
  id: number;
  titulo: string;
  textoBase: string;
}

export default function Modulo({ id, titulo, textoBase }: ModuloProps) {
  const [abierto, setAbierto] = useState(false);
  const [textoExtra, setTextoExtra] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: h.JSX.TargetedKeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTextoExtra((prev) => prev + " " + inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "2px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <button
        onClick={() => setAbierto(!abierto)}
        style={{
          padding: "8px 12px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {abierto ? "Cerrar " : "Abrir "} {titulo}
      </button>

      {abierto && (
        <div style={{ marginTop: "10px" }}>
          <p>{textoBase} {textoExtra}</p>
          <input
            type="text"
            placeholder={`Añade texto al ${titulo} (pulsa Enter)`}
            value={inputValue}
            onInput={(e) => setInputValue((e.target as HTMLInputElement).value)}
            onKeyDown={handleKeyDown}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "10px",
              boxSizing: "border-box",
            }}
          />
        </div>
      )}
    </div>
  );
}

