"use client";

import OrderManagementComponent from "@/component/order-management/OrderManagement";


export default function OrderManagement({
  params: { locale },
}) {
  
  return (
   <>
   <OrderManagementComponent
    locale={locale}
   />
   </>
  );
}
