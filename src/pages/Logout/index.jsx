// import React from 'react';
// import {withRouter} from 'react-router-dom'
// import connect from "react-redux/es/connect/connect";
// import {logoutUserAction} from '../../store/actions/userActions';
//
//
// class LogoutNoRouter extends React.Component {
//     componentDidMount () {
//         Promise.resolve(this.props.logoutUserAction())
//             .then(this.props.history.push.bind(this,"/login"));
//     }
//
//     render() {
//         return null;
//     }
// }
//
//
// const Logout = withRouter(LogoutNoRouter);
//
// export default connect(null, {logoutUserAction})(Logout)