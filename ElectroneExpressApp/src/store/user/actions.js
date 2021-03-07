import api from "../../boot/axios";

function getIndexById(source,id){
  for(let i=0;i<source.length;i++){
    if(source[i]._id == id)
      return i;
  }
  return -1;
}

export default {
  async getAllUsersAction(context){
    try{
      const res = await api.findAllUsers()
      const data = res.data
      context.commit('setUsers',data.data)
    }catch (e) {
      if(e.response.status == 404)
        throw {"error": "вернулся 404 статус"}
      throw e.response.data
    }
  },
  async createUserAction(context,user){
    try{
      const res = await api.createUser(user)
      const data = res.data
      context.commit('addUser',data.data)
      context.commit('setDefaultToEditedUser')
    }catch (e) {
      if(e.response.status == 404)
        throw {"error": "вернулся 404 статус"}
      if(e.response && e.response.data)
        throw e.response.data
      if(e.error) throw e
      throw {error:"Ошибка"}
    }
  },
  async deleteUserAction(context,user){
    try{
      if(!user){
        throw {error : `user в deleteUserAction  = ${user}`}
      }
      if(!user._id){
        throw {error : `id в deleteUserAction  = ${user._id}`}
      }
      const res = await api.deleteUser(user._id)
      context.commit('deleteUser',getIndexById(context.state.users,user._id))
    }catch (e) {
      if(e.response.status == 404)
        throw {"error": "вернулся 404 статус"}
      if(e.response && e.response.data)
        throw e.response.data
      if(e.error) throw e
      throw {error:"Ошибка"}
    }
  },
  async editUserAction(context,user){
    try{
      const res = await api.updateUser(user)
      const data = res.data
      context.commit('editUser',{index:getIndexById(context.state.users,user._id),data:data.data})
    }catch (e) {
      if(e.response.status == 404)
        throw {"error": "вернулся 404 статус"}
      if(e.response && e.response.data)
        throw e.response.data
      if(e.error) throw e
      throw {error:"Ошибка"}
    }
  },
}
