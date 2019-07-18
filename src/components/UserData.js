import React from 'react';
import {
    Container,
    Label, ListGroup, ListGroupItem
} from 'reactstrap';
import {connect} from 'react-redux';


class UserData extends React.Component {
    render() {
        const loading = this.props.loading;
        if (loading) return <div>Loading...</div>;
        
        const {name, email, register_date} = this.props.user;
        return (
            <div>
                <Container>
                    <Label>
                        Current User Info
                    </Label>
                    <ListGroup>
                        <ListGroupItem>
                            <Label>
                                Name: {name}
                            </Label>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Label>
                                E-Mail: {email}
                            </Label>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Label>
                                Created: {register_date}
                            </Label>
                        </ListGroupItem>
                    </ListGroup>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userStore.userData,
    loading: state.userStore.loading
});

export default connect(mapStateToProps)(UserData);