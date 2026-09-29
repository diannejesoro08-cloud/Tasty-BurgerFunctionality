import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useGlobalContext } from "../context/store";

function CartPage() {
  const { cart, updateCart } = useGlobalContext();
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setSubtotal(cart.reduce((total, item) => total + (item.quantity * item.price || 0), 0));
  }, [cart]);

  const onIncreaseQuantity = (id: number) => {
    updateCart(cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const onDecreaseQuantity = (id: number) => {
    const item = cart.find((entry) => entry.id === id);
    if (!item) return;
    if (item.quantity <= 1) updateCart(cart.filter((entry) => entry.id !== id));
    else updateCart(cart.map((entry) => entry.id === id ? { ...entry, quantity: entry.quantity - 1 } : entry));
  };

  return (
    <div className="px-4 pt-36 lg:px-24 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 bg-gray-500/5 rounded-lg backdrop-filter backdrop-blur-lg">
          <div className="border-b border-gray-600 py-4 px-4"><h2 className="text-white text-xl">Contact Info</h2></div>
          <div className="px-4 py-4"><div className="flex flex-col"><label className="text-gray-100">Full Name: *</label><input type="text" placeholder="Your Full Name" className="bg-transparent border border-gray-500 text-white mt-1" /></div></div>
          <div className="px-4 py-4"><div className="flex flex-col"><label className="text-gray-100">Phone Number: *</label><input type="text" placeholder="Your Phone Number" className="bg-transparent border border-gray-500 text-white mt-1" /></div></div>
          <div className="px-4 py-4"><div className="flex flex-col"><label className="text-gray-100">Address: *</label><input type="text" placeholder="Your Address" className="bg-transparent border border-gray-500 text-white mt-1" /></div></div>
        </div>
        <div className="w-full lg:w-1/2 bg-gray-500/5 rounded-lg backdrop-filter backdrop-blur-lg">
          <div className="border-b border-gray-600 py-4 px-4"><h2 className="text-white text-xl">Order Summary</h2></div>
          <div className="px-4 py-4 flex flex-col gap-4 border-b border-gray-600">{cart.map((item) => <CartItem key={item.id} {...item} increaseQuantity={onIncreaseQuantity} decreaseQuantity={onDecreaseQuantity} />)}</div>
          <div className="px-4 py-6 flex flex-col">
            <div className="flex flex-row justify-between text-white"><span>Subtotal:</span><span className="font-semibold">₱ {subtotal.toFixed(2)}</span></div>
            <button type="button" className="w-full rounded-full py-2 font-bold text-lg bg-yellow-400 text-black mt-10 transition-transform hover:scale-105 shadow-lg shadow-yellow-800">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
