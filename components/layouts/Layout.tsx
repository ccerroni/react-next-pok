// import { FC } from 'react';
import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface BaseLayoutProps {
  children?: ReactNode;
  title?: string
}

export const Layout: FC<BaseLayoutProps> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Cristian Cerroni" />
        <meta name="description" content={`info about pokemons ${title}`}  />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main 
        style={{
        padding: "10px 20px"
      }}>
        {children}
      </main>
    </>
  )
};