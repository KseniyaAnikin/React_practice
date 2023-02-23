import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import './main.global.css'
import { CardsList } from "./shared/CardsList";
import { assignId, generateId, generateRandomString } from "./utils/react/generateRandomIndex";
import { GenericList } from "./shared/GenericList";
import { merge } from "./utils/js/merge";
import { Dropdown } from "./shared/Dropdown";
import { EColors, Text } from "./shared/Text";


const LIST = [
  {text: 'some'},
  {text: 'other some'},
  {text: 'some'}
].map(generateId)

function AppComponent(){
  // const [list, setList] = React.useState(LIST);

  // const handleItemClick = (id: string) => {
  //   console.log(id)
  //   // setList(list.filter((item)=> item.id !== id))
  // }

  // const hadleAdd = () => {
  //   setList(list.concat(generateId({text : generateRandomString()})))
  // }

  return(
    < Layout>
    < Header/>
    <Content>
      <CardsList/>
     <br/>
     <Text size={20} mobileSize={28} color={EColors.green} bold>Label1</Text>
     <Text size={20}>Label2</Text>
     <Text size={20} mobileSize={16}>Label3</Text>
    </Content>
    </ Layout>
  )
}

export const App = hot(()=> <AppComponent/>);