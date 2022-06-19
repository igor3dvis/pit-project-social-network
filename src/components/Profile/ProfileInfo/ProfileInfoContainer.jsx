import { connect } from "react-redux";
import { withRouter} from 'react-router-dom'
//import ProfileInfo from "./ProfileInfo";
import { setProfileInfo } from "../../../redux/profileReducer";
import ProfileAPI from "./ProfileAPI";

let mapStateToProps = (state) => {
  return {
    state: state.profilePage,
  };
};

const ProfileWithUserID = withRouter(ProfileAPI)
const ProfileInfoContainer = connect(mapStateToProps, { setProfileInfo })(ProfileWithUserID);

export default ProfileInfoContainer;
