"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { SessionProvider } from "next-auth/react";
import Modal from "@/components/modal-credits";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};

export default Providers;
