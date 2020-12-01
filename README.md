This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## 创建项目及启动

```
npx create-react-app demo-name
cd demo-name
yarn start
```

## 使用第三方插件

```
yarn add antd
```

## 配置按需加载

1. yarn add react-app-rewired customize-cra babel-plugin-import
2. 根目录创建 config-overrides.js

```
const {override, fixBabelImports} = require('customize-cra');
module.exports = override(
    fixBabelImports("import", {
        libraryName:"antd",
        libraryDirectory:"es",
        style:"css"
    })
)
```

3. 修改 package.json

```
"scripts":{
    "start":"react-app-rewired start",
    "build":"react-app-rewired build",
    "test":"react-app-rewired test",
    "eject":"react-app-rewired eject"
}
```

## 自定义主题

> 借助 less 变量覆盖功能(yarn add less less-loader)，引入 customize-cra 中提供的 addLessLoader 帮助加载 less 样式，同时修改 config-overrides.js 文件

```
const { override, fixBabelImports, addLessLoader } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  <!-- 将addLessLoader的配置选项现在将嵌套在一个lessOptions对象中 -->
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "pink" },
    },
  })
);

```

## 装饰器

```
yarn add @babel/plugin-proposal-decorators
```

> 更新 config-overrides.js 文件

```
const {addDecoratorsLegacy} = require("customize-cra")

module.exports=override(
  ...,
  addDecoratorsLegacy() // 配置装饰器
  )
```

## redux

```
yarn add redux
```

### redux 使用

```
// src/store/index.js
import {createStore} from 'redux';
const counterReducer = (state=0,action) => {
    switch(action.type) {
        case 'add':
            return state + 1;
        case 'minus':
            return state - 1;
        default:
            return state;
    }
}
const store = createStore(counterReducer)
export default store;

// ReduxPage.js
import React, { Component } from 'react'
import store from '../store';

export default class ReduxPage extends Component{
    render(){
        return (
            <div>
                <p>{store.getState()}</p>
                <div>
                    <button onClick={() =>store.dispatch({type:'add'})}>+</button>
                    <button onClick={() =>store.dispatch({type:'minus'})}>-</button>
                </div>
            </div>
        )
    }
}
// index.js 订阅状态变更
import store from './store';
const render = () => {
    ReactDOM.render(
        <App />,document.querySelector('#root')
    )
}
render()
store.subscribe(render)
```

## react-redux

> Provider 为后代组件提供 store；connect 为组件提供数据和变更方法

```
yarn add react-redux
```

### react-redux 使用

```
// 全局提供store，index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'

import {Provider} from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <App />,document.querySelector('#root')
    </Provider>
)

// ReduxTest.js
import {connect} from 'react-redux';
@connect(
    state => ({num:state}),
    {
        add:()=>({type:'add'}),
        minus:()=>({type:'minus'}),
    }
)
class ReduxTest extends Component{
    render(){
        return (
            <div>
                <p>{this.props.num}</p>
                <div>
                    <button onClick={this.props.add}>+</button>
                    <button onClick={this.props.minus}>-</button>
                </div>
            </div>
        )
    }
}
```

## 应用中间件实现异步及日志记录等 redux-thunk redux-logger

## redux-thunk

```
yarn add redux-thunk redux-logger
```

## redux-thunk 使用

```
// store.js
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const store=createStore(fruitReducer,applyMiddleware(logger,thunk));

// ReduxTest.js
@connect(
    state => ({num:state}),
    {
        asyncAdd:() => dispatch => {
            setTimeout(()=>{
                dispatch({type:'add'})
            },1000)
        }
    }
)
```

## 代码抽离 抽离 reducer 和 action

> store/counterReducer.js

```
export const counterReducer = (state, action) => {};
```

> action/index.js

```
export const add = num => ({type:'add', payload:num})
export const minus = num => ({type:'minus', payload:num})

export const asyncAdd = num => dispatch => {}
```

## 模块化

```
// store/index.js
import {combineReducers} from 'redux';
const store = createStore(
  combineReducers({counter:counterReducer}),
  applyMiddleware(logger,thunk)
)

//ReduxTest.js
@connect(
  state => ({num:state.conter}),
  {add,minus,asyncAdd}
)
```

## react-router

```
yarn add react-router-dom
```
