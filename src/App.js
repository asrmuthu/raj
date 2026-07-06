import React, { Suspense, lazy } from 'react';

const Chunk = lazy(() => import('./Chunk'));

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Suspense fallback={<div>Loading chunk...</div>}>
        <Chunk />
      </Suspense>
    </div>
  );
}
export default App;
