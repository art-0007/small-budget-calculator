import About from "../pages/About";
import BudgetPage from "../pages/BudgetPage";
import BudgetsContainer from "../pages/BudgetsContainer";
import Home from "../pages/Home";
import error from "../pages/error";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/', component: Home, exact: true },
    {path: '/about', component: About, exact: false },
    {path: '/budgets', component: BudgetsContainer, exact: true },
    {path: '/budgets/:id', component: BudgetPage, exact: true },
    {path: '/error', component: error, exact: false }
]

export const publicRoutes = [
    {path: '/', component: Home, exact: true },
    {path: '/about', component: About, exact: false },
    {path: '/login', component: Login, exact: false }
]