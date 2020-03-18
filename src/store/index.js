import { combineReducers } from "redux";
import configureStore from "@store/createStore";
import rootSaga from "@sagas";

import { reducer as MainReducer } from "@containers/main/reducer";

export default () => {
  const rootReducer = combineReducers({
    main: MainReducer
  });
  return configureStore(rootReducer, rootSaga);
};
