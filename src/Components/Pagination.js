import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicTable from "./PaginationTable";

export const Pagination = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const getPosts = async () => {
    setLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((res) => setPosts(res));

    setLoading(false);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  console.log(indexOfFirstPost, indexOfLastPost);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //   console.log(posts);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Button variant="contained" onClick={getPosts} style={{ margin: "10px" }}>
        Search
      </Button>
      <BasicTable
        posts={currentPosts}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};
