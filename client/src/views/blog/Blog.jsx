import blog from "../../../img/imgBlog.jpg";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";

function Blog() {
  useLocalStoreUserData();

  return (
    <section className="container">
      <div className="relative h-64">
        <img
          className="absolute top-0 w-full h-full object-cover py-5"
          src={blog}
          alt="imagen de blog"
        />
      </div>

      <div className="flex flex-col py-5">
        <h1 className="py-5 text-center text-xl font-semibold pb-6">
          <span className="text-sundown-500">Blog</span> Promos
        </h1>
        <p className="text-base">
          Id consequat deserunt eu mollit sint amet velit sunt minim veniam.
          Amet cillum aliqua est sunt nulla pariatur enim ullamco aute occaecat
          sint ea enim ad. Sint ut qui cillum commodo enim nostrud ea minim duis
          labore nisi consequat non adipisicing. Proident tempor proident
          laboris mollit labore nulla excepteur fugiat fugiat laborum officia
          minim pariatur deserunt. Sunt ex mollit Lorem pariatur ipsum excepteur
          nisi incididunt mollit.
        </p>
      </div>
    </section>
  );
}

export default Blog;
