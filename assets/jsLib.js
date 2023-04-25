import { getNewToken } from "../api/userApi";

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
  if (value === undefined || value === null || value === 'null' || value === 'undefined') {
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
export function is200(response, doneF) {
  if (response.status === 200) {
    doneF(response);
  }
}
export function articleError400(r) {
  let data = r.data.message;
  if (!checkNullAndUnde(data.length)) {
    let message = '';
    for (var i in data) {
      message = message + "," + articleError400Me(data[i].state);
    }
    alert(message);
  }
}
export function articleError400Me(num) {
  if (num == "3") {
    return "기상시간을 선택해주세요";
  } else if (num == "0") {
    return "제목을 입력해주세요";
  } else if (num == "4") {
    return "취침시간을 선택해주세요";
  } else if (num == "1") {
    return "글을 작성해 주세요";
  } else if (num == "5") {
    return "제목은 최대 30글자 입니다";
  }
}
export async function getReToken() {
  try {
    await getNewToken();
    return true;
  } catch (error) {
    consoleLog('토큰재발급 실패');
    return false;
  }
}
export function error403() {
  const url = window.location.href;
  const path = url.split('/')[3];
  localStorage.setItem("nurl", path);
  alert("로그인이 만료되었습니다");
  window.location.href='/login';
}
export async function getReTokenAsyncDate(axios) {
  try {
    await axios.post(`${process.env.API_URL}/api/auth`, null, { withCredentials: true }); // 오타 수정
    return true;
  } catch (error) {
    console.log('토큰재발급 실패'); // console.log 수정
    return false;
  }
}
