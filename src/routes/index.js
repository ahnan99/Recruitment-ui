import AccountPage from "../containers/AccountPage/AccountPage"
import HomePage from "../containers/HomePage/HomePage"
import JobDetail from "../containers/JobDetail/JobDetail"
import LoginPage from "../containers/LoginPage/LoginPage"
import Register from "../containers/Register/Register"
import Resume from "../containers/ResumePage/ResumePage"
import ApplicationPage from '../containers/ApplicationPage/ApplicationPage'
import FeedbackPage from '../containers/FeedbackPage/FeedbackPage'
import MessagePage from '../containers/MessagePage/MessagePage'
import PosterListPage from "../containers/Poster/PosterListPage"
import PosterDetailPage from "../containers/Poster/PosterDetailPage"
import ReferPage from "../containers/ReferPage/ReferPage"

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
},
{
    path: '/accountInfo',
    pathKey: 'accountInfo',
    component: AccountPage
},
{
    path: '/myApplication',
    pathKey: 'myApplication',
    component: ApplicationPage
},
{
    path: '/feedbackpage',
    pathKey: 'feedbackpage',
    component: FeedbackPage
},
{
    path: '/messagepage',
    pathKey: 'messagepage',
    component: MessagePage
},
{
    path: '/posterList',
    pathKey: 'posterList',
    component: PosterListPage
},
{
    path: '/posterDetail',
    pathKey: 'posterDetail',
    component: PosterDetailPage
},
{
    path: '/refer',
    pathKey: 'refer',
    component: ReferPage
}
]


export default routes