export default {
  setRealtors(state,realtor){
    state.realtors = realtor
  },
  addRealtor(state,realtor){
    state.realtors.push(realtor)
  },
  editRealtor(state,data){
    if(!data.index || data.index == -1){
      console.warn(`data.index in editRealtor = ${data.index}`)
    }
    Object.assign( state.realtors[data.index], data.data)
  },
  deleteRealtor(state,index){
    if(!index || index == -1){
      console.warn(`index in deleteRealtor = ${index}`)
    }
    state.realtors.splice(index, 1);
  },
  setEditedRealtor(state,user){
    state.editedRealtor = user
  },
  setDefaultToEditedRealtor(state){
    state.editedRealtor = Object.assign({},state.defaultRealtor)
  },
}
