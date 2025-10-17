import axios from "axios"
import {create} from "zustand"

interface product {
    title : string
    id : number
    price : number
    image: string
}

interface productStore {
    searchValue:string
    products : product[] ;
    loading : boolean;
    error :string | null;
    fetchProducts: () => Promise<void> ;
    setSearchValue: (val:string) => void
    
}

export const useProductStore = create<productStore>((set) => ({
    products : [] ,
    loading : false , 
    error : null,
    searchValue:"",
    fetchProducts : async () => {
        set({loading:true, error : null})
        try{
            const res = await axios.get("https://fakestoreapi.com/products");
            set({products:res.data ,loading : false})
        }catch(err : any) {
            set({error:err.message || "failed to fetch" , loading:false});
        }
    },
    setSearchValue:(val:string) => set({searchValue : val})
}))