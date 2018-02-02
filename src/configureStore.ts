import thunk, { ThunkAction } from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
  GenericStoreEnhancer,
  Store,
  StoreEnhancerStoreCreator,
  ReducersMapObject
} from 'redux';
import reducers, { ApplicationState } from './reducers';
import { NoneAction, ApplicationAction } from './actions';
import { Middleware } from 'redux';
import { MiddlewareAPI } from 'redux';

declare module 'redux' {
  export interface Dispatch<S> {
    <O extends {}>(thunkObject: O): O;
  }
}
declare const module: any;

export function configureStore(initialState: ApplicationState) {
  // Build middleware. These are functions that can process the actions before they reach the store.
  const windowIfDefined: any = typeof window === 'undefined' ? null : window;
  // If devTools is installed, connect to it
  const devToolsExtension =
    windowIfDefined && windowIfDefined.devToolsExtension;

  const composer = compose<any>(
    applyMiddleware(thunk),
    devToolsExtension ? devToolsExtension() : (next: any) => next
  );

  const createStoreWithMiddleware = composer(createStore);

  // Combine all reducers and instantiate the app-wide store instance
  const store = createStoreWithMiddleware(reducers, initialState);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

type Action = ApplicationAction | ThunkAction<any, any, any>;

export const store = configureStore(reducers(undefined, new NoneAction()));
