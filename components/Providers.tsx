import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { ToastContainer } from "react-toastify";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <ToastContainer position="bottom-right" hideProgressBar />
      {children}
    </NextUIProvider>
  );
};

export default Providers;
