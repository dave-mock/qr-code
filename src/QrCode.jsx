import React, { useRef, useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import logo from "/logo.png";

const QrCode = ({ url }) => {
  const canvasRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const generateImage = () => {
      const canvas = canvasRef.current.querySelector("canvas");
      if (canvas) {
        setImageUrl(canvas.toDataURL());
      }
    };

    // Delay the generation to ensure the logo has been drawn
    const timeoutId = setTimeout(generateImage, 500);

    return () => clearTimeout(timeoutId);
  }, [url]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid red",
      }}
    >
      <div style={{ display: "none" }} ref={canvasRef}>
        <QRCode
          eyeRadius={10}
          ecLevel="H"
          logoImage={logo}
          logoPadding={4}
          logoPaddingStyle="square"
          qrStyle="dots"
          size={180}
          logoWidth={180 * 0.2}
          logoHeight={180 * 0.2}
          value={url}
        />
      </div>
      <div style={{}}>{imageUrl && <img src={imageUrl} alt="QR Code" />}</div>
    </div>
  );
};

export default QrCode;
