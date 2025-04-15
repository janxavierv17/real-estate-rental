"use client";

import StoreProvider from "@/redux/redux";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};
