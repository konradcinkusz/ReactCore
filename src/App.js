import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import ValidateTextInputExample from './components/commonsExamples/ValidateTextInputExample';
import ValidateInputTextExample from './components/commonsExamples/ValidateInputTextExample';
import Default from './Default';

export default () => (
  <Layout>
    <Route
      path="/examples/ValidateInputTextExample"
      component={ValidateInputTextExample}
    />
    <Route
      path="/examples/ValidateTextInputExample"
      component={ValidateTextInputExample}
    />
    <Route exact path="/" component={Default} />
  </Layout>
);
