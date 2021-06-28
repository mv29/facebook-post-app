import React, { useState, useEffect } from 'react';
import { Posts } from "../data"
import Post from '../components/Post';
import NewPost from '../components/NewPost';
import Button from 'react-bootstrap/Button';
import { generatedId } from "../commonHelpers";

// for comment and like i have to find that post from the list and update likes or comments
export default function PostList(props) {
  const { currentUser } = props;
  const [postList, setPostList] = useState(Posts);
  const [emotionsList, setEmotionsList] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const postList = JSON.parse(localStorage.getItem("posts"));
    const storedCommentsList = JSON.parse(localStorage.getItem("commentsList"));
    postList && setPostList(postList);
    storedCommentsList && setCommentsList(storedCommentsList);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(postList));
  }, [postList]);

  useEffect(() => {
    localStorage.setItem("commentsList", JSON.stringify(commentsList));
  }, [commentsList]);

  // const postLiked = (postId) => {
  //   // TODO user should not like a post which he previously liked
  //   // if(emotions?.userId === currentUser.id) {
  //   //   alert("you have already liked the post");
  //   //   return;
  //   // }
  //   const newEmotionId = generatedId();
  //   setEmotionsList((prevEmotions) => {
  //     return [
  //       ...prevEmotions,
  //       {
  //         userId: currentUser.id,
  //         postId: postId,
  //         type: "like",
  //         id: newEmotionId,
  //         CommentId: null,
  //         createdAt: new Date().toString(),
  //       }
  //     ]
  //   })
  //   const newPosts = postList.filter((post) => post.id !== postId)
  //   const prevPost = postList.filter((post) => post.id === postId)
  //   setPostList([
  //     ...newPosts,
  //     {
  //       id: prevPost.id,
  //       Title: prevPost.title,
  //       content: prevPost.content,
  //       currentUserId: prevPost.currentUser,
  //       emotions: prevPost.emotions ? prevPost.emotions.concat(newEmotionId) : [newEmotionId],
  //       comments: prevPost.comments,
  //       createdAt: prevPost.createdAt,
  //     }
  //   ])
  // }

  const postCommented = (postId, commentContent) => {
    const newCommentId = generatedId();
    setCommentsList((prevComments) => {
      return [
        ...prevComments,
        {
          userId: currentUser.id,
          userName: currentUser.name,
          postId: postId,
          content: commentContent.comment,
          id: newCommentId,
          CommentId: [],
          createdAt: new Date().toString(),
        },
      ]
    });

    setPostList((prevPosts) => {
      const unSelectedPosts = prevPosts.filter((post) => post.id !== postId)
      const newPost = prevPosts.filter((post) => post.id === postId)[0]
      const newPosts = [
        ...unSelectedPosts,
        {
          id: newPost.id,
          Title: newPost.Title,
          content: newPost.content,
          currentUserId: newPost.currentUserId,
          emotions: newPost.emotions,
          comments: newPost.comments ? newPost.comments.concat(newCommentId) : [newCommentId],
          createdAt: newPost.createdAt,
        },
      ]
      newPosts.sort((post1, post2) => post1.createdAt > post2.createdAt ? 1 : -1);
      if(newPost) {
        return newPosts;
      }
      return prevPosts;
    });
  };

  return (
    <>
      <Button className="m-2" variant="primary" onClick={handleShow}>
        Create New Post
      </Button>
      <hr />
      <NewPost setPostList={setPostList} currentUser={currentUser} show={show} handleClose={handleClose} handleShow={handleShow} />
      <div
        className="align-middle"
        style={{ "overflow-y": "scroll", "text-align": "center" }}>
        {postList.map(post => {
          return <Post {...post} key={post.id} setPostList={setPostList} postCommented={postCommented} commentsList={commentsList}/>
        })}
      </div>
    </>
  )
};