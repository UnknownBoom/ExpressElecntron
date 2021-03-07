
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const realtorSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: {type:String, unique: true},
  lastName: String,
  patronymic: String,
  percentage: {type:Number,min:0,max:100},
})

realtorSchema.pre('save', function(next) {
  const doc = this;
  if(!doc._id){
    doc._id = new mongoose.Types.ObjectId;
  }
  next();
});


const Realtor = mongoose.model('Realtor',realtorSchema)

export default Realtor;
