const mongoose = require('mongoose')
import './model/counter'
import './model/user'
import './model/realtor'


mongoose.connect("mongodb+srv://root:root@cluster0.6d5ap.mongodb.net/MyDb?retryWrites=true&w=majority",
  {
    useNewUrlParser:true,
    useFindAndModify:false
  })
  .catch(e=>console.error(e));

