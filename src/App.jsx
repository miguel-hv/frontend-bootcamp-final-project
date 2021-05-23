import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
 import { checkSession } from './api/auth.api';
 import './App.scss'



const App = () => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        checkUserSession();
    }, []);

    const checkUserSession = async () => {
        try {
            const user = await checkSession();
            if (!user.message) {
                saveUser(user);
            }else {
                saveUser(false);
            }
        }catch(error) {
            console.log('Error', error);
        }
    };

    const saveUser = (user) => setUser(user);
    return (
      <Router>
        <div className="app">
        <Navbar/>
        <div className="button-div">
            {/* <div>
                <LogoutButton saveUser={saveUser}/>
            </div> */}
        </div>
            {/* <Form /> */}
            <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/donations" exact component={ Donations }/>
                <Route path="/donations/form" exact component={ DonationsForm }/>
                <Route path="/pickups" exact component={ Pickups }/>
                <Route path="/pickups/form" exact component={ PickupsForm }/>
                <Route path="/register" exact component={(props) => { 
                console.log(props);
                return <Register {...props} saveUser={saveUser}/>}}  />
                <Route path="/login" exact component={(props) => <Login {...props} saveUser={saveUser} />} />
            </Switch>
            <Footer/>
        </div>
        
        </Router>
    );
};

export default App;
