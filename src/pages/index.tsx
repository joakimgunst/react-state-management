import Link from "next/link";
import React from "react";
import Layout from "components/Layout";

export default function Home() {
  const links = [
    { label: "useState", href: "/use-state" },
    { label: "Redux", href: "/redux" },
    { label: "Zustand", href: "/zustand" },
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
        }
      `}</style>
    </Layout>
  );
}
