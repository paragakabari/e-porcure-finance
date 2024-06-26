"use client";
import { ReactNode } from "react";
import Header from "../header/Header";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export const Mainlayout = ({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) => {
  return (
    <Provider store={store}>
      <div className="">
        <Header locale={locale} />
        {children}
      </div>
    </Provider>
  );
};
