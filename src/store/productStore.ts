import axios from "axios"
import {create} from "zustand"

interface product {
    title : string
    id : number
    price : number
    image: string
}

interface productStore {
    products : product[] ;
    loading : boolean;
    error :string | null;
    fetchProducts: () => Promise<void> 
}

export const useProductStore = create<productStore>((set) => ({
    products : [] ,
    loading : false , 
    error : null,
    fetchProducts : async () => {
        set({loading:true, error : null})
        try{
            const res = await axios.get("https://fakestoreapi.com/products");
            set({products:res.data ,loading : false})
        }catch(err : any) {
            set({error:err.message || "failed to fetch" , loading:false});
        }
    }
}))