import Modal from "./Modal";
import WebServiceOptions from "./WebServiceOptions";

export default function ServiceCard({ service, isAnnual, selectedServices, handleCheckboxChange, webOptions, setWebOptions }) {
  return (
    <div className="card">
      <div className="grid grid-cols-3">
        <div className="flex flex-col space-y-1">
          <p className="text-lg font-semibold text-gray-800">{service.label}</p>
          <p className="text-sm text-gray-500">{service.description}</p>
        </div>

        <div className="flex items-center flex-col space-y-1">
          {isAnnual && <span className="text-sm text-red-400">Estalvia un {20}%</span>}
          <span className="text-2xl font-bold text-gray-900">
            {isAnnual ? (service.cost * ((100 - service.annualDiscount) / 100)).toFixed(2) : service.cost.toFixed(2)}
            <span className="text-sm"> €</span>
          </span>
        </div>

        <div className="flex justify-end space-x-2">
          <input type="checkbox" checked={selectedServices[service.id]} onChange={() => handleCheckboxChange(service.id)} className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500" />
          <label className="text-sm text-gray-600">Afegir</label>
        </div>
      </div>
      {service.id === "web" && selectedServices.web && (
        <div>
          <WebServiceOptions onChange={(key, value) => setWebOptions((prev) => ({ ...prev, [key]: value }))} options={webOptions} />
        </div>
      )}
      <Modal />
    </div>
  );
}
