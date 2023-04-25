import { ActionCreator, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./me/actions";
import { MeState, meReducer } from "./me/reducer";

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
}

export const initialState: RootState = {
  commentText: '',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {}
  }
}
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const SET_TOKEN = 'SET_TOKEN';

export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT,
  text: string
};

export const updateComment: ActionCreator<UpdateCommentAction> = (text: string) => ({
  type: UPDATE_COMMENT,
  text,
});

export type SetTokenAction = {
  type: typeof SET_TOKEN,
  token: string
};

export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
});

type rootAction = MeRequestAction | MeRequestErrorAction | MeRequestSuccessAction | UpdateCommentAction | SetTokenAction;

export const rootReducer: Reducer<RootState, rootAction> = ( state = initialState, action) => {
  switch( action.type) {
    case UPDATE_COMMENT: 
      return {
        ...state,
        commentText: action.text,
      };
      case SET_TOKEN:
        return {
          ...state,
          token: action.token,
        };
      case ME_REQUEST:
      case ME_REQUEST_ERROR:
      case ME_REQUEST_SUCCESS:
        return {
          ...state,
          me: meReducer(state.me, action)
        }
    default:
      return state;
  } 
};

export const saveToken = (): ThunkAction<void, RootState, unknown, SetTokenAction> => ( dispatch) => {
  if(window.__token__){
    console.log('window.__token__', window.__token__)
    dispatch(setToken(window.__token__))
  }  
}