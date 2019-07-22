import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container} from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppNavbar from "./components/Navbar";
import Protected from './pages/Protected';
import RegisterModal from "./components/RegisterModal";
import UserData from "./components/UserData";
import LoginModal from "./components/LoginModal";
import ErrorAlert from "./components/ErrorAlert";


class App extends React.Component {
    render() {
        return (
    
            <Router>
                <div>
                    <AppNavbar/>
                    <Switch>
                        <Route exact path="/login" component={() => <h1>LOGIN</h1>} />
                        <Route exact path="/register" component={() => <h1>Register</h1>} />
                        <Route path="/" component={Protected} />
                    </Switch>
                </div>
            </Router>
            // <div className="App">
            //     <AppNavbar/>
            //     <Container>
            //         <RegisterModal/>
            //         <UserData/>
            //         <LoginModal/>
            //     </Container>
            //     <ErrorAlert/>
            // </div>
        );
    }
}

export default App;
