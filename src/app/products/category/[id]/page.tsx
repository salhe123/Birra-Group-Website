import StoreProvider from "@/app/StoreProvider";
import ProductsCategory from "@/components/Products/ProductsCategory";
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
        <ProductsCategory id={parseInt(id)} />
      </StoreProvider>
    </div>
  );
}
