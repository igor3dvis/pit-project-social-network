import MessagesBlock from "./MessagesBlock";
import {
  addNewMessageActionCreator,
  updateTextMessageActionCreator,
} from "../../../redux/reducerMessages";
import { connect } from "react-redux";

// const MessagesBlockContainer = (props) => {
//   //const {} = props;

//   const onAddMess = () => props.store.dispatch(addNewMessageActionCreator());

//   const onMessageChange = (text) => {
//     props.store.dispatch(updateTextMessageActionCreator(text));
//   };

//   return (
//     <>
//       <MessagesBlock
//         messagesPage={props.store.state.messagesPage}
//         addNewMessage={onAddMess}
//         updateMessage={onMessageChange}
//       />
//     </>
//   );
// };

let mapStateToProps = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
    messageTextDefault: state.messagesPage.messageTextDefault,
  };
};

let mapDistatchToProps = (dispatch) => {
  return {
    addNewMessage: () => {
      dispatch(addNewMessageActionCreator());
    },
    updateMessage: (text) => {
      dispatch(updateTextMessageActionCreator(text));
    },
  };
};

const MessagesBlockContainer = connect(
  mapStateToProps,
  mapDistatchToProps
)(MessagesBlock);

export default MessagesBlockContainer;