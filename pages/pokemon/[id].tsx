import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { pokeApi } from "../api";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {
  return (
    <Layout>
      <h1>{pokemon.name}</h1>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemnos151: string[] = [];
  for (let i = 1; i < 152; i++) {
    pokemnos151.push(i.toString());
  }
  
  return {
    paths: pokemnos151.map( id  => (
      {
        params: { id }
      }
    )), 
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async({ params }) => {
  const { id } = params as { id: string };  
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
      
  return {
    props: {
      pokemon: data
    }
  }
}



export default PokemonPage;