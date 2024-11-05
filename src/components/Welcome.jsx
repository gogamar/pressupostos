import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 text-center">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800">Benvingut/da a la Calculadora de Serveis Web!</h1>
        <p className="text-lg text-gray-600">Aquesta aplicació et permet calcular el cost de diversos serveis web, incloent la creació d&apos;una web, SEO i publicitat. Simplement selecciona els serveis que necessites, ajusta les opcions i obtindràs el cost total.</p>
        <p className="text-sm text-gray-500">Fes clic al botó per començar a calcular els teus serveis.</p>
        <Link to="/calculadora">
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Comença ara</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
