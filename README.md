# ele-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## TODOLIST
* vue2.0page    √
* vue-ui (muse-ui)    √
* vue + vue-ui   √
* vue + vuex √
* vue + vuex + vue-ui
* vue-rout √
* vue+vuex+vue-rout √
* vue +vuex + vue-rout + vueui
* webpack √
* webpack all

## dataiy
 * 2016/11/17
   * 第一篇笔记
   	 * 本来已经写好了所有的vue + vuex + vue-rout ，然后开始去寻找好的vueui组件，中间采用了mintui（element的），vux（仿照微信的），不过这些最大的问题都是在method里面带入了参数this，感觉像是dom操作，然后在尝试了差不多一周左右的事件后，感觉这种思路时错误的，这跟vue的思想是不一样的，中间由询问过他们的制作者，得到的回复时自己带入this=-=这就尴尬了啊。。这就得吧基本所有的方法都改写一下，而且感觉这个this的环境作用于会很蛋疼。所以我在两天前去写react了=-=不过在写react的过程中发现了很好看的一个ui material-ui 然后看了写method立马就感觉这个才是vue的精髓，然后用了20分钟撸了这个小demo，中间一共写了大概20多个commit，总共20来个小demo吧，只有这个感觉写起来思路都没断过，不过中间也有不足，mounted里面还是用了dom操作，准备加入muse团队讨论下，为啥会改这个;end