import React from "react";
import { Element } from "react-scroll";

const Contacto = () => {
  return (
    <div
      name="Contacto"
      id="Contacto"
      className="w-full h-full flex flex-col items-center"
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8  m-10">
        {/* Mapa */}
        <div className="relative w-full md:w-1/2 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.6261179435564!2d-58.19898182493448!3d-34.76500996603314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a328ac8b553f45%3A0x9498993b3d8ea550!2sC.%20155%202136%2C%20B1880ELH%20Berazategui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1725412514697!5m2!1ses!2sar"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Sección de Contacto */}
        <Element
          name="Contacto"
          className="flex flex-col w-full md:w-1/2 p-4 text-center bg-gray-200 text-slate-600 shadow-lg rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Horarios</h3>
            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p>Sábados: 10:00 AM - 2:00 PM</p>
            <p>Domingos: Cerrado</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Dirección</h3>
            <p>Calle Falsa 123, Ciudad, País</p>
          </div>
          <div className="mb-4 text-center ">
            <h3 className="text-xl font-semibold">Redes Sociales</h3>
            <p className="flex justify-center">
              <a
                href="https://wa.me/1144495484?text=Hola,%20me%20interesa%20más%20información."
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-10 w-auto" src="/wp2.png" alt="logo wp" />
              </a>
            </p>
          </div>
        </Element>
      </div>

      {/* Footer */}
      <footer className="p-4 bg-gray-200 text-center font-semibold w-full mt-8">
        <p>Desarrollado por MDev</p>
      </footer>
    </div>
  );
};

export default Contacto;
