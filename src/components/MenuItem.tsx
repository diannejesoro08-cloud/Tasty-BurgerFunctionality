import type { MenuItemProps } from "../types";
import { useGlobalContext } from "../context/store";

interface MenuItemComponentProps extends MenuItemProps {
  addToCart: (item: MenuItemProps) => void;
}

function MenuItem({ id, name, image, price, addToCart }: MenuItemComponentProps) {
  const { favorites, toggleFavorite } = useGlobalContext();
  const favorite = favorites.includes(id);
  return (
    <div className="group">
      <div className="flex flex-col items-center relative">
        <button type="button" onClick={() => toggleFavorite(id)} aria-label={favorite ? `Remove ${name} from favorites` : `Add ${name} to favorites`} className="absolute right-2 top-0 z-10 p-2 text-white transition-colors hover:text-yellow-400">
          <svg className="w-7 h-7" aria-hidden="true" fill={favorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.598 1.126-4.312 2.733C11.598 4.876 9.935 3.75 8 3.75 5.411 3.75 3.312 5.765 3.312 8.25c0 7.22 8.688 12 8.688 12s8.688-4.78 8.688-12z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <img src={image} alt={name} className="w-64 transition-transform group-hover:translate-y-4 duration-300" />
        <p className="text-white uppercase text-xs lg:text-base">{name}</p>
        <p className="text-gray-400 text-xs lg:text-base">₱{price.toFixed(2)}</p>
        <button type="button" onClick={() => addToCart({ id, name, image, price })} className="border border-gray-600 text-white px-8 py-2 mt-4 transition-colors hover:bg-white hover:text-black text-sm whitespace-nowrap">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
export default MenuItem;
