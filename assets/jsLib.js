export function twodmakearray(row, colums) {
  let array = new Array(row);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(colums);
  }
  return array
}
export function getTodayDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = ("0" + (1 + date.getMonth())).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}
export function checkNullAndUnde(value) {
  if(value===undefined||value===null||value==='null'||value==='undefined'){
    return true;
  }
  return false;
}