import { useState, useEfefect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './components';
import { 
    Home, 
    Donations, 
    DonationsForm,
    Register, 
    Pickups,
    PickupsForm,
 } from "./pages";

const App = () => {
    const [user, setUser] = useState(null);

    const saveUser = (user) => setUser(user);
    return (
      <Router>
        <div className="app">
            {/* <Form /> */}
            <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/donations" exact component={ Donations }/>
                <Route path="/donations/form" exact component={ DonationsForm }/>
                <Route path="/pickups" exact component={ Pickups }/>
                <Route path="/pickups/form" exact component={ PickupsForm }/>
                <Route path="/register" exact component={(props) => <Register {...props} saveUser={saveUser}/>}  />
            </Switch>
            <Footer/>
        </div>
        </Router>
    );
};

export default App;
