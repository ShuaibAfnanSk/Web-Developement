import HomePage from './pages/home/Home';
import SingleBlogSection from './components/SingleBlog/SingleBlog';
import WriteSection from './components/Write/Write';
import SettingsSection from './pages/settings/Settings';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useContext } from 'react';
import { Context } from './context/Context';


function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/login'>
            {user ? <HomePage/>: <Login />}
          </Route>
          <Route path='/signup'>
            {user ? <HomePage/>:<Signup /> } 
          </Route>
          <Route path='/settings'>
            {user ? <SettingsSection /> : <Signup/>}
          </Route>
          <Route path='/post/:postid'>
            <SingleBlogSection />
          </Route>
          <Route path='/write'>
            {user ? <WriteSection /> : <Signup />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
