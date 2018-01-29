import Home from './view/home'
import Hello from './components/helloWorld'
import MineOrder from './components/order'
import User from './components/User'
import Bvue from './components/B'
import news from './components/news'

const routers = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: Hello
      },
      {
        path: 'order',
        component: MineOrder
      },
      {
        path: 'user',
        component: User
      },
      {
        path: 'bvue',
        component: Bvue
      },
      {
        path: 'news',
        component: news
      }
    ]
  }
]
export default routers
