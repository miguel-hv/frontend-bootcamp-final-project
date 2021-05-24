import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { causesAsync } from './redux/reducers/causes.slice';
import { Footer, Navbar } from './components';
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
    const { user } = useSelector(state => state.user);
    const allCauses = useSelector(state => state.causes.allCauses);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(checkSessionAsync());
        dispatch(causesAsync());
        // eslint-disable-next-line
    }, []);

    return (
      <Router>
        <div className="app">
        <Navbar/>
        {/* <Home/> */}
            <Switch>
                <Route path="/" exact component={ (props) => <Home {...props} user={user} allCauses={allCauses}/> }/>
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
