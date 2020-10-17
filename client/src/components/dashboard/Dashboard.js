import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCurrentProfile} from '../../actions/profile';


const propTypes = {
    getCurrentProfile:PropTypes.func.isRequired,
    auth: PropTypes.shape({}).isRequired,
    profile: PropTypes.shape({}).isRequired,
};

const defaultProps = {};

/**
 * 
 */
const Dashboard = ({getCurrentProfile, auth, profile}) => {
    useEffect(() => {
       getCurrentProfile() 
    }, [])
    return (
        <div>
            Dashboard
        </div>
    );
}

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
// #endregion

const mapStateToProps = (state) => ({
    auth: state.auth,
    profle: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile})(Dashboard);