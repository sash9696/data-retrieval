import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function PostRequestHooks() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "type here anything",
      }),
    };

    fetch("https://reqres.in/api/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <h5>Post Request with react hooks</h5>
      <div>Returned Id: {post?.id} </div>
      <h3> title: {post?.title} </h3>
    </div>
  );
}

export default PostRequestHooks;
