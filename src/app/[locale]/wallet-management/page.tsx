"use client";

import WalletComponent from "@/component/wallet-management/WalletComponent";


export default function OrderManagement({
  params: { locale },
}) {
  
  return (
   <>
   <WalletComponent
    locale={locale}
   />
   </>
  );
}
