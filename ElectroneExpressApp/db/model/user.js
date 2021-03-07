const mongoose = require('mongoose')
const Schema = mongoose.Schema
import Counter from "./counter";

const userSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: {type:String},
  lastName: String,
  patronymic: String,
  phone: Number,
  email: {type:String},
})

userSchema.pre('save', function(next) {
  const doc = this;
    Counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, function(error, counter)   {
      if(error)
        return next(error);
      doc._id = new mongoose.Types.ObjectId;
      next();
    });
});


const User = mongoose.model("User", userSchema);
export default User;


