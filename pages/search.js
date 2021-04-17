import Head from "next/head";
import { useRouter } from "next/router";
import CPHeader from "../components/CPHeader";
import CPSearchResults from "../components/CPSearchResults";
import Response from "../Response";

function Search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      {/* Header */}
      <CPHeader />
      {/* Search Results */}
      <CPSearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.PRIVATE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  // After the SERVER has rendered... Pass the results to the client..
  return {
    props: {
      results: data,
    },
  };
}
