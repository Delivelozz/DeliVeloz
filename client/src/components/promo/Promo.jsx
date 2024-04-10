import { Link } from "react-router-dom";
import { smoothScrollToTop } from "../../functions/SmoothScroll";

export default function Promo(props) {
  const { id, name, image, description } = props;
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
          <div className="w-full h-1/2 my-1">
            <div className="w-full flex flex-col my-2 gap-4 justify-center items-center p-4">
              <h4 className="w-full truncate font-bold text-lg">{name}</h4>
              <p className="line-clamp-3 lg:line-clamp-4 text-gray-800">
                {description}
              </p>
              <Link to={"/blog"}>
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
