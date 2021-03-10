import Home from '../pages/home'
import Write from '../pages/write'
import Article from '../pages/article'


import { HomeOutlined, AppstoreOutlined, BulbOutlined } from '@ant-design/icons'


export const routes = [
    {
        path: '/home',
        title: 'Home',
        icon: HomeOutlined,
        component: Home
    },
    {
        path: '/write',
        title: 'Write',
        icon: BulbOutlined,
        component: Write
    },
    {
        path: '/article',
        title: 'Article',
        icon: AppstoreOutlined,
        component: Article
    }
]
export const menus = filterRoutes(routes)

function filterRoutes(routes) {
    const menus = []
    routes.forEach(route => {
        menus.push({
            path: route.path,
            title: route.title,
            icon: route.icon
        })
    })
    return menus
}

