import { Link } from "react-router-dom";
import { smoothScrollToTop } from "../../functions/SmoothScroll";

export default function Promo({ id, title, image, description }) {
  //console.log("esto es una imagen", image)
  return (
    <article className=" my-10 mb-4">
      <article id={id} className="w-full relative">
        <div className="w-full bg-white rounded-lg border">
          <figure className="w-full h-56 rounded-md ">
            <img
              src={image}
              alt=""
              className="w-full h-full rounded-t-md object-cover"
            />
          </figure>
          <div className="w-full h-1/2">
            <div className="w-full flex flex-col my-2 gap-4 p-2">
              <h4 className="w-full truncate font-bold text-xl">{title}</h4>
              <p className="line-clamp-3 lg:line-clamp-4">{description}</p>
            </div>
            <div className="flex justify-center mt-4">
              <Link to={`/blog/${id}`}>
                {" "}
                {/*agregue id yo*/}
                <button
                  className="btn-bg"
                  onClick={() => {
                    smoothScrollToTop();
                  }}
                >
                  ¡Míralo aquí!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </article>
  );
}
