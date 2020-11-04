import Link from "next/link";
import React from "react";
import Layout from "components/Layout";

export default function Home() {
  const links = [
    { label: "useState", href: "/use-state" },
    { label: "useState Todo", href: "/use-state-todo" },
    { label: "useState Todo Immer", href: "/use-state-todo-immer" },
    { label: "Redux", href: "/redux" },
    { label: "Redux Todo", href: "/redux-todo" },
    { label: "Zustand", href: "/zustand" },
    { label: "Zustand Todo", href: "/zustand-todo" },
    { label: "Zustand Async", href: "/zustand-async" },
    { label: "Zustand Async Todo", href: "/zustand-async-todo" },
    { label: "Zustand Middleware", href: "/zustand-middleware" },
    { label: "Recoil", href: "/recoil" },
    { label: "Recoil Todo", href: "/recoil-todo" },
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
