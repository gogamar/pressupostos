import { ExclamationCircleIcon, XMarkIcon, CheckCircleIcon } from "@heroicons/react/20/solid";

export default function Alert({ alert, alertType, dismissAlert }) {
  const alertStyles = alertType === "success" ? "bg-green-50 text-green-800" : alertType === "error" ? "bg-red-50 text-red-800" : "bg-gray-50 text-gray-800";

  return (
    <div className={`rounded-md p-4 ${alertStyles}`}>
      <div className="flex">
        <div className="shrink-0">{alertType === "success" ? <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-400" /> : <ExclamationCircleIcon aria-hidden="true" className="h-5 w-5 text-red-400" />}</div>
        <div className="ml-3">
          <p className="text-sm font-medium">{alert}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button type="button" className="inline-flex rounded-md bg-transparent p-1.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-50" onClick={dismissAlert}>
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
