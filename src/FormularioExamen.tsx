import React, { useState } from "react";
import "./index.css";

const FormularioExamen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
    occupation: "",
    feedback: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Formulario Básico
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              ¿Cómo te llamas?
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Escribe tu nombre"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              ¿Cuántos años tienes?
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Escribe tu edad"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              ¿Dónde vives?
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Ciudad o País"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="occupation"
              className="block text-sm font-medium text-gray-700"
            >
              ¿A qué te dedicas?
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              placeholder="Profesión o Estudiante"
              value={formData.occupation}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-gray-700"
            >
              ¿Algún comentario?
            </label>
            <textarea
              id="feedback"
              name="feedback"
              placeholder="Tu mensaje"
              rows={4}
              value={formData.feedback}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white p-2 rounded-md shadow hover:bg-pink-700"
            >
              Enviar Respuestas
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioExamen;
