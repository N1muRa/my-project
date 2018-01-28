# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 错误处理：

1. Module build failed: Error: Couldn't find preset "es2015" relative to directory

```
npm install babel-preset-es2015 --save-dev
```

2. vue+mysql+express环境配置(之后记得执行依赖重新安装)

```
npm install express mysql body-parser
```

3. axios (暂时不用)

## How to install:
### CommonJS:
```
npm install --save axios vue-axios
```

And in your entry file:
```
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
```

4. 开启服务端

```
node index  (server文件夹下)
```
