import Link from "next/link";
import React from "react";
import TodoLayout from "components/TodoLayout";

export default function Page() {
  const links = [
    { label: "Prop Drilling", href: "/prop-drilling" },
    { label: "Context", href: "/context" },
    { label: "Redux", href: "/redux" },
    { label: "Zustand", href: "/zustand" },
    { label: "Recoil", href: "/recoil" },
    { label: "Jotai", href: "/jotai" },
  ];

  const asyncLinks = [
    { label: "Zustand Async", href: "/async/zustand" },
    { label: "SWR", href: "/async/swr" },
    { label: "SWR Optimistic", href: "/async/swr-optimistic" },
    { label: "React Query", href: "/async/react-query" },
    { label: "Recoil Async", href: "/async/recoil" },
    { label: "Jotai Async", href: "/async/jotai" },
  ];

  return (
    <TodoLayout title="Examples">
      {links.map(link => (
        <Link key={link.href} href={link.href}>
          <a>{link.label}</a>
        </Link>
      ))}

      <h2>Async</h2>
      {asyncLinks.map(link => (
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
          text-align: center;
        }

        h2 {
          margin-bottom: 0;
        }
      `}</style>
    </TodoLayout>
  );
}
