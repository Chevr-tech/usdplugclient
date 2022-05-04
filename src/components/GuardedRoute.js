import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getToken } from "../utlis/token";
import { routes } from "./Routes";

const GuardedRoute = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        let token = await getToken("usdplug_token");
        console.log(token, "line 12");
        if (!token || token === null) {
          window.location.pathname = "/signin";
          setLoading(false);
          return;
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      {routes.map((item, i) => (
        <Route
          key={i}
          exact={item.exact}
          path={item.path}
          component={item.component}
        />
      ))}
    </div>
  );
};

export default GuardedRoute;
