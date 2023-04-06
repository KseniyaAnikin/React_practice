import React from "react";
import { usePostsData } from "../../hooks/usePostsData";

export interface IPostsContextData {
  id: string,
  author: string,
  title: string,
  rating: string | number,
  avatar: string,
  previewImg:string,
  dataPostUtc: string | number | object, 
}

export const postsContext = React.createContext<Array<IPostsContextData>>([ ]);

export function PostsContextProvider({ children }: { children: React.ReactNode}){
  const [posts] = usePostsData();

  return (
    <postsContext.Provider value={posts}>
      {children}
    </postsContext.Provider>
  );
}