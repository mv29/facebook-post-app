// User: Name, Email , Id
// Post: Array[Content, UserId,Array[Emotions], Array[commentId], DateTime]
// Comment: Array[Content, UserId, Array[Emotions], PostId, Array[CommentId],DateTime] 
// Emotion: Array[UserId, CommentId, PostId, Type, DateTime, id]
import {generatedId} from "./commonHelpers";

export const Users = [
  {
    name: "Mrinal Verma",
    Email: "mv@gmail.com",
    id: generatedId(),
  },
  {
    name: "mv1",
    Email: "mv1@gmail.com",
    id: generatedId(),
  },
  {
    name: "mv2",
    Email: "mv2@gmail.com",
    id: generatedId(),
  }
];

export const Posts = [
  {
    id: generatedId(),
    Title: "POST1",
    content: "first Post",
    userId: Users[0].id,
    emotions: [],
    comments: [],
    createdAt: new Date().toString(),
  },
  {
    id: generatedId(),
    Title: "POST2",
    content: "Second Post",
    userId: Users[1].id,
    emotions: [],
    comments: [],
    createdAt: new Date().toString(),
  },
  {
    id: generatedId(),
    Title: "POST3",
    content: "third Post",
    userId: Users[0].id,
    emotions: [],
    comments: [],
    createdAt: new Date().toString(),
  },
  {
    id: generatedId(),
    Title: "POST4",
    content: "Fouth Post",
    userId: Users[1].id,
    emotions: [],
    comments: [],
    createdAt: new Date().toString(),
  }
]