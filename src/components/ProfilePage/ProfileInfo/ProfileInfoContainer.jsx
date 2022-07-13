import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter} from 'react-router-dom'
import { userProfileInfoGetThunkCreator } from '../../../redux/profileReducer';
import ProfileInfo from './ProfileInfo';
import Preloader from '../../Preloader/Preloader';


const ProfileInfoContainer = (props) => {
  
  useEffect(() => {
    props.userProfileInfoGetThunkCreator(props.match.params.userID);
  }, []);

  useEffect(() => {
    props.userProfileInfoGetThunkCreator(props.match.params.userID);
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

let mapStateToProps = (state) => {
  return {
    state: state.profilePage,
    isFetching: state.usersPage.isFetching,
  };
};

export default compose(
  connect(mapStateToProps, { userProfileInfoGetThunkCreator }),
  withRouter
)(ProfileInfoContainer)
