import Head from "next/head";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ title: string }>;

export default function TodoLayout({ title, children }: Props) {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      {children}

      <style jsx>{`
        .layout {
          margin: 0 auto;
          padding: 48px 16px;
          max-width: 600px;
          display: grid;
          gap: 24px;
        }

        h1 {
          margin: 0;
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}
