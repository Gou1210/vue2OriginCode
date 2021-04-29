import {initstate} from './Observe'
function Vue(options){//vue中传入参数
// 初始化用户传入选项
 this._init(options)
}
Vue.prototype._init = function(options){
    let vm = this//在new时,实例对象的this指向会通过apply指向它的构造函数，所以此时this指向vue函数
    vm.$options = options//这个构造函数有一个$options,代表接收传递过来的参数(vm.$options是个对象)
    // 重新初始化状态，将data，watch和computed重新初始化
    initstate(vm)//

}
export default Vue