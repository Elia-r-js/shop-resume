import React from "react";

import { Route} from "react-router-dom"

type routeConfig = {
  path: string;
  Component: React.ComponentType<any>;
  children?:routeConfig[] | Record<string,routeConfig>; 
};

export default function BuildRouter(routes: Record<string, routeConfig> | routeConfig[]) {
  const routeList = Array.isArray(routes) ? routes : Object.values(routes);
  return routeList.map(({ path, Component,children }) => (
    <Route path={path} key={path} element={<Component />}>
      {children && BuildRouter(children)}
    </Route>
  ));
}
