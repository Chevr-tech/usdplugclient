import Home from "../screens/Dashboard/Home";
import Orders from "../screens/Dashboard/Order";
import OrderDetails from "../screens/Dashboard/Order/OrderDetails";
import Profile from "../screens/Dashboard/Profile";
import Settings from "../screens/Dashboard/Settings";
import Support from "../screens/Dashboard/Support";

export const routes = [
  {
    path: "/dashboard",
    component: Home,
    exact: true,
  },
  {
    path: "/settings",
    component: Settings,
    exact: true,
  },
  {
    path: "/orders",
    component: Orders,
    exact: true,
  },
  {
    path: "/order/:id",
    component: OrderDetails,
    exact: true,
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
  },
  {
    path: "/support",
    component: Support,
    exact: true,
  },
];
