import MainView from "./MainView";
import axios from 'axios'
import { Route, Switch, Redirect } from 'react-router-dom'

axios.defaults.baseURL = process.env.REACT_APP_ALIYUNHOST ? process.env.REACT_APP_ALIYUNHOST + ":8087" : "http://127.0.0.1:8087"
axios.defaults.withCredentials = true

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/homepage" />
        <MainView />
      </Switch>
    </div>
  );
}

export default App;
