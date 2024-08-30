import { useState } from "react";
import QrCode from "./QrCode";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const textParam = queryParams.get("text") || "";
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        borderRadius: 15,
      }}
    >
      <QrCode url={textParam} />
    </div>
  );
}

export default App;
