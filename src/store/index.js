import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { MODULE_NAME as cardsModuleName } from './cards/selectors';
import { reducer as cardsReducer } from './cards/reducer';

const persistCards = {
    key: 'cards',
    storage,
  };

const rootReducer = combineReducers({    
    [cardsModuleName]: persistReducer(persistCards, cardsReducer), 
  });
  
  export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  export const persistor = persistStore(store);
  