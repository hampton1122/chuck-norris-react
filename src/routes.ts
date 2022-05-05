// pages
import About from "./pages/About";
import Jokes from "./pages/Jokes";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    isHome: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        isHome: false,
        component: About
    },
    {
        key: 'jokes-route',
        title: 'Jokes',
        path: '/jokes',
        isHome: false,
        component: Jokes
    },
    {
        key: 'jokes-route',
        title: 'Jokes',
        path: '/',
        isHome: true,
        component: Jokes
    }
]