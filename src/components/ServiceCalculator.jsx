import { useState } from "react";
import { Link } from "react-router-dom";
import WebServiceOptions from "./WebServiceOptions";

export default function ServiceCalculator() {
  const [selectedServices, setSelectedServices] = useState({
    seo: false,
    ad: false,
    web: false,
  });

  const [webOptions, setWebOptions] = useState({ pages: 1, languages: 1 });

  const services = [
    { id: "seo", label: "Seo", description: "Programació d'una web responsive completa", cost: 300 },
    { id: "ad", label: "Ads", description: "Programació d'una web responsive completa", cost: 400 },
    { id: "web", label: "Web", description: "Programació d'una web responsive completa", cost: 500 },
  ];

  const handleCheckboxChange = (id) => {
    setSelectedServices((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const calculateWebCost = () => (webOptions.pages + webOptions.languages) * 30;

  const calculateTotal = () => {
    const webCost = selectedServices.web ? calculateWebCost() : 0;
    return services.reduce((total, service) => (selectedServices[service.id] ? total + service.cost : total), webCost);
  };

  const totalPrice = calculateTotal();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Navigation back to Welcome */}
        <Link to="/">
          <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 mb-4">Tornar a la Pantalla de Benvinguda</button>
        </Link>

        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-1">
                <p className="text-lg font-semibold text-gray-800">{service.label}</p>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {service.cost}
                <span className="text-sm"> €</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" checked={selectedServices[service.id]} onChange={() => handleCheckboxChange(service.id)} className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-sm text-gray-600">Afegir</label>
              </div>
            </div>
            {service.id === "web" && selectedServices.web && (
              <div>
                <WebServiceOptions onChange={(key, value) => setWebOptions((prev) => ({ ...prev, [key]: value }))} options={webOptions} />
              </div>
            )}
          </div>
        ))}

        <h3 className="text-2xl font-semibold text-gray-900 text-end">
          Preu pressuposat: {totalPrice}
          <span className="text-sm"> €</span>
        </h3>
      </div>
    </div>
  );
}
