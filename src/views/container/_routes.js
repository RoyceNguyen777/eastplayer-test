import Country from "../pages/Country"
import Home from "../pages/Home"
import Img from "../pages/Img"
import Todolist from "../pages/Todolist"

const routerPath = {
    home: "/",
    todolist: "/todolist",
    country: "/country",
    image: "/image"
}
const routes = [
    {
        name: "Home",
        path: routerPath.home,
        component: Home,
        exact: true
    },
    {
        name: "Todolist",
        path: routerPath.todolist,
        component: Todolist,
    },
    {
        name: "Country",
        path: routerPath.country,
        component: Country,
    },
    {
        name: "Image",
        path: routerPath.image,
        component: Img,
    }
]
export default routes