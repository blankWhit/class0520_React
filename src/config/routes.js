import Home from "@comps/home";
import Category from "@conts/category";

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

]

export default routes;