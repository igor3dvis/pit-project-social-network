import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter} from 'react-router-dom'
import { userProfileInfoGetTC } from '../../../redux/profileReducer';
import ProfileInfo from './ProfileInfo';
import Preloader from '../../Preloader/Preloader';


const ProfileInfoContainer = (props) => {
  
  useEffect(() => {
    props.userProfileInfoGetTC(props.match.params.userID);
  }, []);

  useEffect(() => {
    props.userProfileInfoGetTC(props.match.params.userID);
  }, [props.match.params.userID]);

  return (
    <>
      {props.state.userProfileInfo ? (
        <ProfileInfo
          userProfileInfo={props.state.userProfileInfo}
          isFetching={props.isFetching}
        />
     ) : (
        <Preloader />
      )}
    </>
  );
};

let mapStateToProps = (state) => ({
  state: state.profilePage,
  isFetching: state.usersPage.isFetching,
  }
)

export default compose(
  connect(mapStateToProps, { userProfileInfoGetTC }),
  withRouter
)(ProfileInfoContainer)
