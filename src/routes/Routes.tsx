import Layout from "../Layout/Layout";
import ProductPage from "../Sectoins/Product-page-list";


export const routes ={

    shop : {
        path : "/",
        Component : Layout,
        children:[
            {
                path:"",
                Component: ProductPage
            }
        ]
    }
}