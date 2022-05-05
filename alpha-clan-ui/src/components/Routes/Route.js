import React, {Suspense, useEffect} from "react";
import Authentication from "../Authentication/Authentication";
import lazyComponentLoader from "../../helper/lazyComponentLoader";

const MainContainer = React.lazy(() => lazyComponentLoader(() => import("../MainContainer/MainContainer")));
const Auth = Authentication(MainContainer);

const Routers = () => {

  return <div style={{height: "100vh", width: "100%"}}>
    <Suspense fallback={<>!--Loading--!</>}>
      <Auth/>
    </Suspense>
  </div>;
};
export default Routers;
