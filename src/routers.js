import Home from './view/home'
import Hello from './components/Table'
import MineOrder from './view/order'
import User from './view/User'
import Bvue from './components/B'
import news from './view/news'
import detail from './view/detail'
import Echart from './view/echart'
import Candlestick from './view/Candlestick'

const routers = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: news
      },
      {
        path: 'hello',
        component: Hello
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
      },
      {
        path: 'order',
        component: MineOrder
      },
      {
        path: 'echart',
        component: Echart
      },
      {
        path: 'candlestick',
        component: Candlestick
      }
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  }
]
export default routers
