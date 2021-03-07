import api from "../../boot/axios";

function getIndexById(source,id){
  for(let i=0;i<source.length;i++){
    if(source[i]._id == id)
      return i;
  }
  return -1;
}

export default {
  async getAllRealtorsAction(context){
    try{
      const res = await api.findAllRealtors()
      const data = res.data
      context.commit('setRealtors',data.data)
    }catch (e) {
      if(e.response.status == 404)
        throw {"error": "вернулся 404 статус"}
      if(e.response && e.response.data)
        throw e.response.data
      if(e.error) throw e
      throw {error:"Ошибка"}
    }
  },
  async createRealtorAction(context,realtor){
    try{
      const res = await api.createRealtor(realtor)
      const data = res.data
      context.commit('addRealtor',data.data)
      console.log(res.data)
    }catch (e) {
      if(e.response.status == 404)
        throw {"error": "вернулся 404 статус"}
      if(e.response && e.response.data)
        throw e.response.data
      if(e.error) throw e
      throw {error:"Ошибка"}
    }
  },
  async deleteRealtorAction(context,realtor){
    try{
      if(!realtor){
        throw {error : `realtor в deleteRealtorAction  = ${realtor}`}
      }
      if(!realtor._id){
        throw {error : `id в deleteRealtorAction  = ${realtor._id}`}
      }
      const res = await api.deleteRealtor(realtor._id)
      const data = res.data
      context.commit('deleteRealtor',realtor)
    }catch (e) {
      if(e.response.status == 404)
        throw {"error": "вернулся 404 статус"}
      if(e.response && e.response.data)
        throw e.response.data
      if(e.error) throw e
      throw {error:"Ошибка"}
    }
  },
  async editRealtorAction(context,realtor){
    try{
      const res = await api.updateRealtor(realtor)
      const data = res.data
      context.commit('editRealtor',{index:getIndexById(context.state.realtors,realtor._id),data:data.data})
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
