import React, { Component, Suspense, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import AppFooter from "../Footer/Footer";
import routes from "../../config/routes";

const AppBody = () => {
  return (
    <>
      <main id="global-container" className="global-container">
        <div className="content-area">
          <>
            <Suspense fallback={<></>}>
              <Switch>
                {routes.map(
                  (
                    {
                      path,
                      name,
                      component: Component,
                      exact,
                      componentProps = {},
                    },
                    key
                  ) => (
                    <Route
                      exact
                      path={path}
                      key={key}
                      render={(props) => {
                        const crumbs = routes
                          .filter(({ path }) => props.match.path.includes(path))
                          .map(({ path, name, mapParamToName, paramName }) => ({
                            path: Object.keys(props.match.params).length
                              ? Object.keys(props.match.params).reduce(
                                  (path, param) =>
                                    path.replace(
                                      `:${param}`,
                                      props.match.params[param]
                                    ),
                                  path
                                )
                              : path,
                            name: mapParamToName
                              ? decodeURIComponent(
                                  props.match.params[paramName]
                                )
                              : name,
                          }));
                        return (
                          <>
                            <Component
                              crumbs={crumbs}
                              {...props}
                              {...componentProps}
                            />
                          </>
                        );
                      }}
                    />
                  )
                )}
              </Switch>
            </Suspense>
          </>
        </div>
      </main>
    </>
  );
};

export default AppBody;
