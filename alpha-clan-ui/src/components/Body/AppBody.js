import React, {Component, Suspense, useEffect, useState} from "react";
import {Route,Switch } from "react-router-dom";
import AppFooter from "../Footer/Footer";
// import Loader from "./Loader";
// import ErrorBoundary from "./ErrorBoundary";
import routes from "../../config/routes";
import lazyComponentLoader from "../../helper/lazyComponentLoader";
import Breadcrumbs from "../../config/Breadcrumbs";
// import useUserStatus from "../../hooks/useUserStatus";
import { useSelector } from "react-redux";


// const PageNotFound = React.lazy(() =>
//   lazyComponentLoader(() => import("./PageNotFound"))
// );

const AppBody = () => {

  // const {forceFooterHide}=useSelector(state => ({forceFooterHide:state.userReducer.forceFooterHide}))
  // const userRole = useUserStatus();

  return <>
    <main id="global-container" className="global-container">
      <div className="content-area">
        <>
          <Suspense
            fallback={
              <>
                {/* <Loader/> */}
              </>
            }
          >
            <Switch>
              {
                routes.map(({
                              path,
                              name,
                              component: Component,
                              exact,
                              componentProps = {}
                            }, key) => 
                            <Route
                    exact
                    path={path}
                    key={key}
                    render={props => {
                      const crumbs = routes
                        // Get all routes that contain the current one.
                        .filter(({path}) => props.match.path.includes(path))
                        // Swap out any dynamic routes with their param values.
                        // E.g. "/pizza/:pizzaId" will become "/pizza/1"
                        .map(({path, name, mapParamToName, paramName}) => ({
                          path: Object.keys(props.match.params).length ?
                            Object.keys(props.match.params).reduce(
                              (path, param) => path.replace(
                                `:${param}`, props.match.params[param]
                              ),
                              path
                            ) :
                            path,
                          /*name: path.includes("/resources/") ?
                            `${name} > ${decodeURIComponent(props.match.params.name)}` :
                            name*/
                          name: mapParamToName ?
                            decodeURIComponent(props.match.params[paramName]) :
                            name
                        }));
                      return <>
                        <Component crumbs={crumbs} {...props} {...componentProps} />
                      </>;
                    }}
                  />
                )
              }
            </Switch>
          </Suspense>
        </>
      </div>
     </main>
  </>;
}

export default AppBody;
