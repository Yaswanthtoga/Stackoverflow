import { Client, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: 'https://beiwanglizhen.stepzen.net/api/stackoverflow/__graphql',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization:
        'Apikey beiwanglizhen::stepzen.net+1000::5d93219cb9e12abb62a17adfcf2ac3133e89434a1af7fe6dda70dce006e35b12',

      'Content-Type': 'application/json',
    },
  },
});

export default client;