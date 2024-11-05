/* eslint-disable react/prop-types */
import plusIcon from "../assets/plusIcon.svg";
import minusIcon from "../assets/minusIcon.svg";

function WebServiceOptions({ onChange, options }) {
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
      <div className="flex items-center justify-end gap-5">
        <label className="text-sm text-gray-600">Número de pàgines:</label>
        <div className="flex items-center space-x-2">
          <button onClick={() => decrement("pages")} className="rounded p-1 hover:bg-gray-300">
            <img src={minusIcon} alt="Decrement" className="h-4 w-4 text-gray-500" />
          </button>
          <input value={options.pages || 1} onChange={(e) => onChange("pages", Number(e.target.value))} min="1" className="border rounded p-1 w-20 text-center" />
          <button onClick={() => increment("pages")} className="rounded p-1 hover:bg-gray-300">
            <img src={plusIcon} alt="Increment" className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end gap-5">
        <label className="text-sm text-gray-600">Número de llengues:</label>
        <div className="flex items-center space-x-2">
          <button onClick={() => decrement("languages")} className="rounded p-1 hover:bg-gray-300">
            <img src={minusIcon} alt="Decrement" className="h-4 w-4 text-gray-500" />
          </button>
          <input value={options.languages || 1} onChange={(e) => onChange("languages", Number(e.target.value))} min="1" className="border rounded p-1 w-20 text-center" />
          <button onClick={() => increment("languages")} className="rounded p-1 hover:bg-gray-300">
            <img src={plusIcon} alt="Increment" className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebServiceOptions;
