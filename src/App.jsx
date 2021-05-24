import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Footer, LogoutButton, Navbar } from './components';
import { 
    Home, 
    Donations, 
    DonationsForm,
    Register, 
    Pickups,
    PickupsForm,
    Login,
 } from "./pages";
import { checkSessionAsync } from './redux/reducers/user.slice';
 import './App.scss'



const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(checkSessionAsync());
        // eslint-disable-next-line
    }, []);

    return (
      <Router>
        <div className="app">
        <Navbar/>
        <div className="button-div">
            {/* <div>
                <LogoutButton saveUser={saveUser}/>
            </div> */}
        </div>
            <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/donations" exact component={ Donations }/>
                <Route path="/donations/form" exact component={ DonationsForm }/>
                <Route path="/pickups" exact component={ Pickups }/>
                <Route path="/pickups/form" exact component={ PickupsForm }/>
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
            </Switch>
            <Footer/>
        </div>
        
        </Router>
    );
};

export default App;
