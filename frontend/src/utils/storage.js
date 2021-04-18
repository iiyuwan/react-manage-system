// 持久化存储的模块
import store from 'store' // store 更简洁、而且兼容性高
const storageUtil =  {
    saveUser(user){
        store.set('user', user)
    },
    getUser(){
        return store.get('user') || {}
    },
    removeUser(){
        store.remove('user')
    }
}
export default storageUtil
