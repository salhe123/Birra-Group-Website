import StoreProvider from "@/app/StoreProvider";
import ServiceDetail from "@/components/Services/ServiceDetail";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div>
      <StoreProvider>
        <ServiceDetail id={id} />
      </StoreProvider>
    </div>
  );
}
