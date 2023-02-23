const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "John Doe",
        email: "john@gmail.com",
      },
      {
        name: "Jobayer",
        email: "jobayer@gmail.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "John Doe",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@gmail.com",
      },
      {
        name: "Jobayer",
        email: "jobayer@gmail.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Tahmina",
        email: "tahmina@gmail.com",
      },
      {
        name: "Jobayer",
        email: "jobayer@gmail.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Tahmina",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "jon@gmail.com",
      },
      {
        name: "Jobayer",
        email: "jobayer@gmail.com",
      },
      {
        name: "Guest User",
        email: "guest@gmail.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@gmail.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Jane Doe",
        email: "jane@gmail.com",
      },
      {
        name: "Jobayer",
        email: "jobayer@gmail.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Jane Doe",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "jon@gmail.com",
      },
      {
        name: "Jobayer",
        email: "jobayer@gmail.com",
      },
      {
        name: "Guest User",
        email: "guest@gmail.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@gmail.com",
    },
  },
];

module.exports = chats;
