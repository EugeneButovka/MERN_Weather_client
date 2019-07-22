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
    Alert,
    Container
} from 'reactstrap';
import {connect} from 'react-redux';
import {loginUser} from '../store/thunks/userThunks';
import {setLoginUserWaitAction} from '../store/actions/userActions';


class _LoginModal extends React.Component {
    initialState = {
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: ''
    };
    
    state = {...this.initialState};
    
    
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };
    
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        this.setState({msg: ''});
    };
    
    onSubmit = e => {
        e.preventDefault();
        
        const {email, password} = this.state;
        
        //simple validation
        if (!email || !password) {
            this.setState({msg: "please fill the form!"});
            return;
        }
        
        this.props.loginUserAction({email, password});
    
        this.setState({...this.initialState});
        
        //close modal
        this.toggle();
    };
    
    handleError() {
        if (this.state.msg !== '')
            return (
                <Alert color="danger">
                    {this.state.msg}
                </Alert>
            )
    };
    
    render() {
        return (
            <Container>
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
                        Enter your email and password
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
                                    placeholder={"enter user email"}
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
                                    Login
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </Container>
        );
    }
}

/*const mapStateToProps = state => ({
    users: state.userStore.users //i.e Global Redux State
});*/

export default connect(null, {loginUserAction: loginUser, setUserLoginWaitAction: setLoginUserWaitAction})(_LoginModal);


