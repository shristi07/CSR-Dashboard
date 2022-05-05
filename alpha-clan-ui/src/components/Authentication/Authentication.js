import React, { Suspense } from "react";
import { getCookie } from "../../helper/"
import lazyComponentLoader from "../../helper/lazyComponentLoader";


const LandingPage = React.lazy(() =>
  lazyComponentLoader(() => import("../StartPage/Login"))
);

export default function (ComposedComponent) {
  class Authenticate extends React.Component {

    render() {
      const isAuth = getCookie('auth_token');
      return (
        <React.Fragment>
          <Suspense
            fallback={
              <>
                
              </>
            }
          >
            {true ? <ComposedComponent {...this.props} /> : <LandingPage />}
          </Suspense>
        </React.Fragment>
      );
    }
  }

  return Authenticate;
}
