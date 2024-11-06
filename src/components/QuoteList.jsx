import { useState } from "react";
import { getSortedQuotes } from "../utils/sortUtils";

import Button from "./Button";
import { TrashIcon, MagnifyingGlassIcon, BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/react/24/outline";

export default function QuoteList({ quotes, clearLocalStorage }) {
  const [sortBy, setSortBy] = useState("amount");
  const [sortDirection, setSortDirection] = useState("asc");

  const [searchQuery, setSearchQuery] = useState("");
  const filteredQuotes = quotes.filter((quote) => quote.clientName.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSort = (sortType) => {
    if (sortBy === sortType) {
      // If the same field is clicked again, toggle the direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // If a different field is clicked, reset direction to ascending
      setSortBy(sortType);
      setSortDirection("asc");
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
        <h3 className="text-xl font-semibold text-gray-900">Pressupostos en curs:</h3>

        <div className="mb-4 flex gap-3">
          <div className="relative rounded-md shadow-sm">
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="Cerca per nom" className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-600 sm:text-sm/6" />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          <Button text="Data" icon={sortBy === "date" ? (sortDirection === "asc" ? BarsArrowUpIcon : BarsArrowDownIcon) : null} onClick={() => handleSort("date")} />
          <Button text="Import" icon={sortBy === "amount" ? (sortDirection === "asc" ? BarsArrowUpIcon : BarsArrowDownIcon) : null} onClick={() => handleSort("amount")} />
          <Button text="Nom" icon={sortBy === "name" ? (sortDirection === "asc" ? BarsArrowUpIcon : BarsArrowDownIcon) : null} onClick={() => handleSort("name")} />
        </div>
      </div>

      {getSortedQuotes(filteredQuotes, sortBy, sortDirection).map((quote, index) => {
        return (
          <div key={quote.clientEmail || index} className="card flex justify-between mb-4">
            <div>
              <div className="font-bold text-gray-900 text-xl">{quote.clientName}</div>
              <div className="text-gray-500">{quote.clientEmail}</div>
              <div className="text-gray-500">{quote.clientPhone}</div>
              <div className="text-gray-300 text-sm">{quote.date}</div>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-xl">Serveis contractats</div>
              {quote.services.map((service) => (
                <div key={service.label}>
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

      {filteredQuotes.length > 0 ? (
        <>
          <Button text="Esborrar tots" icon={TrashIcon} onClick={clearLocalStorage} />
        </>
      ) : (
        <div>No hem trobat cap pressupost.</div>
      )}
    </>
  );
}
