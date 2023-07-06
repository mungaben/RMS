import React from "react";

export default async function ActionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center mt-5 mb-5  md:mx-5 h-full">
      {children}
    </div>
  );
}
