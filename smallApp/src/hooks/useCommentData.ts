import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reduser";

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
  const token =  useSelector<RootState>(state => state.token);

  useEffect(()=>{
    if(token){
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