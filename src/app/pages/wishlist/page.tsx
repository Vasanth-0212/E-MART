"use client";
import Image from "next/image";
import useStore from "../../../../utils/useStore";
import Link from "next/link";
import { use, useEffect } from "react";
import { useToast } from "@/hooks/use-toast"


interface StoreState {
    wishlist: any[];
    cart: any[];
    addWishlist: (item: any) => void;
    removeWishlist: (item: any) => void;
    addCart: (item: any) => void;
    removeCart: (item: any) => void;
}

const WishList = () => {

    const wishlist = useStore((state: StoreState) => state.wishlist);
    const setWishlist = useStore((state: StoreState) => state.removeWishlist);
    const cart = useStore((state: StoreState) => state.cart);
    const setCart = useStore((state: StoreState) => state.addCart);

    useEffect(() => {console.log(cart)},[setCart])

    const { toast } = useToast();

    return (
        <div className="flex flex-col items-center h-full space-y-10 bg-gray-300">
            <div className="flex h-20 w-full bg-white items-center justify-center shadow-md">
                <Link href="/">
                    <button className="absolute top-2 left-2 m-4 h-8 w-32 rounded-md text-white bg-black">Back to home</button>
                </Link>
                <h1 className="text-5xl pb-3 font-serif text-red-500 font-extrabold mt-5">Y O U R <span className="ml-3">W I S H L I S T</span></h1>
            </div>
            <div>
                <div className="grid grid-cols-4 gap-4 p-5">
                    {wishlist.map((item: any) => (
                        <div key={item.id} className="flex flex-col items-center shadow-xl bg-white rounded-lg space-y-2 overflow-hidden p-4">
                            <div className="w-36 h-36 bg-gray-100 flex justify-center items-center rounded-lg overflow-hidden shadow-md mb-2">
                                <Image src={item.image} alt={item.title} width={144} height={144} />
                            </div>
                            <div className="flex space-x-2">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                    onClick={() => setCart(item)}
                                >Add to Cart</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                    onClick={() => setWishlist(item)}
                                >Remove</button>
                            </div>
                            <div className="p-2 text-center">
                                <h2 className="text-sm font-bold">{item.title}</h2>
                                <p className="text-xs text-gray-600">{`$${item.price.toFixed(2)}`}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WishList;