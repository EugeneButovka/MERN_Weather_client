import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container} from 'reactstrap';

import AppNavbar from "./components/Navbar";
import RegisterModal from "./components/RegisterModal";
import UserData from "./components/UserData";
import LoginModal from "./components/LoginModal";
import ErrorAlert from "./components/ErrorAlert";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <AppNavbar/>
                <Container>
                    <RegisterModal/>
                    <UserData/>
                    <LoginModal/>
                </Container>
                <ErrorAlert/>
            </div>
        );
    }
}

export default App;
