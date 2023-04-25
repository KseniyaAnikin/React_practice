import axios from "axios";
import { useEffect, useState } from "react";
// import { useToken } from "./useToken";
import { useSelector } from "react-redux";
import { RootState } from "../store/reduser";

export interface IPostsData{
  id: number,
  author: string,
  title: string,
  rating: string | number,
  avatar: string,
  previewImg:string,
  dataPostUtc: string | number | object, 
}

export function usePostsData(){

  const [ data, setData ] = useState<Array<IPostsData>>([]);
  const token =  useSelector<RootState>(state => state.token);
  const ava = require('../assets/ava.jpg').default;
  const prev = require('../assets/prev.jpg').default;

  useEffect(() =>{
    if(token && token !== "undefined"){
      axios.get('https://oauth.reddit.com/best.json?sr_detail=true&limit=5',
      {
        headers: { Authorization: `bearer ${token}`}
      })
      .then((resp)=> {
        console.log(resp);
        const postsData = resp.data.data.children.map(
          (item: {data: any}) => ({
            id: item.data.id,
            author: item.data.author,
            title: item.data.title,
            rating: item.data.ups,
            avatar: item.data.sr_detail.icon_img
              ? item.data.sr_detail.icon_img
              : ava,
            previewImg: item.data.preview
              ? item.data.preview.images?.[0].source.url.replace(
                /(\&amp\;)/g,
                "&"
              )
              : prev,
            dataPostUtc: new Date(item.data.created_utc).toLocaleDateString(),
          })
        );
        setData(postsData)
      })
      .catch(console.log)
    }
  }, [token]);
  
  return [data]
}