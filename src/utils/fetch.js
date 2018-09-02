import { push } from "react-router-redux";
import store from "../store";

export function get(url) {
  let accessToken = localStorage.getItem("accessToken");
    return fetch(url, {
      method: "GET",
      headers: {
        autherization: "bearer " + accessToken
      }
    }).then(res => {
      if (res.status === 401) {
        localStorage.removeItem("accessToken");
        store.dispatch(push("/login"));
      }
      return res;
    });
  }

export function del(url) {
  let accessToken = localStorage.getItem("accessToken");
    return fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        autherization: "bearer " + accessToken
      }
    }).then(res => {
      if (res.status === 401) {
        localStorage.removeItem("accessToken");
        store.dispatch(push("/login"));
      }
      return res;
    });
  }
  
export function post(url, body) {

  let accessToken = localStorage.getItem("accessToken");
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        autherization: "bearer " + accessToken
      },
      body
    }).then(res => {
      if (res.status === 401) {
        localStorage.removeItem("accessToken");
        store.dispatch(push("/login"));
      }
      return res.json();
    })
  }

export function put(url, body) {
  let accessToken = localStorage.getItem("accessToken");
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      autherization: "Bearer " + accessToken
    },
    body: body
  }).then(res => {
    if (res.status === 401) {
      localStorage.removeItem("accessToken");
      store.dispatch(push("/login"));
    }
    return res;
  });
}

