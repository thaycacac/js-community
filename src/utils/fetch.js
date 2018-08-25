import Cookies from "js-cookie";
import { push } from "react-router-redux";
import store from "../store";
import { fetchPostsRequest,fetchPostsSuccess,fetchPostsError } from '../reducers/auth/actions';

export function get(url) {
  let accessToken = Cookies.get("accessToken");
  return fetch(url, {
    method: "GET",
    headers: {
      autherization: "bearer " + accessToken
    }
  }).then(res => {
    if (res.status === 401) {
      Cookies.remove("accessToken");
      store.dispatch(push("/login"));
    }
    return res;
  });
}

export function del(url) {
  let accessToken = Cookies.get("accessToken");
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      autherization: "bearer " + accessToken
    }
  }).then(res => {
    if (res.status === 401) {
      Cookies.remove("accessToken");
      store.dispatch(push("/login"));
    }
    return res;
  });
}

export function post(url, body) {
  let accessToken = Cookies.get("accessToken");
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      autherization: "bearer " + accessToken
    },
    body: body
  }).then(res => {
    if (res.status === 401) {
      Cookies.remove("accessToken");
      store.dispatch(push("/login"));
    }
    return res;
  });
}

export function put(url, body) {
  let accessToken = Cookies.get("accessToken");
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      autherization: "Bearer " + accessToken
    },
    body: body
  }).then(res => {
    if (res.status === 401) {
      Cookies.remove("accessToken");
      store.dispatch(push("/login"));
    }
    return res;
  });
}

function fetchPosts(){
  const URL = 'https://jscommunity-server.azurewebsites.net/post/get?page=1';
  return fetch(URL, {method:'GET'})
  .then(response => Promise.all([response,response.json()]));

}
export function fetchPostsWithRedux(){
  return (dispatch) =>{
      dispatch(fetchPostsRequest());
      return fetchPosts().then(
          ([response,json]) => {
              if(response.status === 200){
                  dispatch(fetchPostsSuccess(json))
              }
              else{
                  dispatch(fetchPostsError())
              }
          }
      )
  }
}
