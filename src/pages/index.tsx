import Link from "next/link";
import React from "react";
import TodoLayout from "components/TodoLayout";

export default function Page() {
  const links = [
    { label: "Prop Drilling", href: "/prop-drilling" },
    { label: "Context", href: "/context" },
    { label: "Redux", href: "/redux" },
    { label: "SWR", href: "/swr" },
    { label: "SWR (optimistic update)", href: "/swr-optimistic" },
    { label: "React Query", href: "/react-query" },
    { label: "Apollo", href: "/apollo" },
    { label: "Zustand", href: "/zustand" },
    { label: "Zustand (async)", href: "/zustand-async" },
    { label: "Recoil", href: "/recoil" },
    { label: "Recoil (atom family)", href: "/recoil-atom-family" },
    { label: "Recoil (async)", href: "/recoil-async" },
    { label: "Jotai", href: "/jotai" },
  ];

  return (
    <TodoLayout title="Examples">
      <div className="grid">
        <ul>
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href}>
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          column-gap: 24px;
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
