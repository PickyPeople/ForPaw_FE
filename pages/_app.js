import { useEffect } from "react";
import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component }) {
  const client = new ApolloClient({
    //uri: "",
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
  }, []);

  return (
    <div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </div>
  );
}
