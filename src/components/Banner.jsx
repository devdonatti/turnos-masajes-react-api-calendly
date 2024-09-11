// src/components/Banner.js
import React, { useState, useRef, useEffect } from "react";
import CalendlyWidget from "./CalendlyWidget";

const Banner = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const calendlyRef = useRef(null);

  // Función para manejar clics fuera del CalendlyWidget
  const handleClickOutside = (event) => {
    if (calendlyRef.current && !calendlyRef.current.contains(event.target)) {
      setShowCalendly(false);
    }
  };

  // Agregar y eliminar el evento de clic en el documento
  useEffect(() => {
    if (showCalendly) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendly]);

  // Función para manejar el clic en el botón
  const handleButtonClick = () => {
    setShowCalendly(true);
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center text-slate-600 flex items-center justify-center"
      style={{ backgroundImage: "url('/banner3.jpg')" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Bienestar hoy, Vitalidad Siempre.
        </h1>
        <button
          onClick={handleButtonClick}
          className="mt-6 px-4 py-4 bg-pink-500 text-white rounded font-bold hover:bg-pink-400"
        >
          RESERVAR MASAJE
        </button>
        {/* Mostrar CalendlyWidget solo si showCalendly es true */}
        {showCalendly && (
          <div className="m-4" ref={calendlyRef}>
            <CalendlyWidget />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
