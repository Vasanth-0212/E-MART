
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import useStore from "../../../utils/useStore";
import { toast, Toaster } from "sonner"


interface StoreState {
  wishlist: any[];
  cart: any[];
  addWishlist: (item: any) => void;
  removeWishlist: (item: any) => void;
  addCart: (item: any) => void;
  removeCart: (item: any) => void;
}

const Items = () => {

  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const wishlist = useStore((state: StoreState) => state.wishlist);
  const cart = useStore((state: StoreState) => state.cart);
  const setWishlist = useStore((state: StoreState) => state.addWishlist);
  const setCart = useStore((state: StoreState) => state.addCart);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json);
        setLoading(false);
      })
  }, [])

  useEffect(() => { console.log(data) }, [data])


  return (
    <div>
      <div className="grid grid-cols-3 gap-10 bg-gray-200 p-10">

        {data.map((item: any) => (
          <div key={item.id} className="flex flex-col items-center shadow-xl bg-white rounded-lg space-y-2 overflow-hidden p-4">
            <div className="w-36 h-36 bg-gray-100 flex justify-center items-center rounded-lg overflow-hidden shadow-md mb-2">
              <Image src={item.image} alt={item.title} width={144} height={144} />
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => {
                  const exists = cart.find((alreadyAddedItem: any) => alreadyAddedItem.id === item.id);
                  if (exists) {
                    toast.error(`${item.title} \n is already in your cart.`)
                    return;
                  }
                  else {
                    setCart(item);
                    toast.success(`${item.title} \n has been added to your cart.`)
                  }
                }}
              >Add to Cart</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => {
                  const exists = wishlist.find((alreadyAddedItem: any) => alreadyAddedItem.id === item.id);
                  if (exists) {
                    toast.error(`${item.title} \n is already in your wishlist.`);
                    return;
                  }
                  else{
                    setWishlist(item);
                    toast.success(`${item.title} \n has been added to your wishlist.`);
                  }
                }}
              >
                Add to Wishlist
              </button>
            </div>
            <div className="p-2 text-center">
              <h2 className="text-sm font-bold">{item.title}</h2>
              <p className="text-xs text-gray-600">{`$${item.price.toFixed(2)}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;