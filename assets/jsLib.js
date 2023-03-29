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
export async function initKakaoLogin() {
  try {
    await window.Kakao.init('ec6b5c5e681c307d9d1576ee7fbf2edf');
  } catch (error) {
      consoleLog(error);
  }
}
export function consoleLog(val) {
  console.log(val);
}
export function loginWithKakao() {
  window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/login',
  });
}