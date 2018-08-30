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
<<<<<<< HEAD
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
  
=======
  let accessToken = Cookies.get("accessToken");
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      autherization: "bearer " + accessToken
    },
    body
  }).then(res => {
    if (res.status === 401) {
      Cookies.remove("accessToken");
      store.dispatch(push("/login"));
    }
    return res.json();
  })
}

>>>>>>> 3d8e1765d9638f5e4a4ad549d5b23c49e1f1876c
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

