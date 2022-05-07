import Login from "./components/Login/Login"
import Book from "./components/Books/Book"
import Dashboard from "./components/Dashboard/Dashboard"

export const STATES = [
    { name: "login", url: "/", component: Login },
    { name: "dashboard", url: "/dashboard", component: Dashboard },
    { name: "book", url: "/book/table", component: Book },
]