import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import ValidateTextInputExample from './components/commonsExamples/ValidateTextInputExample';
import ValidateInputTextExample from './components/commonsExamples/ValidateInputTextExample';
import Default from './Default';
import ContainerExample from './components/commonsExamples/ContainerExample';
import CirclesItemsExample from './components/commonsExamples/CirclesItemsExample';
import CirclesItemsVerticalExample from './components/commonsExamples/CirclesItemsVerticalExample';

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
    <Route path="/examples/ContainerExample" component={ContainerExample} />
    <Route
      path="/examples/CirclesItemsExample"
      component={CirclesItemsExample}
    />
    <Route
      path="/examples/CirclesItemsVerticalExample"
      component={CirclesItemsVerticalExample}
    />
    <Route exact path="/" component={Default} />
  </Layout>
);
