import React, { SyntheticEvent, useEffect } from "react";
import useStore from "../store";

export default function CreatePost() {
  const newPost = useStore((store) => store.newPost);
  const postToServer = useStore((store) => store.postToServer);

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const formData = {
       title = targetForm.title.value;
        image = targetForm.image.value;
        content = targetForm.content.value;
    };
  }

  // useEffect(() => {
  //   postToServer(formData);
  // }, [postToServer]);

  return (
    <section className="create-post-section">
      <form onClick={handleSubmit} id="create-post-form" autoComplete="off">
        <h2>Create a post</h2>
        <label htmlFor="image">Image</label>
        <input id="image" name="image" type="text" />
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={2}
          maxLength={30}
        ></textarea>
        <div className="action-btns">
          <button id="preview-btn" type="button">
            Preview
          </button>
          <button type="submit">Post</button>
        </div>
      </form>
      {/* <!-- FOR THE CHALLENGE START --> */}
      <div className="post">
        {/* <!-- Go to post.html and scroll down to the preveiw cards --> */}
      </div>
      {/* <!-- FOR THE CHALLENGE END --> */}
    </section>
  );
}
