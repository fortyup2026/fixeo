
import React from "react";

export default function App() {
  const professionals = [
    {
      name: "Martín López",
      service: "Electricista",
      city: "Villa Bosch",
      rating: 4.8,
      available: true,
    },
    {
      name: "Carlos Gómez",
      service: "Gasista",
      city: "Córdoba",
      rating: 4.7,
      available: true,
    },
    {
      name: "Luciano Peralta",
      service: "Carpintero",
      city: "Villa Bosch",
      rating: 4.9,
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-4 flex justify-center">
      <div className="max-w-md w-full bg-white rounded-[35px] shadow-2xl overflow-hidden">
        <div className="bg-emerald-500 p-6 text-white">
          <h1 className="text-4xl font-black">
            Servi<span className="text-emerald-200">Go</span>
          </h1>

          <p className="mt-2 opacity-90">
            Servicios al alcance de tu mano
          </p>

          <div className="bg-white mt-5 rounded-2xl px-4 py-3">
            <input
              className="w-full outline-none text-black"
              placeholder="Buscar ciudad o localidad"
            />
          </div>
        </div>

        <div className="p-5">
          <h2 className="text-2xl font-bold mb-4">
            Profesionales destacados
          </h2>

          <div className="space-y-4">
            {professionals.map((pro, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-3xl p-4"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{pro.name}</h3>

                    <p className="text-emerald-600 font-semibold">
                      {pro.service}
                    </p>

                    <p className="text-slate-500 text-sm">
                      📍 {pro.city}
                    </p>

                    <p className="text-yellow-500">
                      ⭐ {pro.rating}
                    </p>
                  </div>

                  <div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        pro.available
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {pro.available ? "Disponible" : "Ocupado"}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-emerald-500 text-white py-3 rounded-2xl font-bold">
                  Ver perfil
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-3 flex justify-around">
          <button>🏠 Inicio</button>
          <button>🔎 Buscar</button>
          <button>📋 Pedidos</button>
          <button>💬 Mensajes</button>
          <button>👤 Perfil</button>
        </div>
      </div>
    </div>
  );
}
