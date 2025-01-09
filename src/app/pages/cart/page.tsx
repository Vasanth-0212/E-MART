"use client";
import Link from "next/link";
import useStore from "../../../../utils/useStore";

interface StoreState {
    wishlist: any[];
    cart: any[];
    addWishlist: (item: any) => void;
    removeWishlist: (item: any) => void;
    addCart: (item: any) => void;
    removeCart: (item: any) => void;
}

const Cart = () => {

    const cartItems = useStore((state: StoreState) => state.cart);
    const setCart = useStore((state: StoreState) => state.addCart);


    return (
        <div className="flex flex-col items-center h-full space-y-10 bg-gray-300">
            <div className="flex h-20 w-full bg-white items-center justify-center shadow-md">
                <Link href="/">
                    <button className="absolute top-2 left-2 m-4 h-8 w-32 rounded-md text-white bg-black">Back to home</button>
                </Link>
                <h1 className="text-5xl pb-3 font-serif text-red-500 font-extrabold mt-5">Y O U R <span className="ml-3">C A R T</span></h1>
            </div>

            {cartItems.length > 0 && (
                <div className="flex flex-col items-center justify-center">
                    {cartItems.map((item: any) => (
                        <div key={item.id} className="h-[300px] w-[600px] max-w-lg bg-white shadow-xl mb-6 rounded-md p-3 overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-64 w-full md:w-1/3 object-cover rounded-t-md md:rounded-l-md"
                                />
                                <div className="flex flex-col justify-between p-6 w-full md:w-2/3">
                                    <h2 className="text-2xl font-semibold text-gray-800 truncate">{item.title}</h2>
                                    <p className="text-xl text-gray-700 mt-2">${item.price}</p>
                                    <p className="text-yellow-500 mt-2">Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
                                    <p className="text-gray-600 text-sm mt-2 h-16 overflow-hidden">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Cart;