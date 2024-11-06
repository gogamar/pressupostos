export const calculateWebCost = (webOptions) => (webOptions.pages + webOptions.languages) * 30;

export const calculateTotal = (selectedServices, services, webOptions) => {
  const webCost = selectedServices.web ? calculateWebCost(webOptions) : 0;
  return services.reduce((total, service) => (selectedServices[service.id] ? total + service.cost : total), webCost);
};
