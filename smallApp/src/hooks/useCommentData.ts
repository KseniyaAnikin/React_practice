import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

interface ICommentData {

}

export function useCommentData(props: number){

  const [ data, setData ] = useState<ICommentData>({});
  const token = useContext(tokenContext)

  useEffect(()=>{
    if(token && token.length > 0 && token!=="undefined"){
      axios.get(`https://oauth.reddit.com/comments/${props}`,
      {
        headers: { Authorization: `bearer ${token}`}
      })

      .then((resp)=> {
        const comments = resp.data;
        setData( comments)
        console.log('comments', comments)
      })
      .catch(console.log)
    }  
  }, [props])

  return [data]
}