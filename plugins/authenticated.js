import { checkNullAndUnde, consoleLog, initKakaoLogin } from "../assets/jsLib";

let whiteListPage=["/"];
let whiteListPageIn=["/login"];
// plugins/authenticated.js
export default  ({app, route})=> {
  let path=route.fullPath;
  if (isWhite(path)&&checkNullAndUnde(localStorage.getItem("login"))&&localStorage.getItem("login")!="true") {
    localStorage.setItem("nurl",path);
    location.href='/login';
  }
}
function isWhite(path) {
  for(let i in whiteListPage){
    if(path===whiteListPage[i]){
      return false;
    }
  }
  for(let i in whiteListPageIn){
    if(path.includes(whiteListPageIn[i])){
      return false;
    }
  }
  return true
}
