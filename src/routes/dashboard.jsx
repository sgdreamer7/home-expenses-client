// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Settings from "@material-ui/icons/Settings";
import Receipt from "@material-ui/icons/Receipt";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import SigninPage from "views/Signin/SigninPage.jsx";
import VerifyEmailPage from "views/VerifyEmail/VerifyEmailPage.jsx";
import SignupPage from "views/Signup/SignupPage.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";

export const isSignedInUser = false;

const dashboardRoutes = [
  (isSignedInUser && {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  }) ||
    null,
  (!isSignedInUser && {
    path: "/signin",
    sidebarName: "Sign in",
    navbarName: "Sign in",
    icon: Person,
    component: SigninPage
  }) ||
    null,
  (!isSignedInUser && {
    path: "/signup",
    sidebarName: "Sign up",
    navbarName: "Sign up",
    icon: Person,
    component: SignupPage
  }) ||
    null,
  (!isSignedInUser && {
    path: "/verify-email",
    sidebarName: "Email verification",
    navbarName: "Email verification",
    icon: Person,
    component: VerifyEmailPage
  }) ||
    null,
  (isSignedInUser && {
    path: "/reports",
    sidebarName: "Reports",
    navbarName: "Reports",
    icon: Receipt, // TODO: replace icon
    component: TableList // TODO: replace by statistics page component
  }) ||
    null,
  isSignedInUser && {
    path: "/config",
    sidebarName: "Config",
    navbarName: "Config",
    icon: Settings,
    component: UserProfile // TODO: replace by admin page component
  },
  {
    redirect: true,
    path: "/",
    to: isSignedInUser ? "/dashboard" : "/signin",
    navbarName: "Redirect"
  }
].filter(route => !!route);

export default dashboardRoutes;
