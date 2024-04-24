"use client"

import React from "react";
import Header from "./_components/Header";
import BackgroundAnimation from "./_components/BackgroundAnimation";
import Footer from "./_components/Footer";
import { Toaster } from ".//components/ui/sonner"
import { useAuth } from "./hooks/useAuth";
import { AuthContext } from "./contexts/AuthContext";


export default function App({children}) {
  const { user, login, logout, setUser } = useAuth();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BackgroundAnimation />
      <div>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}
