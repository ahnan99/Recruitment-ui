import HomePage from "../containers/HomePage/HomePage"
import JobDetail from "../containers/JobDetail/JobDetail"
import LoginPage from "../containers/LoginPage/LoginPage"
import Register from "../containers/Register/Register"
import Resume from "../containers/ResumePage/ResumePage"

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
},
{
    path: '/resume',
    pathKey: 'resume',
    component: Resume
}
]


export default routes