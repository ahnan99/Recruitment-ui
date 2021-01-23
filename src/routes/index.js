import HomePage from "../containers/HomePage/HomePage"
import JobDetail from "../containers/JobDetail/JobDetail"
import LoginPage from "../containers/LoginPage/LoginPage"
import Register from "../containers/Register/Register"

const routes = [{
    path: '/homepage',
    pathKey: 'homepage',
    component: HomePage
},
{
    path: '/jobdetail',
    pathKey: 'jobdetail',
    component: JobDetail
},
{
    path: '/login',
    pathKey: 'login',
    component: LoginPage
},
{
    path: '/register',
    pathKey: 'register',
    component: Register
}
]


export default routes