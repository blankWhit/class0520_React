import Home from "@comps/home";
import Category from "@conts/category";
import Product from "@conts/product";

const routes = [
    {
        path:"/",
        exact:true,
        component:Home
    },
    {
        path:"/category",
        exact:true,
        component:Category
    },
    {
        path:"/product",
        exact:true,
        component:Product
    },

]

export default routes;