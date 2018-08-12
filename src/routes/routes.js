import React from "react";
import Loadable from 'react-loadable';

export const Loading = () => <div></div>

export const HomePage = Loadable({
  loader: () => import("../pages/HomePage"),
  loading : Loading
});