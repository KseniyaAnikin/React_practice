import React, {useEffect, useState} from "react";
import axios from "axios";

interface IUserData {
  name?: string;
  iconImage?: string;
}

export function useUserData(token: string){
  //save user data
  const [ data, setData ] = useState<IUserData>({});
  // ask endpoint
  useEffect(()=>{
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
  }, [token])

  return [data]
}