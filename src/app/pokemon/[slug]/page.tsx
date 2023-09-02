"use client";
import Providers from "@/src/components/Providers";
import React from "react";
import Content from "./Content";

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <Providers>
      <Content slug={params.slug} />
    </Providers>
  );
}
