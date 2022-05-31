// import { profileReducer } from "./reducerProfile";
// import { messagesReducer } from "./reducerMessages";

// let store = {
//   _state: {
//     profilePage: {
//       postsData: [
//         { id: 1, text: "Hello, Word" },
//         { id: 2, text: "Post #2 alredy here!!!" },
//       ],
//       postTextDefault: "text new post ...",
//     },

//     messagesPage: {
//       dialogsData: [
//         { id: "1", name: "Oxana" },
//         { id: "2", name: "Ivan" },
//         { id: "3", name: "Patric" },
//         { id: "4", name: "Rita" },
//       ],
//       messagesData: [
//         { messageText: "How are You?" },
//         { messageText: "Hello, I am fine. Are You?" },
//         { messageText: "Ababahalamaga" },
//         { messageText: " I felt happy for I had passed exam!" },
//       ],
//       messageTextDefault: "enter some text ...",
//     },
//   },

//   getState() {
//     return this._state;
//   },

//   _callSubscriber() {
//     console.log("REREDNDER");
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

//     this._callSubscriber(this._state);
//   },

//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
// };

// export default store;