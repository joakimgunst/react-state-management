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
    { label: "Apollo", href: "/async/apollo" },
  ];

  return (
    <TodoLayout title="Examples">
      <div className="grid">
        <div className="list">
          <h2>Sync</h2>
          {links.map(link => (
            <Link key={link.href} href={link.href}>
              <a>{link.label}</a>
            </Link>
          ))}
        </div>

        <div className="list">
          <h2>Async</h2>
          {asyncLinks.map(link => (
            <Link key={link.href} href={link.href}>
              <a>{link.label}</a>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          column-gap: 24px;
        }

        .list {
          display: flex;
          flex-direction: column;
        }

        a {
          font-size: 1.25rem;
          background-color: #acefff;
          color: #000;
          padding: 12px 16px;
          border-radius: 8px;
          box-shadow: 0 2px 0 #c2d0d4;
          text-align: center;
          margin-bottom: 16px;
        }

        @media (min-width: 768px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </TodoLayout>
  );
}
