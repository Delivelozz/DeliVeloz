// import  { useEffect } from "react";
// import { useSelector ,useDispatch } from "react-redux";

import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";

function Blog() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();


  return (
    <section className="container lg:mb-56">
    
    </section>
  );
}

export default Blog;
