import { ApolloClient, ApolloProvider, gql, useQuery, InMemoryCache } from '@apollo/client';
import './App.css';

const GRAPHQL_API = 'https://countries.trevorblades.com';

const client = new ApolloClient({

  uri: GRAPHQL_API,
  cache: new InMemoryCache(),
});

function ShowCountries(){

  const CTRY_QUERY = gql`
  {
    countries {
      code
      name
      capital
      currency
    }
  }
  `;

 const { loading, error, data } = useQuery(CTRY_QUERY);

 if (loading){
  return <p>Loading data...</p>;
 }

 if(error){
  return <p>Error!</p>;
 }
  return data.countries.map(country => <li key={country.code}>{country.code} : {country.capital} : {country.currency}</li>)
}

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
      <h1>Graphql</h1>
      <h3>Upit serveru:</h3>
      <h3>https://countries.trevorblades.com</h3>
      <ul>
        <ShowCountries/>
      </ul>
      </ApolloProvider>
    </div>
  );
}

export default App;
