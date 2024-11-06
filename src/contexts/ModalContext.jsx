import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", description: "" });

  const openModal = (title, description) => {
    setModalContent({ title, description });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return <ModalContext.Provider value={{ isModalOpen, modalContent, openModal, closeModal }}>{children}</ModalContext.Provider>;
}

export const useModal = () => useContext(ModalContext);
