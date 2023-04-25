import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reduser";
import { meRequestAsync } from "../store/me/actions";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { store } from "../App";

export interface IUserData {
  name?: string;
  iconImage?: string;
}

export function useUserData(){
  const data = useSelector<RootState, IUserData>(state => state.me.data);
  const loading = useSelector<RootState, boolean>(state => state.me.loading);
  const token =  useSelector<RootState>(state => state.token);
  const dispatch = useDispatch<ThunkDispatch<RootState,unknown,Action<string>>>();

  useEffect(()=> {
    if(!token) return; 
    dispatch(meRequestAsync())
  }, [token])

  return {
    data,
    loading
  }
}