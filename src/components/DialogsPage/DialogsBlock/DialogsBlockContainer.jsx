import DialogsBlock from "./DialogsBlock";
import { connect } from "react-redux";

// const DialogsBlockContainer = (props) => {
//   //const { } = props;

//   return (
//     <>
//       <DialogsBlock messagesPage={props.store.state.messagesPage}/>
//     </>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
  };
};

const DialogsBlockContainer = connect(mapStateToProps)(DialogsBlock);
export default DialogsBlockContainer;
