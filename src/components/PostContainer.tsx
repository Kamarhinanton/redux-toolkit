import React, {useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
  const [limit, setLimit] = useState(100)
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit)
  const [createPost, {}] = postAPI.useCreatePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()
  const handleCreate = async () => {
    const title = prompt();
    await createPost({title, body: title} as IPost)
  }

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <div>
        <button onClick={handleCreate}>create item</button>
        {isLoading && <h1>Іде завантаження...</h1>}
        {error && <h1>Відбулась помилка</h1>}
        {posts && posts.map(post =>
          <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
        )}
      </div>
    </div>
  );
};

export default PostContainer;