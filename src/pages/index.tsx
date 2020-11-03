import Link from "next/link";
import React from "react";
import Layout from "components/Layout";

export default function Home() {
  const links = [
    { label: "useState", href: "/use-state" },
    { label: "Redux", href: "/redux" },
    { label: "Zustand", href: "/zustand" },
    { label: "Zustand Async", href: "/zustand-async" },
    { label: "Zustand Middleware", href: "/zustand-middleware" },
    { label: "Recoil", href: "/recoil" },
  ];

  return (
    <Layout title="Examples">
      {links.map(link => (
        <Link key={link.href} href={link.href}>
          <a>{link.label}</a>
        </Link>
      ))}

      <style jsx>{`
        a {
          font-size: 1.25rem;
          background-color: #acefff;
          color: #000;
          padding: 12px 16px;
          border-radius: 8px;
          box-shadow: 0 2px 0 #c2d0d4;
        }
      `}</style>
    </Layout>
  );
}
