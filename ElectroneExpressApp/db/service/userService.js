import User from '../model/user'
export default {
   async findAllUser(){
       const data =  await User.find({});
       return data
  },
  async findUser(id){
      const data =  await User.findById(id);
      return data
  },
  async createUser(user){
    this.canCreate(user)
      user._id = null
      const data = await User.create(user);
      return data
  },
  async deleteUser(id){
      await User.findByIdAndDelete(id);
      return ;
  },
  async editUser(id,user){
    this.canCreate(user)
      await User.findByIdAndUpdate(id,user);
      const data =  await User.findById(id);
      return data
  },
  validateEmail(email){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
   },
  canCreate(user){
     if((!user.email || user.email.trim() =="") && (!user.phone || user.phone.toString().length == 0)){
        throw({message:"Поля почта и телефон пусты"})
     }
     if(user.email && user.email.trim() !=""){
       if(!this.validateEmail(user.email)){
            throw {message:"почта не корректна"}
       }
     }
    if(user.phone!=null && user.phone!=undefined &&  user.phone.toString().length != 0){

      if(user.phone.toString().trim().length != 10){
        throw {message:`номер не корректен`}
      }
      try{
        Number.parseInt(user.phone)
      }catch (e) {
        throw {message:`номер не корректен`}
      }
    }
  }
}
