import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { services } from "../data/servicesData";

import { calculateWebCost, calculateTotal } from "../utils/serviceUtils";
import { validateSelectedServices, validateClientName, validateClientEmail } from "../utils/validationUtils";

import ServiceCard from "../components/ServiceCard";
import QuoteList from "../components/QuoteList";
import Alert from "../components/Alert";
import Button from "../components/Button";
import Toggle from "../components/Toggle";

import { BackwardIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ServiceCalculator() {
  const [selectedServices, setSelectedServices] = useState({
    seo: false,
    ad: false,
    web: false,
  });
  const [isAnnual, setIsAnnual] = useState(false);
  const [webOptions, setWebOptions] = useState({ pages: 1, languages: 1 });
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const [quotes, setQuotes, clearLocalStorage] = useLocalStorage("quotes", []);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const dismissAlert = () => {
    setAlertMessage("");
    setAlertType("");
  };

  const handleCheckboxChange = (id) => {
    setSelectedServices((prev) => {
      const updatedSelectedServices = {
        ...prev,
        [id]: !prev[id],
      };

      dismissAlert();
      return updatedSelectedServices;
    });
  };

  const handleQuoteCreation = (e) => {
    e.preventDefault();

    const serviceValidation = validateSelectedServices(selectedServices);
    if (!serviceValidation.valid) {
      setAlertMessage(serviceValidation.message);
      setAlertType("error");
      return;
    }

    const nameValidation = validateClientName(clientName);
    if (!nameValidation.valid) {
      setAlertMessage(nameValidation.message);
      setAlertType("error");
      return;
    }

    const emailValidation = validateClientEmail(clientEmail);
    if (!emailValidation.valid) {
      setAlertMessage(emailValidation.message);
      setAlertType("error");
      return;
    }

    const hiredServices = [];

    Object.keys(selectedServices).forEach((serviceId) => {
      if (selectedServices[serviceId]) {
        const service = services.find((s) => s.id === serviceId);

        if (serviceId === "web") {
          hiredServices.push({
            label: service.label,
            cost: service.cost + calculateWebCost(webOptions),
            pages: webOptions.pages,
            languages: webOptions.languages,
          });
        } else {
          hiredServices.push({
            label: service.label,
            cost: service.cost,
          });
        }
      }
    });

    const newQuote = {
      clientName,
      clientPhone,
      clientEmail,
      services: hiredServices,
      total: calculateTotal(selectedServices, services, webOptions, isAnnual),
      date: new Date().toLocaleString(),
    };

    setQuotes((prevQuotes) => [...prevQuotes, newQuote]);

    setClientName("");
    setClientPhone("");
    setClientEmail("");
    setSelectedServices({ seo: false, ad: false, web: false });
    setWebOptions({ pages: 1, languages: 1 });
    setAlertMessage("Pressupost afegit");
    setAlertType("success");
    setTimeout(() => {
      dismissAlert();
    }, 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <Link to="/">
          <Button text="Tornar" icon={BackwardIcon} />
        </Link>

        <div className="flex justify-center">
          <Toggle checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
        </div>

        {services.map((service) => (
          <ServiceCard key={service.id} service={service} isAnnual={isAnnual} selectedServices={selectedServices} handleCheckboxChange={handleCheckboxChange} webOptions={webOptions} setWebOptions={setWebOptions} />
        ))}

        {alertMessage && <Alert alert={alertMessage} alertType={alertType} dismissAlert={dismissAlert} />}

        <div className="card">
          <form onSubmit={handleQuoteCreation} className="mb-6">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={clientName}
                onChange={(e) => {
                  setClientName(e.target.value);
                  dismissAlert();
                }}
                placeholder="Nom *"
                className="p-2 border border-gray-300 rounded w-full"
              />
              <input
                type="text"
                value={clientPhone}
                onChange={(e) => {
                  setClientPhone(e.target.value);
                  dismissAlert();
                }}
                placeholder="Telèfon"
                className="p-2 border border-gray-300 rounded w-full"
              />
              <input
                type="text"
                value={clientEmail}
                onChange={(e) => {
                  setClientEmail(e.target.value);
                  dismissAlert();
                }}
                placeholder="Email *"
                className="p-2 border border-gray-300 rounded w-full"
              />
              <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center text-nowrap">
                Solicitar Pressupost <ArrowRightIcon className="ms-2 w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 text-end">
          Total pressupost: {calculateTotal(selectedServices, services, webOptions, isAnnual)}
          <span className="text-sm"> €</span>
        </h3>
        <hr className="border-t-2 border-dashed border-gray-300 my-6" />
        <QuoteList quotes={quotes} clearLocalStorage={clearLocalStorage} />
      </div>
    </div>
  );
}
