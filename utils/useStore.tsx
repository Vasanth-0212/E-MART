import { create } from 'zustand';

interface StoreState {
    wishlist : any[];
    cart : any[];
    addWishlist : (item : any) => void;
    removeWishlist : (item : any) => void;
    addCart : (item : any) => void;
    removeCart : (item : any) => void;
}

const useStore = create<StoreState>((set) => ({
    wishlist: [],
    cart: [],
    addWishlist: (item : any) => set((state) => ({ wishlist: [...state.wishlist, item] })),
    removeWishlist: (item : any) => set((state) => ({ wishlist: state.wishlist.filter((i) => i !== item) })),
    addCart: (item : any) => set((state) => ({ cart: [...state.cart, item] })),
    removeCart: (item : any) => set((state) => ({ cart: state.cart.filter((i) => i !== item) })),
}));


export default useStore;