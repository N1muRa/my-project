import Home from './view/home'
import Hello from './components/helloWorld'

const routers = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: Hello
      }
    ]
  }
]
export default routers
