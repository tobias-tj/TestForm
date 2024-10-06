import React from "react";
import "./index.css";

const EmpezarExamen = () => {
  const handleEnviarFormulario = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del form

    // Datos en duro que deseas enviar
    const data = {
      formUrl: "http://localhost:5174/formulario",
      descripcion: "Examen Griego",
      estado: "pendiente",
      nombre: "Goku",
      cedula: "11111111",
      email: "goku1@gmail.com",
      rol: "EST",
      idFormulario: 27,
      idUsuario: 35,
    };

    try {
      // Realizar la petición POST al backend en localhost:3000
      const response = await fetch("http://localhost:3000/api/startExam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Formulario enviado correctamente");
        window.location.href = result.redirectUrl;
      } else {
        const errorResponse = await response.json();
        console.error("Error al enviar el formulario:", errorResponse.errors);
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Bienvenido al examen
      </h1>
      <button
        onClick={handleEnviarFormulario}
        className="px-6 py-3 text-lg font-medium text-white transition duration-200 rounded-lg shadow bg-rose-600 hover:bg-rose-700"
      >
        Empezar examen
      </button>
    </div>
  );
};

export default EmpezarExamen;
