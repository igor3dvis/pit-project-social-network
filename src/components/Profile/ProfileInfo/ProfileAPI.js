import axios from "axios";
import React, { useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import Preloader from "../../Preloader/Preloader";
import { userProfileInfoGet } from "../../../api/usersApi";

const ProfileAPI = (props) => {
    
  useEffect(() => {
    userProfileInfoGet(props.match.params.userID)
    .then((data) => {
       props.setProfileInfo(data.data);
      });
  }, []);

  return (
    <>
      {props.state.userProfileInfo ? (
        <ProfileInfo userProfileInfo={props.state.userProfileInfo} />
      ) : (
        <Preloader/>
       )} 
    </>
  );
};

export default ProfileAPI;
