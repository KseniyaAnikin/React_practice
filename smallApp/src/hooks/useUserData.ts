import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import { tokenContext } from "../shared/context/tokenContext";
import { useToken } from "./useToken";

interface IUserData {
  name?: string;
  iconImage?: string;
}

export function useUserData(){
  //save user data
 
  const [ data, setData ] = useState<IUserData>({});
  const token = useContext(tokenContext)
  // ask endpoint
  useEffect(()=>{
    if(token && token.length > 0 && token!=="undefined"){
      axios.get('https://oauth.reddit.com/api/v1/me?raw_json=1',
      {
        headers: { Authorization: `bearer ${token}`}
      })
      // .then(console.log)
      .then((resp)=> {
        const userData = resp.data;
        setData( { name: userData.name, iconImage: userData.icon_img })
      })
      .catch(console.log)
    }  
  }, [token])

  return [data]
}