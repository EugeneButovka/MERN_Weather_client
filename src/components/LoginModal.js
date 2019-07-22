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
import {loginUser} from '../store/thunks/userThunks';
import {setLoginUserWaitAction} from '../store/actions/userActions';


class LoginModal extends React.Component {
    initialState = {
        modal: false,
        email: '',
        password: '',
        error: null
    };
    
    state = {...this.initialState};
    

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
        const {email, password} = this.state;
        
        //simple validation
        if (!email || !password) {
            this.setState({error: "please fill the form!"});
            return false;
        }
        
        this.setState({error: null});
        return true;
    };
    
    onSubmit = e => {
        e.preventDefault();
        if (!this.validateInput()) return;
        
        const {email, password} = this.state;
        
        //add user via addUser action
        this.props.loginUserAction({email, password});
        
        //close modal
        this.toggle();
        
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
                    Login
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader
                        toggle={this.toggle}
                    >
                        User Login
                    </ModalHeader>
                    <ModalBody>
                        <Form
                            onSubmit={this.onSubmit}
                        >
                            <FormGroup>
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

                                {this.handleError()}
                                <Button
                                    color={"dark"}
                                    style={{marginTop: '2rem'}}
                                    block
                                >
                                    Login as User
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


export default connect(null, {loginUserAction: loginUser, setUserLoginWaitAction: setLoginUserWaitAction})(LoginModal);


