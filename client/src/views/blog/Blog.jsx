import  { useEffect } from "react";
import { useSelector ,useDispatch } from "react-redux";
// import { setBlogData } from "../../redux/actions/actions";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";

function Blog() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
//mi codigo:
// const dispatch = useDispatch();
// const blog = useSelector(state => state.blog)

// Hacer la solicitud de datos cuando el componente se monte
// useEffect(() => {
//     dispatch(setBlogData());
// }, [dispatch]);

  return (
    <section className="container lg:mb-56">
     {/* { blog.length > 0 ? (
        
        blog.map((banner, index) => (
          <div key={index}>
            <h2>{banner.title}</h2>
            <img src={banner.image} alt={banner.title} />
            <p>{banner.description}</p>
          </div>
        ))
      ) : (
        
        <p>Cargando datos...</p>
      )} */}
    </section>
  );
}

export default Blog;
