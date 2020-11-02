import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Link href="/use-state">
        <a>useState</a>
      </Link>
    </Layout>
  );
}
