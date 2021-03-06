import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCurrentProfile} from '../../actions/profile';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';

const propTypes = {
    getCurrentProfile:PropTypes.func.isRequired,
    auth: PropTypes.shape({}).isRequired,
    profile: PropTypes.shape({}).isRequired,
};

const defaultProps = {};

/**
 * 
 */
const Dashboard = ({getCurrentProfile, auth: {user}, profile: { profile, loading }}) => {
    useEffect(() => {
       getCurrentProfile() 
    }, [getCurrentProfile])
    return loading && profile === null 
        ? <Spinner/> 
        : (
            <Fragment>
                <h1 className="large text-primary">Dashboard</h1>
                <p className="lead">
                    <i className="fas fa-user"></i> 
                    Welcome {user && user.name}
                </p>
                { profile !== null  
                    ? <Fragment>has</Fragment> 
                    : (
                    <Fragment>
                       <p> You have not yet set up your profile, please add some info</p>
                       <Link to ='/create-profile' className="btn btn-primary my-1">Crate profile</Link>
                    </Fragment>
                    )    
                }
            </Fragment>
        )
}

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
// #endregion

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile})(Dashboard);