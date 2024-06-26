"use client";

import OrganizationalComponent from "@/component/organizational-employee/OrganizationalComponent";


export default function OrderManagement({
  params: { locale },
}) {
  
  return (
   <>
   <OrganizationalComponent
    locale={locale}
   />
   </>
  );
}
