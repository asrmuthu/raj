import React from 'react';
import { useQuery } from '@apollo/client/react'
import {USER_QUERY, USER_QUERY_BY_ID} from './query'

const App = () => {
  const { data, loading, error } = useQuery(USER_QUERY_BY_ID, {
    variables: {
      id: 1
    }
  });

  if (loading) {
    return <div>loading........</div>;
  }

  if (error) {
    return <div>error</div>;
  }


  return (
    <div>
      <h1>Hello, World!</h1>
      {/* {data?.users?.data.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))} */}
      {data.user.name}
    </div>
  );
}
export default App;
