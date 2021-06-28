import React, { useState } from 'react';
import { Posts } from "../data"
import Post from '../components/Post';
import NewPost from '../components/NewPost';

// for comment and like i have to find that post from the list and update likes or comments
export default function PostList(props) {
  const { user } = props;
  const [postList, setPostList] = useState(Posts);
  return (
    <>
      <div className={"PostContainer"} style={{ "overflow-y": "scroll" }}>
        {postList.map(post => {
          return <Post {...post} key={post.id} />
        })}
      </div>
      <NewPost setPostList={setPostList}/>
    </>
  )
};