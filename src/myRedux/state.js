let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, text: "Hello, Word" },
        { id: 2, text: "Post #2 alredy here!!!" },
      ],
      postTextDefault: "text new post ...",
    },

    messagesPage: {
      dialogsData: [
        { id: "1", name: "Oxana" },
        { id: "2", name: "Ivan" },
        { id: "3", name: "Patric" },
        { id: "4", name: "Rita" },
      ],
      messagesData: [
        { messageText: "How are You?" },
        { messageText: "Hello, I am fine. Are You?" },
        { messageText: "Ababahalamaga" },
        { messageText: " I felt happy for I had passed exam!" },
      ],
      messageTextDefault: "enter some text ...",
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber  ()  {
    console.log("REREDNDER");
  },

  addNewPost() {
    let newPost = { id: 6, text: this._state.profilePage.postTextDefault };

    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.postTextDefault = "";
    this._callSubscriber(this._state);
  },

  updateTextPost(newText) {
    this._state.profilePage.postTextDefault = newText;
    this._callSubscriber(this._state);
  },

  addNewMessage() {
    let newMessage = {
      messageText: this._state.messagesPage.messageTextDefault,
    };

    this._state.messagesPage.messagesData.push(newMessage);
    this._state.messagesPage.messageTextDefault = "";
    this._callSubscriber(this._state);
  },

  updateTextMessage(newText) {
    this._state.messagesPage.messageTextDefault = newText;
    this._callSubscriber(this._state);
  },

  subscride(observer) {
    this._callSubscriber = observer;
  },
};



export default store;

/*
let state = {
  profilePage: {
    postsData: [
      { id: 1, text: "Hello, Word" },
      { id: 2, text: "Post #2 alredy here!!!" },
    ],
    postTextDefault: "text new post ...",
  },

  messagesPage: {
    dialogsData: [
      { id: "1", name: "Oxana" },
      { id: "2", name: "Ivan" },
      { id: "3", name: "Patric" },
      { id: "4", name: "Rita" },
    ],
    messagesData: [
      { messageText: "How are You?" },
      { messageText: "Hello, I am fine. Are You?" },
      { messageText: "Ababahalamaga" },
      { messageText: " I felt happy for I had passed exam!" },
    ],
    messageTextDefault: "enter some text ...",
  },
  
};

export const addNewPost = () => {
  let newPost = { id: 6, text: state.profilePage.postTextDefault };

  state.profilePage.postsData.push(newPost);
  state.profilePage.postTextDefault = "";
  reRender(state);
};

export const updateTextPost = (newText) => {
  state.profilePage.postTextDefault = newText;
  reRender(state);
};

export const addNewMessage = () => {
  let newMessage = {
    messageText: state.messagesPage.messageTextDefault,
  };

  state.messagesPage.messagesData.push(newMessage);
  state.messagesPage.messageTextDefault = "";
  reRender(state);
};

export const updateTextMessage = (newText) => {
  state.messagesPage.messageTextDefault = newText;
  reRender(state);
};

export const subscride = (observer) => {
  reRender = observer;
};
*/
