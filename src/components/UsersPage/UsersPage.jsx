import React from "react";
import { connect } from "react-redux";
import { followed, unfollowed, setCountUsersOnPage, setCurrentPage,
  toggleFetchInProcess, getUserThunkCreator, unfollowThunkCreator,
  followThunkCreator,
} from "../../redux/usersReducer";
import Users from "./Users";
import styles from "./UsersPage.module.css";
import { withRedirectHoc } from "../../hoc/withRedirectHoc";
import { compose } from "redux";

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.getUserThunkCreator(
      this.props.currentPage,
      this.props.countUsersOnPage
    );
  }

  handlerSetCountUsersOnPage = (e) => {
    this.props.setCountUsersOnPage(+e.target.textContent);
    this.props.getUserThunkCreator(
      this.props.currentPage,
      e.target.textContent
    );
  };

  handlerSetCurrentPage = (page) => {
    this.props.setCurrentPage(page);
    this.props.getUserThunkCreator(page, this.props.countUsersOnPage);
  };

  render() {
    let { currentPage } = this.props;
    let totalPages = Math.ceil(
      this.props.totalUsersCount / this.props.countUsersOnPage
    );

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
            <button className={styles.countPageBtn}
              onClick={this.handlerSetCountUsersOnPage}
            >10</button>
            <span> {"/"} </span>
            <button className={styles.countPageBtn}
              onClick={this.handlerSetCountUsersOnPage}
            >20</button>
            <span> {"/"} </span>
            <button className={styles.countPageBtn}
              onClick={this.handlerSetCountUsersOnPage}
            >30</button>
          </div>

          <div>
            <span
              className={
                currentPage === 1 ? styles.pageNumBtnDisabled : styles.pageNumBtn
              }
              onClick={() => {this.handlerSetCurrentPage(1)}}
            >{" "}{"<<"}{" "}</span>
            <span> ... </span>
            <span
              className={
                currentPage === 1 ? styles.pageNumBtnDisabled : styles.pageNumBtn
              }
              onClick={() => {this.handlerSetCurrentPage(currentPage - 1)}}
            >{" "}{"<"}{" "}</span>
            {pageBtns.map((page) => {
              return (
                <span
                  className={
                     page === this.props.currentPage ? styles.pageNumBtnSelect : styles.pageNumBtn
                  }
                  onClick={() => {this.handlerSetCurrentPage(page)}}
                  key={page}
                >{" "}[{page}]{" "}</span>
              );
            })}
            <span
              className={
                currentPage === totalPages ? styles.pageNumBtnDisabled : styles.pageNumBtn
              }
              onClick={() => {this.handlerSetCurrentPage(currentPage + 1)}}
            >{" "}{">"}{" "}</span>
            <span> ... </span>
            <span
              className={
                currentPage === totalPages ? styles.pageNumBtnDisabled : styles.pageNumBtn
              }
              onClick={() => {this.handlerSetCurrentPage(totalPages)}}
            >{" "}{">>"}{" "}</span>
          </div>
        </div>
        <Users
          users={this.props.users}
          followBtn={this.props.followed}
          fetchInProcess={this.props.fetchInProcess}
          toggleFetchInProcess={this.props.toggleFetchInProcess}
          unfollowThunkCreator={this.props.unfollowThunkCreator}
          followThunkCreator={this.props.followThunkCreator}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    countUsersOnPage: state.usersPage.countUsersOnPage,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    fetchInProcess: state.usersPage.fetchInProcess,
  };
};

export default compose(
  connect(mapStateToProps, {
    followed,
    unfollowed,
    setCountUsersOnPage,
    setCurrentPage,
    toggleFetchInProcess,
    getUserThunkCreator,
    unfollowThunkCreator,
    followThunkCreator,
  }),
  withRedirectHoc
)(UsersPage);
