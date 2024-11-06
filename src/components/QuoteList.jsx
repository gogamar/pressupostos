import { useState } from "react";

import { getSortedQuotes } from "../utils/sortUtils";

import Button from "./Button";

import { TrashIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function QuoteList({ quotes, clearLocalStorage }) {
  const [sortBy, setSortBy] = useState("amount");

  return (
    <>
      {quotes && quotes.length > 0 && (
        <>
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold text-gray-900">Pressupostos en curs:</h3>

            <div className="mb-4 flex gap-3">
              <Button text="Data" icon={ChevronDownIcon} onClick={() => setSortBy("date")} />
              <Button text="Import" icon={ChevronDownIcon} onClick={() => setSortBy("amount")} />
              <Button text="Nom" icon={ChevronDownIcon} onClick={() => setSortBy("name")} />
            </div>
          </div>
          <Button text="Esborrar tots" icon={TrashIcon} onClick={clearLocalStorage} />
        </>
      )}

      {getSortedQuotes(quotes, sortBy).map((quote, index) => {
        return (
          <div key={index} className="card flex justify-between mb-4">
            <div>
              <div className="font-bold text-gray-900 text-xl">{quote.clientName}</div>
              <div className="text-gray-500">{quote.clientEmail}</div>
              <div className="text-gray-500">{quote.clientPhone}</div>
              <div className="text-gray-300 text-sm">{quote.date}</div>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-xl">Serveis contractats</div>
              {quote.services.map((service, index) => (
                <div key={index}>
                  <li>
                    {service.label}{" "}
                    {(service.pages || service.languages) && (
                      <>
                        (
                        {service.pages && (
                          <span>
                            {service.pages} {service.pages === 1 ? "pàgina" : "pàgines"}
                          </span>
                        )}
                        {service.pages && service.languages && ", "}
                        {service.languages && (
                          <span>
                            {service.languages} {service.languages === 1 ? "idioma" : "idiomes"}
                          </span>
                        )}
                        )
                      </>
                    )}
                  </li>
                </div>
              ))}
            </div>
            <div>
              <div className="text-gray-500">Total:</div>
              <div className="text-gray-900 text-2xl font-bold">
                {quote.total}
                <span className="text-sm"> €</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
