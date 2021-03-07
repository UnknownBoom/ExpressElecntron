import userService from "./userService";
import realtorService from "./realtorService";
function levi(a, b){
  a = a.toLowerCase()
  b = b.toLowerCase()
  if(a.length == 0) return b.length;
  if(b.length == 0) return a.length;

  var matrix = [];

  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
          Math.min(matrix[i][j-1] + 1, // insertion
            matrix[i-1][j] + 1)); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
}
function getFIO(user) {
  let fio = "";
  if(user.name){
    fio+=user.name.trim().toLowerCase()
  }
  if(user.lastName){
    fio+=user.lastName.trim().toLowerCase()
  }
  if(user.patronymic){
    fio+=user.patronymic.trim().toLowerCase()
  }
  return fio;

}

export default {
  async getLiveLessThen(max,source){
    source = getFIO(source)
    console.log("--------source------------")
    console.log(source)
    console.log("--------Endsource------------")
    let res = []
    let fio;
    const users = await userService.findAllUser();
    const realtors = await realtorService.findAllRealtor();
    users.push(realtors);
    for(let i=0;i<users.length;i++){
      fio = getFIO(users[i]);
      console.log("--------Name------------")
      console.log(fio)
      console.log("--------EndName------------")
      if(levi(source,fio) <= max){
        res.push(users[i])
      }
    }
    return res;
  }
}
