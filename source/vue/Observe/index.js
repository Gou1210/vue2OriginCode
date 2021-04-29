import Observe from './onserve'
export function initstate(vm){
    //做不同的初始化工作
    let opts = vm.$options
    // 开始分开处理
    if(opts.data){
        initData(vm)
    }
    if(opts.computed){
        initComputed()
    }
    if(opts.watch){
        initWatch()
    }
}
export function observe(data){
    // 判断类型
    if(typeof data !=='object'||data==null){
        return
    }
    return new Observe(data)//观察数据的业务逻辑放在这里
}
function initData(vm){
    //获取用户传入的data
   let data = vm.$options.data 
   //判断是不是函数，把数据复制给vm_data 方便观察
   data = vm._data = typeof data ==='function'?data.call(vm):data||{}
   //观察数据的函数
   observe(data)

}
function initComputed(){}
function initWatch(){}