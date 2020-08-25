import React from 'react';

// Components
import Layout from './hoc/Layout/Layout';

// Containers
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <Layout>
      <BurgerBuilder/>
    </Layout>
  );
}

export default App;
