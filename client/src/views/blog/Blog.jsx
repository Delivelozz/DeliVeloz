import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setBlogId } from "../../redux/actions/actions.js";

import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";

function Blog() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();

  //mi codigo:
  const { id } = useParams();
  const blog = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  //traer la accion

  useEffect(() => {
    dispatch(setBlogId(id));
  }, [dispatch, id]);

  return (
    <section className="container lg:mb-56">
      <div className="relative h-64">
        <img
          className="absolute top-0 w-full h-full object-cover py-5"
          src={blog?.image?.jpg}
          alt={blog?.title}
        />
      </div>
      <div className="flex flex-col py-5">
        <h1 className="py-5 text-center text-xl font-semibold pb-6">
          {blog?.title}
        </h1>
        <p className="text-base">{blog?.description}</p>
      </div>
    </section>
  );
}

export default Blog;
