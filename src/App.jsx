import { useState, useEfefect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { 
    Home, 
    Donations, 
    DonationsForm,
    Register,  } from "./pages";

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
                <Route path="/register" exact component={(props) => <Register {...props} saveUser={saveUser}/>}  />
            </Switch>
        </div>
        </Router>
    );
};

export default App;
