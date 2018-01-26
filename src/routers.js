import Home from './view/home'
import Hello from './components/helloWorld'
import MineOrder from './components/order'
import Avue from './components/A'
import Bvue from './components/B'

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
        path: 'avue',
        component: Avue
      },
      {
        path: 'bvue',
        component: Bvue
      }
    ]
  }
]
export default routers
