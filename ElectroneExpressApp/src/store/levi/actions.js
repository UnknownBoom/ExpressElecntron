import api from "../../boot/axios";
console.log("OK")

function getIndexById(source,id){
  for(let i=0;i<source.length;i++){
    if(source[i]._id == id)
      return i;
  }
  return -1;
}

export default {
  async findLevi(context,levi){
    try{
      if(!levi){
        throw {error:`levi in findLevi is ${levi}`}
      }
      if(levi.max){
        throw {error:`levi.max in findLevi is ${levi.max}`}
      }
      if(!levi.fio){
        throw {error:`levi.user in findLevi is ${levi.fio}`}
      }
      const res = await api.leviWithMax(levi.max,levi.fio)
      const data = res.data
      context.commit('setLevi',data.data)
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
