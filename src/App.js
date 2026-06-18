import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const App = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${page}`
    );
    const data = await res.json();
    setItems([...items, ...data]);
    setPage(page + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </InfiniteScroll>
  );
};

export default App;
