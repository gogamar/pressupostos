export const calculateWebCost = (webOptions, webDiscount) => {
  // Only add the cost of pages and languages if they are greater than 1
  const additionalPages = webOptions.pages > 1 ? webOptions.pages - 1 : 0;
  const additionalLanguages = webOptions.languages > 1 ? webOptions.languages - 1 : 0;
  const additionalCost = (additionalPages + additionalLanguages) * 30 * webDiscount;

  return additionalCost;
};

export const calculateTotal = (selectedServices, services, webOptions, isAnnual) => {
  const webService = services.find((service) => service.id === "web");
  const webDiscount = isAnnual && webService ? (100 - webService.annualDiscount) / 100 : 1;

  const webCost = selectedServices.web ? calculateWebCost(webOptions, webDiscount) : 0;

  // Calculate total cost including web and other services
  return services.reduce((total, service) => {
    if (!selectedServices[service.id]) return total;

    const serviceDiscount = isAnnual ? (100 - service.annualDiscount) / 100 : 1;
    const serviceCost = service.cost * serviceDiscount;

    return total + serviceCost;
  }, webCost);
};
