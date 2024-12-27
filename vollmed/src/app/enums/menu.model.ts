import { IMenu } from "../interfaces/imenu";

export const menuItems: IMenu[] = [
    {
        index: 0,
        title: 'Home',
        url: '/',
        icon: 'home',
        active: true,
        description: 'Home page'
    },
    {
        index: 1,
        title: 'About',
        url: '/about',
        icon: 'info',
        active: false,
        description: 'About page'
    },
    {
        index: 2,
        title: 'Contact',
        url: '/contact',
        icon: 'mail',
        active: false,
        description: 'Contact page'
    }
]