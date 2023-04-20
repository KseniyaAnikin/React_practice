import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import { useToken } from "./useToken";

interface ICommentData {
  data: {
    author: string
    id: string
    body: string
    created: number
    ava:any
  }
}

export function useCommentData(props: number){

  const [ data, setData ] = useState<Array<ICommentData>>([]);
  const token = useToken(); 

  useEffect(()=>{
    if(token && token.length > 0){
      axios.get(`https://oauth.reddit.com/comments/${props}`,
      {
        headers: { Authorization: `bearer ${token}`}
      })

      .then((resp)=> {
        const commentsArray = resp.data[1].data.children;
        console.log('resp.data=', commentsArray);
        setData( commentsArray );
      })
      .catch(console.log);
    }  
  }, [props])

  return data
}