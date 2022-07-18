import React from "react";
import { connect } from "react-redux";
import { followed, unfollowed, setCountUsersOnPage, setCurrentPage,
  toggleFetchInProcess, getUserTC, unfollowTC,
  followTC,
} from "../../redux/usersReducer";
import { getUsers, getTotalUsersCount, getCountUsersOnPage,
  getCurrentPage, getIsFetching, getFetchInProcess } from '../../redux/usersSelectors'
import Users from "./Users";
import styles from "./UsersPage.module.scss";
import { withRedirectHoc } from "../../hoc/withRedirectHoc";
import { compose } from "redux";
import { useEffect } from "react";

const UsersPage = (props) => {
  useEffect (()=>{
    props.getUserTC(
      props.currentPage,
      props.countUsersOnPage
    );
  },[])

  const handlerSetCountUsersOnPage = (e) => {
    props.setCountUsersOnPage(+e.target.textContent);
    props.getUserTC(
      props.currentPage,
      e.target.textContent
    );
  };

  const handlerSetCurrentPage = (page) => {
    props.setCurrentPage(page);
    props.getUserTC(page, props.countUsersOnPage);
  };

  
  let { currentPage } = props;
  let totalPages = Math.ceil( props.totalUsersCount / props.countUsersOnPage );

  /* Note [begin] 
    This code bellow is able if there are 5 items in array (pageBtns)
            << ... < [1][2][3][4][5] > ... >> 
  */
  let pageBtns = [];
  if (currentPage <= 3) {
    for (let i = 1; i <= 5; i++) {
      pageBtns.push(i);
    }
  } else if (currentPage > 3 && currentPage <= totalPages - 3) {
    let x = currentPage - 2;
    for (let i = x; i <= x + 4; i++) {
      pageBtns.push(i);
    }
  } else if (currentPage >= totalPages - 2) {
    let x = totalPages - 4;
    for (let i = x; i <= totalPages; i++) {
      pageBtns.push(i);
    }
  }
  /* Note [end]  */

  return (
    <div>
      <div className={styles.pageControll}>
        <div>_total_pages_ : {totalPages}</div>
        <div>
          <span> _users_on_page_ : </span>
          <button className={styles.countPageBtn} onClick={handlerSetCountUsersOnPage}
          >10</button>
          <span> {"/"} </span>
          <button className={styles.countPageBtn} onClick={handlerSetCountUsersOnPage}
          >20</button>
          <span> {"/"} </span>
          <button className={styles.countPageBtn} onClick={handlerSetCountUsersOnPage}
          >30</button>
        </div>

        <div>
          <span
            className={ currentPage === 1 ? styles.pageNumBtnDisabled : styles.pageNumBtn }
            onClick={() => {handlerSetCurrentPage(1)}}
          >{" "}{"<<"}{" "}</span>
          <span> ... </span>
          <span
            className={ currentPage === 1 ? styles.pageNumBtnDisabled : styles.pageNumBtn }
            onClick={() => {handlerSetCurrentPage(currentPage - 1)}}
          >{" "}{"<"}{" "}</span>
          {pageBtns.map((page) => {
            return (
              <span
                className={ page === props.currentPage ? styles.pageNumBtnSelect : styles.pageNumBtn }
                onClick={() => {handlerSetCurrentPage(page)}}
                key={page}
              >{" "}[{page}]{" "}</span>
            );
          })}
          <span
            className={ currentPage === totalPages ? styles.pageNumBtnDisabled : styles.pageNumBtn }
            onClick={() => {handlerSetCurrentPage(currentPage + 1)}}
          >{" "}{">"}{" "}</span>
          <span> ... </span>
          <span
            className={ currentPage === totalPages ? styles.pageNumBtnDisabled : styles.pageNumBtn }
            onClick={() => {handlerSetCurrentPage(totalPages)}}
          >{" "}{">>"}{" "}</span>
        </div>
      </div>
      <Users
        users={props.users}
        followBtn={props.followed}
        fetchInProcess={props.fetchInProcess}
        toggleFetchInProcess={props.toggleFetchInProcess}
        unfollowTC={props.unfollowTC}
        followTC={props.followTC}
      />
    </div>
  );
  
}

let mapStateToProps = (state) => ({
  users: getUsers(state),
  totalUsersCount: getTotalUsersCount(state),
  countUsersOnPage: getCountUsersOnPage(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  fetchInProcess: getFetchInProcess(state),
  }
)

export default compose(
  connect(mapStateToProps, {
    followed,
    unfollowed,
    setCountUsersOnPage,
    setCurrentPage,
    toggleFetchInProcess,
    getUserTC,
    unfollowTC,
    followTC,
  }),
  withRedirectHoc
)(UsersPage);
