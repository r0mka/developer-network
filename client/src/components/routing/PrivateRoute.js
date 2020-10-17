import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const propTypes = {
    auth: PropTypes.shape({}).isRequired,
};

const defaultProps = {};

/**
 * 
 */
const PrivateRoute = ({ component: Component, auth: {isAuthenticated, loading}, ...rest }) => (
    <Route {...rest} render={props => !isAuthenticated && !loading ? <Redirect to="/login"/> : <Component {...props}/>}/>
)

PrivateRoute.propTypes = propTypes;
PrivateRoute.defaultProps = defaultProps;
// #endregion

const maptStateToProps = state => ({
    auth: state.auth
})

export default connect(maptStateToProps)(PrivateRoute);