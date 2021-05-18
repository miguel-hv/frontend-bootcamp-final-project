import { useState, useEfefect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Form, Register } from "./components";

const App = () => {
    const [user, setUser] = useState(null);

    const saveUser = (user) => setUser(user);
    return (
      <Router>
        <div className="app">
            <Form />
            <Switch>
                <Route path="/register" exact component={(props) => <Register {...props} saveUser={saveUser}/>}  />
            </Switch>
        </div>
        </Router>
    );
};

export default App;
