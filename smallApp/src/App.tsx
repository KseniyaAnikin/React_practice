import React from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { useToken } from "./hooks/useToken";
import './main.global.css';
import { CardsList } from "./shared/CardsList";
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from "./shared/Layout";
import { PostsContextProvider } from "./shared/context/postsContext";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { rootReducer } from "./store";

const store = createStore( rootReducer, composeWithDevTools());

function AppComponent(){
  // const [token] = useToken();


 
  return(
    <Provider store={store}>
        {/* <tokenContext.Provider value={token}> */}
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
        {/* </tokenContext.Provider> */}
    </Provider>
  )
}

export const App = hot(()=> <AppComponent/>);