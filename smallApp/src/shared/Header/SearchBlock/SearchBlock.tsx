import React, { useEffect, useState } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import axios from 'axios';

interface ISearchBlockProps {
  token: string;
}

interface IUserData {
  name?: string;
  iconImage?: string;
}

export function SearchBlock({ token }: ISearchBlockProps) {
  //save user data
  const [ data, setData ] = useState<IUserData>({});
  // ask endpoint
  useEffect(()=>{
    axios.get('https://oauth.reddit.com/api/v1/me',
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
  return (
    <div className = {styles.searchBlock} >
      <UserBlock avatarSrc={data.iconImage} username={data.name}/>
    </div>

  );
}
