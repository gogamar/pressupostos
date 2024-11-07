import { useModal } from "../contexts/ModalContext.jsx";

import { optionList } from "../data/webOptionsData.js";

import { PlusCircleIcon, MinusCircleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

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

  return (
    <div className="mt-6 flex flex-col space-y-4">
      {optionList.map((option, index) => (
        <div key={index} className="flex items-center justify-end gap-5">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                console.log("Button clicked:", option.title, option.description);
                openModal(option.title, option.description);
              }}
              className="rounded p-1 hover:bg-gray-300"
            >
              <InformationCircleIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
            </button>
            <label className="text-sm text-gray-600">{option.title}</label>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={() => decrement(option.key)} className="rounded p-1 hover:bg-gray-300">
              <MinusCircleIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
            </button>
            <input value={options[option.key] || 1} onChange={(e) => onChange(option.key, Number(e.target.value))} min="1" className="w-20 p-1 text-center border rounded" />
            <button onClick={() => increment(option.key)} className="rounded p-1 hover:bg-gray-300">
              <PlusCircleIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WebServiceOptions;
