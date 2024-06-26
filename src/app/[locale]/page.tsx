"use client";

import Dashboard from "@/component/dashboard/Dashboard";

export default function Home({
  params: { locale },
}) {
  
  return (
   <>
   <Dashboard locale={locale} />
   </>
  );
}
