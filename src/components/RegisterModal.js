import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap';
import {connect} from 'react-redux';
import {registerUser} from '../store/thunks/userThunks';
import {setRegisterUserWaitAction} from '../store/actions/userActions';


class RegisterModal extends React.Component {
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        error: null
    };
    
    
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };
    
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        this.setState({error: null});
    };
    
    validateInput = () => {
        const {name, email, password, password2} = this.state;
        
        //simple validation
        if (!name || !email || !password) {
            this.setState({error: "please fill the form!"});
            return false;
        }
        if (password !== password2) {
            this.setState({error: "passwords no not match!"});
            return false;
        }
        
        this.setState({error: null});
        return true;
    };
    
    onSubmit = e => {
        e.preventDefault();
        if (!this.validateInput()) return;
        
        const {name, email, password} = this.state;
        
        
        const newUser = {
            name,
            email,
            password
        };
    
        //try add user  and set waiting till done
        this.props.setRegisterUserWaitAction();
        this.props.registerUser(newUser);
    
        //reset state
        this.setState({...this.initialState});
    };
    
    handleError() {
        if (this.state.error)
            return (
                <Alert color="danger">
                    {this.state.error}
                </Alert>
            )
    };
    
    render() {
        return (
            <div>
                <Button
                    color={"dark"}
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Add User
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader
                        toggle={this.toggle}
                    >
                        Register New User
                    </ModalHeader>
                    <ModalBody>
                        <Form
                            onSubmit={this.onSubmit}
                        >
                            <FormGroup>
                                <Label for={"name"}>
                                    Name
                                </Label>
                                <Input
                                    type={"text"}
                                    name={"name"}
                                    id={"name"}
                                    placeholder={"enter user name"}
                                    onChange={this.onChange}
                                />
                                
                                <Label for={"email"}>
                                    E-Mail
                                </Label>
                                <Input
                                    type={"text"}
                                    name={"email"}
                                    id={"email"}
                                    placeholder={"enter user e-mail"}
                                    onChange={this.onChange}
                                />
                                
                                <Label for={"password"}>
                                    Password
                                </Label>
                                <Input
                                    type={"text"}
                                    name={"password"}
                                    id={"password"}
                                    placeholder={"enter user password"}
                                    onChange={this.onChange}
                                />
                                
                                <Label for={"password2"}>
                                    Repeat Password
                                </Label>
                                <Input
                                    type={"text"}
                                    name={"password2"}
                                    id={"password2"}
                                    placeholder={"enter password again"}
                                    onChange={this.onChange}
                                />
                                {this.handleError()}
                                <Button
                                    color={"dark"}
                                    style={{marginTop: '2rem'}}
                                    block
                                >
                                    Add User
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


export default connect(null, {registerUser, setRegisterUserWaitAction})(RegisterModal);


