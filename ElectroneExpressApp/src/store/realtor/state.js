export default{
    realtors:[],
    defaultRealtor:{
      _id:"",
      name:"",
      lastName:"",
      patronymic:"",
      percentage: 0,
    },
    editedRealtor:{
      _id:"",
      name:"",
      lastName:"",
      patronymic:"",
      percentage: 0,
    },
    columns:[
      {name:"name",label:"Имя",field:'name'},
      {name:"lastName",label:"Фамилия",field:'lastName'},
      {name:"patronymic",label:"Отчетсво",field:'patronymic'},
      {name:"percentage",label:"Процент",field:'percentage'},
      {name:"actions",label:"Действия",field:'actions'},
    ],
}
