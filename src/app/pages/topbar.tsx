"use client";
import { Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const Topbar = () => {
    return (
        <div className="fixed top-0 left-0 z-50 h-16 w-full p-3 bg-white text-black flex justify-between items-center border-b shadow-sm">
            <div className="ml-4 font-extrabold font-sans text-2xl">E M A R T</div>
            <div className='flex space-x-4 pr-5'>

                <Link href="pages/wishlist">
                    <div className='flex space-x-2'>
                        <Heart />
                        <h1>WishList</h1>
                    </div>
                </Link>
                <Link href="pages/cart">
                    <div className='flex space-x-2'>
                        <ShoppingCart />
                        <h1>Cart</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Topbar;