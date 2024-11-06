import { PlusCircleIcon, MinusCircleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { useModal } from "../contexts/ModalContext.jsx";

function WebServiceOptions({ onChange, options }) {
  const { openModal } = useModal();

  const increment = (key) => {
    onChange(key, (options[key] || 1) + 1);
  };

  const decrement = (key) => {
    if ((options[key] || 1) > 1) {
      onChange(key, options[key] - 1);
    }
  };

  const optionList = [
    { title: "Número de pàgines", key: "pages", description: "Afegeix el número de pàgines que necessitis per a dur a terme el teu projecte. El cost de cada pàgina es de 30€." },
    { title: "Número d'idiomes", key: "languages", description: "Afegeix el número d'idiomes que tindrà el teu projecte. El cost de cada idioma es de 30€." },
  ];

  return (
    <div className="mt-6 flex flex-col space-y-4">
      {optionList.map((option, index) => (
        <div key={index} className="flex items-center justify-end gap-5">
          <button
            onClick={() => {
              console.log("Button clicked:", option.title, option.description);
              openModal(option.title, option.description);
            }}
            className="rounded p-1 hover:bg-gray-300"
          >
            <InformationCircleIcon className="w-4 h-4 text-gray-500" aria-hidden="true" />
          </button>

          <label className="text-sm text-gray-600">{option.title}</label>
          <div className="flex items-center space-x-2">
            <button onClick={() => decrement(option.key)} className="rounded p-1 hover:bg-gray-300">
              <MinusCircleIcon className="w-4 h-4 text-gray-500" aria-hidden="true" />
            </button>
            <input value={options[option.key] || 1} onChange={(e) => onChange(option.key, Number(e.target.value))} min="1" className="w-20 p-1 text-center border rounded" />
            <button onClick={() => increment(option.key)} className="rounded p-1 hover:bg-gray-300">
              <PlusCircleIcon className="w-4 h-4 text-gray-500" aria-hidden="true" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WebServiceOptions;
