"use client";
import { Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import useStore from '../../../utils/useStore';

interface StoreState {
    wishlist: any[];
    cart: any[];
}

const Topbar = () => {

    const wishlist = useStore((state: StoreState) => state.wishlist);
    const cart = useStore((state: StoreState) => state.cart);

    return (
        <div className="fixed top-0 left-0 z-50 h-16 w-full p-3 bg-white text-black flex justify-between items-center border-b shadow-sm">
            <div className="ml-4 font-extrabold font-sans text-2xl">E M A R T</div>
            <div className='flex items-center space-x-4 pr-5'>
                <Link href="pages/wishlist">
                    <div>
                        <div className='flex items-center relative'>
                            {wishlist.length > 0 && (
                                <div className="bg-red-600 h-4 w-4 rounded-full absolute top-0 right-0 text-center text-xs text-white">
                                    {wishlist.length}
                                </div>
                            )}
                            <div className="ml-4 mr-1 rounded-full p-2 flex space-x-2">
                                <Heart />
                                <h1>WishList</h1>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="pages/cart">
                    <div>
                        <div className='flex items-center relative'>
                            {cart.length > 0 && (
                                <div className="bg-red-600 h-4 w-4 rounded-full absolute top-0 right-0 text-center text-xs text-white">
                                    {cart.length}
                                </div>
                            )}
                            <div className="ml-4 mr-1 rounded-full p-2 flex space-x-2">
                                <ShoppingCart />
                                <h1>Cart</h1>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Topbar;