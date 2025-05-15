import StoreProvider from "@/app/StoreProvider";
import RecentBlogs from "@/components/Blog/RecentBlogs";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-4 md:grid-cols-5">
      <div className="col-span-4">{children}</div>
      <div className="hidden md:block col-span-1">
        <StoreProvider>
          <RecentBlogs />
        </StoreProvider>
      </div>
    </div>
  );
}
