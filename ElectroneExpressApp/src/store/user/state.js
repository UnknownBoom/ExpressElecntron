export default function () {
  return {
    users:[],
    defaultUser:{
      _id:"",
      name:"",
      lastName:"",
      patronymic:"",
      phone: "",
      email:"",
    },
    editedUser:{
      _id:"",
      name:"",
      lastName:"",
      patronymic:"",
      phone: "",
      email:"",
    },
    columns:[
      {name:"name",label:"Имя",field:'name'},
      {name:"lastName",label:"Фамилия",field:'lastName'},
      {name:"patronymic",label:"Отчетсво",field:'patronymic'},
      {name:"phone",label:"Телефон",field:'phone'},
      {name:"email",label:"Почта",field:'email'},
      {name:"actions",label:"Дейсвия",field:'actions'},
    ],
  }
}
