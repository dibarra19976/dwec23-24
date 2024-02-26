import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Inicio = () => {
  
  //   const handleEliminarBlog = (id) => {
  //     const nuevoBlog = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(nuevoBlog);
  //   };

  const {publicaciones : blogs, cargando, error} =   useFetch("http://localhost:8000/blogs");


  return (
    <div className="home">
      {cargando && <div>Cargando...</div>}
      {error && <div>{error}</div>}
      {blogs && (<BlogList blogs={blogs} titulo="Listado de Blogs" /* handleEliminarBlog {handleEliminarBlog} *//>
      )}
      {/* <BlogList blogs = {blogs.filter(blog => blog.autor === "Dani")} titulo = "Blogs de Dani" /> */}
    </div>
  );
};

export default Inicio;

// useEffect
