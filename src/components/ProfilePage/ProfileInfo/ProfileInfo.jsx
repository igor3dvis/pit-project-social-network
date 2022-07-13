import React from "react";
import Preloader from "../../Preloader/Preloader";
import styles from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {
  const {
    aboutMe,
    contacts,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    photos,
  } = props.userProfileInfo;

  return (
    <>
      <div className={styles.img}></div>
      {props.isFetching 
        ? <Preloader />
        : <>
            <div className={styles.profile__top}>
              <img
                className={styles.profile__avatar}
                src={props.userProfileInfo.photos.small}
                alt="fon"
              />
              <div className={styles.profile__description}>
                <p className={styles.userName}>{fullName}</p>
                <p className={styles.userAbout}>{aboutMe}</p>
              </div>
            </div>
            <div className={styles.contactWrapper}>
              {contacts.facebook && <span>&bull; {contacts.facebook}</span>}
              {contacts.github && <span>&bull; {contacts.github}</span>}
              {contacts.instagram && <span>&bull; {contacts.instagram}</span>}
              {contacts.mainLink && <span>&bull; {contacts.mainLink}</span>}
              {contacts.twitter && <span>&bull; {contacts.twitter}</span>}
              {contacts.vk && <span>&bull; {contacts.vk}</span>}
              {contacts.website && <span>&bull; {contacts.website}</span>}
              {contacts.youtube && <span>&bull; {contacts.youtube}</span>}
            </div>
          </>
      }
    </>
  );
};
export default ProfileInfo;
