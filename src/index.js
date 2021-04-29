import Vue from 'vue' //默认从source的vue文件夹中去找
// 构造函数vue，传入一个对象，对象四个参数
// el，代理对象
// data：保存数据的函数
// computed：计算属性
// watch：数据监听
let vm = new Vue({
    el:"#app",
    data(){
        return{
            msg:'hello',
            myObject:{
                msg:'wogua'
            }
        }
    },
    computed:{},
    watch:{}
})
vm.myObject = 'hulu'
console.log(vm)
// data中的数据return出去后，vm就可以拿到 vm.msg='hello'
// 修改vm.msg,data中的数据也会变化，这些功能，要靠引用的vue构造函数来实现
