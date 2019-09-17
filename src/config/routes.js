import Home from "@comps/home";
import Category from "@comps/category";

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