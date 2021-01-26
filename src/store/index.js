import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';


import reducer from "./reducer";
import rootSaga from "./sagas";


const makeStore = () => {

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, composeWithDevTools(
      applyMiddleware(sagaMiddleware)
  ));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(makeStore);

export default wrapper;
