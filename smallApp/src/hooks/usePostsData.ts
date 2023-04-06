import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../shared/context/tokenContext";
import { useToken } from "./useToken";

export interface IPostsData{
  id: string,
  author: string,
  title: string,
  rating: string | number,
  avatar: string,
  previewImg:string,
  dataPostUtc: string | number | object, 
}

export function usePostsData(){

  const [ data, setData ] = useState<Array<IPostsData>>([]);
  const [token] = useToken();

  useEffect(() =>{
    if(token && token.length > 0 && token !== "undefined"){
      axios.get('https://oauth.reddit.com/best.json?sr_detail=true&limit=5',
      {
        headers: { Authorization: `bearer ${token}`}
      })
      .then((resp)=> {
        const postsData = resp.data.data.children.map(
          (item: {data: any}) => ({
            id: item.data.id,
            author: item.data.author,
            title: item.data.title,
            rating: item.data.ups,
            avatar: item.data.sr_detail.icon_img
              ? item.data.sr_detail.icon_img
              : "https://ltdfoto.ru/images/2023/01/20/IMAGE-2023-01-20-123147.th.jpg",
            previewImg: item.data.preview
              ? item.data.preview.images?.[0].source.url.replace(
                /(\&amp\;)/g,
                "&"
              )
              : "https://ltdfoto.ru/images/2023/01/20/IMAGE-2023-01-20-123142.jpg",
            dataPostUtc: item.data.created_utc,
          })
        );
        console.log('THIS IS DATA  ', postsData)
        setData(postsData)
      })
      .catch(console.log)
    }
  }, [token]);
  
  return [data]
}