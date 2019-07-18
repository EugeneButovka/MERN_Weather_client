import React from 'react';
import {
    Alert,
} from 'reactstrap';
import {connect} from 'react-redux';


class ErrorAlert extends React.Component {
    render() {
        const error = this.props.error;
        if (error)
            return (
                <div>
                    <Alert color="danger">
                        {error}
                    </Alert>
                </div>
            );
        return <div>Ok</div>;
    }
}

const mapStateToProps = (state) => ({
    error: state.userStore.error
});

export default connect(mapStateToProps)(ErrorAlert);