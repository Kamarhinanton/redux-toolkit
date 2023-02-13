import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100)
  return (
    <div>
      <div>
        {isLoading && <h1>Іде завантаження...</h1>}
        {error && <h1>Відбулась помилка</h1>}
        {/*{posts && posts.map(post =>*/}
        {/*  <PostItem key={post.id} post={post}/>*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default PostContainer2;