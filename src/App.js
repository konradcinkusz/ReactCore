import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import ValidateInputTextExample from './components/examples/ValidateInputTextExample';
import Default from './Default';

export default () => (
  <Layout>
    <Route
      path="/examples/ValidateInputTextExample"
      component={ValidateInputTextExample}
    />
    <Route exact path="/" component={Default} />
  </Layout>
);
