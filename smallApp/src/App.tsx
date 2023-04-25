import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import './main.global.css';
import { CardsList } from "./shared/CardsList";
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from "./shared/Layout";
import { PostsContextProvider } from "./shared/context/postsContext";
import { UserContextProvider } from "./shared/context/userContext";
import { rootReducer, saveToken } from "./store/reduser";

export const store = createStore( rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent(){

  useEffect(()=>{
    store.dispatch<any>(saveToken())
  }, []
  )

  return(
    <Provider store={store}>
      <UserContextProvider>
        <PostsContextProvider>
          <Layout>
            <Header/>
            <Content>
              <CardsList/>
            </Content>
          </Layout>
        </PostsContextProvider>
      </UserContextProvider>
    </Provider>
  )
}

export const App = hot(()=> <AppComponent/>);