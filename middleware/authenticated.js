import { initKakaoLogin } from "../assets/jsLib";

// middleware/authenticated.js
export default function ({ store, redirect,route }) {
  // initKakaoLogin();
  console.log(localStorage.getItem('login'));
  console.log(route.fullPath)
    // loginWithKakao();
}
function loginWithKakao() {
  window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/login',
  });
}