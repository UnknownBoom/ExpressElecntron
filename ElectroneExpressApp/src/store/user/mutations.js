export default {
  setUsers(state,users){
    state.users = users
  },
  addUser(state,user){
    state.users.push(user)
  },
  editUser(state,data){
    if(!data.index || data.index == -1){
      console.warn(`data.index in editUser = ${data.index}`)
    }
    Object.assign(state.users[data.index], data.data)
  },
  deleteUser(state,index){
    if(!index || index == -1){
      console.warn(`index in deleteItem = ${index}`)
    }
    state.users.splice(index, 1);
  },
  setEditedUser(state,user){
     Object.assign(state.editedUser,user)
  },
  setDefaultToEditedUser(state){
    state.editedUser = Object.assign({},state.defaultUser)
  },
}
