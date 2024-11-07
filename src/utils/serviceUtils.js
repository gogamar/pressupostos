export const calculateWebCost = (webOptions) => (webOptions.pages + webOptions.languages) * 30;

export const calculateTotal = (selectedServices, services, webOptions, isAnnual) => {
  const webService = services.find((service) => service.id === "web");
  const webDiscount = isAnnual && webService ? (100 - webService.annualDiscount) / 100 : 1;

  const webCost = selectedServices.web ? calculateWebCost(webOptions) * webDiscount : 0;

  return services.reduce((total, service) => {
    if (!selectedServices[service.id]) return total;

    const serviceDiscount = isAnnual ? (100 - service.annualDiscount) / 100 : 1;
    const serviceCost = service.cost * serviceDiscount;

    return total + serviceCost;
  }, webCost);
};
