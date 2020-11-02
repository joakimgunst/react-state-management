import Head from "next/head";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ title: string }>;

export default function Layout({ title, children }: Props) {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      {children}

      <style jsx>{`
        .layout {
          margin-top: 48px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
      `}</style>
    </div>
  );
}
