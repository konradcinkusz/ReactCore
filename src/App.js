import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Fuel from './components/Fuel';
import Car from './components/Car';
import CombustionReport from './components/CombustionReport';
import RouteReport from './components/RouteReport';
import ValidateInputTextExample from './components/examples/ValidateInputTextExample';

export default () => (
  <Layout>
    <Route
      path="/examples/ValidateInputTextExample"
      component={ValidateInputTextExample}
    />
    <Route path="/fuel" component={Fuel} />
    <Route path="/car" component={Car} />
    <Route path="/route" component={RouteReport} />
    <Route exact path="/" component={CombustionReport} />
  </Layout>
);
