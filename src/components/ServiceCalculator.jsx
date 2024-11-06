import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

export default function ServiceCalculator() {
  const [selectedServices, setSelectedServices] = useState({
    seo: false,
    ad: false,
    web: false,
  });

  const [webOptions, setWebOptions] = useState({ pages: 1, languages: 1 });
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [quotes, setQuotes] = useState([]);

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

  const handleQuoteCreation = () => {
    if (clientName && clientPhone && clientEmail) {
      const newQuote = {
        clientName,
        clientPhone,
        clientEmail,
        services: selectedServices,
        total: totalPrice,
      };
      setQuotes((prevQuotes) => [...prevQuotes, newQuote]);
      setClientName("");
      setClientPhone("");
      setClientEmail("");
      setSelectedServices({ seo: false, ad: false, web: false });
      setWebOptions({ pages: 1, languages: 1 });
    } else {
      alert("Si us plau entra el nom , el teléfon i l'email del client.");
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <Link to="/">
          <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 mb-4">Tornar a la Pantalla de Benvinguda</button>
        </Link>

        {services.map((service) => (
          <ServiceCard key={service.id} service={service} selectedServices={selectedServices} handleCheckboxChange={handleCheckboxChange} webOptions={webOptions} setWebOptions={setWebOptions} />
        ))}
        <div className="card">
          <div className="mb-6 flex items-center space-x-2">
            <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Nom" className="p-2 border border-gray-300 rounded w-full" />
            <input type="text" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} placeholder="Telèfon" className="p-2 border border-gray-300 rounded w-full" />
            <input type="text" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="Email" className="p-2 border border-gray-300 rounded w-full" />
            <button onClick={handleQuoteCreation} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-nowrap">
              Solicitar Pressupost
            </button>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 text-end">
          Preu pressuposat: {totalPrice}
          <span className="text-sm"> €</span>
        </h3>
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900">Pressupostos Creats:</h3>
          <ul className="list-disc pl-5">
            {quotes.map((quote, index) => (
              <li key={index} className="mt-2">
                <strong>Nom:</strong> {quote.clientName} <br />
                <strong>Teléfon:</strong> {quote.clientPhone} <br />
                <strong>Email:</strong> {quote.clientEmail} <br />
                <strong>Serveis Seleccionats:</strong> {JSON.stringify(quote.services)} <br />
                <strong>Total:</strong> {quote.total} €
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
