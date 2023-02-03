import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout.tsx";
import { Header } from './shared/Header/Header.tsx';
import { Content } from './shared/Content/Content.tsx';
import './main.global.css'

function AppComponent(){
  return(
    < Layout>
    < Header/>
    <Content>content</Content>
    </ Layout>
  )
}

export const App = hot(AppComponent);