import Realtor from "../model/realtor";

export default {
  async findAllRealtor() {
    const data = await Realtor.find({});
    return data
  },
  async findRealtor(id) {
    const data = await Realtor.findById(id);
    return data
  },
  async createRealtor(realtor) {
    this.canCreate(realtor)
    realtor._id = null
    const data = await Realtor.create(realtor);
    return data
  },
  async deleteRealtor(id) {
    await Realtor.findByIdAndDelete(id);
    return;
  },
  async editRealtor(id, realtor) {
    this.canCreate(realtor)
    await Realtor.findByIdAndUpdate(id, realtor);
    const data = await Realtor.findById(id);
    console.log(data)
    return data
  },
  canCreate(realtor) {
    if (!realtor.name || realtor.name.trim() == "") {
      throw {message: "имя пустое"}
    }
    if (!realtor.lastName || realtor.lastName.trim() == "") {
      throw {message: "фамилия пустое"}
    }
    if (!realtor.patronymic || realtor.patronymic.trim() == "") {
      throw {message: "отчество пустое"}
    }
    if (realtor.percentage && realtor.percentage.toString().trim() != "") {
      if (realtor.percentage < 0 || realtor.percentage > 100)
        throw {message: `процент от 0 до 100 а получен ${realtor.percentage}`}
    }
    console.log("ok")
  }
}
