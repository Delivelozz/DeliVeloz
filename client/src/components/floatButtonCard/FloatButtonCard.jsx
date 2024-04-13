import Cart from "../icons/Cart";
import { Link } from "react-router-dom";
import { useShoppingCartCounterItem } from "../../hooks/useShoppingCartCounterItem";
import { smoothScrollToTop } from "../../functions/SmoothScroll";

export default function FloatButtonCard() {
  const shoppingCartCounterItem = useShoppingCartCounterItem();
  return (
    <div className="relative z-50 block md:hidden">
      <Link
        to={`/carrito`}
        className="block relative"
        onClick={() => smoothScrollToTop()}
      >
        <div className="fixed bottom-10 right-14">
          <div className="bg-sundown-600 rounded-full p-2 transition hover:scale-110">
            <Cart width={26} heigth={26} color={"#fff"} />
          </div>
          <p className="cursor-pointer flex justify-center items-center bg-sundown-600 w-6 h-6 rounded-full text-white font-semibold -mr-2 -mt-2 border border-sundown-400 border-solid text-xs absolute top-0 right-0">
            {shoppingCartCounterItem}
          </p>
        </div>
      </Link>
    </div>
  );
}
