import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

interface ICommentData {
  name: string,
  text: string,
  id: string,
}

export function useCommentData(props: number){

  const [ data, setData ] = useState<Array<ICommentData>>([]);
  const token = useContext(tokenContext)

  useEffect(()=>{
    if(token && token.length > 0 && token!=="undefined"){
      axios.get(`https://oauth.reddit.com/comments/${props}`,
      {
        headers: { Authorization: `bearer ${token}`}
      })

      .then((resp)=> {
        console.log('all resp', resp)
        const commentsArray = resp.data
        console.log('resp.data=', commentsArray)

        let smth: any = []

        commentsArray.map((item: any) => {
          console.log(item.data.children);
          smth.push(item.data.children)  
        })

        console.log('smth=', smth)

        // let com: any = {}

        smth.map((item:any) => {
          item.map( 
              (el:{data:any})=>({
              // console.log('NAMe',el.data.author);
              name: el.data.author,
              text: el.data.body,
              id: el.data.id
            }))
        }
        //   (el:{data:any})=>({
        //   // console.log('NAMe',el.data.author);
        //   name: el.data.author,
        //   text: el.data.body,
        //   id: el.data.id
        // })
        )

        // console.log('com=', com)




        // .map(
          // (item: {data: any})=>({
          //   comment: item.data.children // array with comments
        //   // })
        //   console.log('child')
          
        // );

        // const comment = commentsArray.map(
          // console.log('child')
          // (item: Array<any>)=>{
          //   item.map(
          //     (item: {data : any })=>({
          //       name: item.data.author,
          //       text: item.data.body,
          //       id: item.data.id,
          //     })
          //   )
          // }
        // )

        // const commentsArray = resp.data.map(
        //     (item: any )=>{
        //       item.data.children.map(
                
        //         (comment: {data: any}) =>({
        //             name: comment.data.author,
        //             text: comment.data.body,
        //             id: comment.data.id,
        //         })
        //       )
        //     }
        // ) 
        setData( commentsArray )
        // console.log('comments', commentsArray)
        // console.log('comment1', comment)
      })
      .catch(console.log)
    }  
  }, [props])

  return [data]
}