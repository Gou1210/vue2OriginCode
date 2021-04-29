import {observe} from './index'
class Observe {
    constructor(data){//这个data就是vue里面的定义的data
        // 将用户的数据使用defineproperty定义
        this.walk(data)
    }
    walk(data){
        let keys = Object.keys(data)//获取data的所有key值
        for(let i =0; i<keys.length;i++){
            let key = keys[i]
            let value =data[keys[i]]
            defineReactive(data,key,value)
        }
    }
}
export function defineReactive(data,key,value){
    observe(value) // 递归观察
    Object.defineProperty(data,key,{
        get(){
            return value
        },
        set(newValue){
            // 如果你设置的值是一个对象的话 也要加一层监听
            observe(value) // 递归观察
            value = newValue
        }
    })

}
export default Observe