import React from "react";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <Element name="Servicios" className="p-4">
      <h1 className="font-bold text-4xl mb-6 text-center text-gray-700">
        Mis Servicios
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
        <div className="flex flex-col  items-center bg-gray-200 mt-4 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="w-full h-60">
            <img
              className="w-full h-full object-cover"
              src="/banner2.jpg"
              alt="servicio"
            />
          </div>
          <div className="p-4 flex flex-col items-center  text-slate-600">
            <h2 className="text-2xl font-semibold mb-2">
              Masaje y sesiones de Relax
            </h2>
            <p className="text-lg text-center">
              Aliviá dolores corporales y equilibrá tu mente con acupuntura,
              quiropraxia, masajes y sesiones de relax.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-200 mt-4 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="w-full h-60">
            <img
              className="w-full h-full object-cover"
              src="/banner2.jpg"
              alt="servicio"
            />
          </div>
          <div className="p-4 flex flex-col items-center  text-slate-600">
            <h2 className="text-2xl font-semibold mb-2">
              Masaje y sesiones de Relax
            </h2>
            <p className="text-lg text-center">
              Aliviá dolores corporales y equilibrá tu mente con acupuntura,
              quiropraxia, masajes y sesiones de relax.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-200 mt-4 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="w-full h-60">
            <img
              className="w-full h-full object-cover"
              src="/banner2.jpg"
              alt="servicio"
            />
          </div>
          <div className="p-4 flex flex-col items-center text-slate-600">
            <h2 className="text-2xl font-semibold mb-2">
              Masaje y sesiones de Relax
            </h2>
            <p className="text-lg text-center">
              Aliviá dolores corporales y equilibrá tu mente con acupuntura,
              quiropraxia, masajes y sesiones de relax.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Services;
