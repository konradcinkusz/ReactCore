import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import * as Fuel from './examplesReducers/Fuel';
import * as Car from './examplesReducers/Car';
import * as CombustionReport from './examplesReducers/CombustionReport';
import * as RouteReport from './examplesReducers/Route';

export default function configureStore(history, initialState) {
  const reducers = {
    fuelItems: Fuel.reducer,
    cars: Car.reducer,
    combustionReports: CombustionReport.reducer,
    kmCounter: RouteReport.reducer
  };

  const middleware = [thunk, routerMiddleware(history)];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (
    isDevelopment &&
    typeof window !== 'undefined' &&
    window.devToolsExtension
  ) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
}
