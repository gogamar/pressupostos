export const validateSelectedServices = (selectedServices) => {
  const isAnyServiceSelected = Object.values(selectedServices).some((value) => value === true);
  if (!isAnyServiceSelected) {
    return { valid: false, message: "Si us plau selecciona almenys un servei." };
  }
  return { valid: true };
};

export const validateClientName = (clientName) => {
  if (clientName.length < 2) {
    return { valid: false, message: "El nom ha de tenir almenys 2 caràcters." };
  }
  return { valid: true };
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateClientEmail = (clientEmail) => {
  if (!clientEmail) {
    return { valid: false, message: "El correu electrònic és obligatori." };
  }
  if (!isValidEmail(clientEmail)) {
    return { valid: false, message: "Si us plau, entra una adreça de correu vàlida." };
  }
  return { valid: true };
};
