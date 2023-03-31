import { checkNullAndUnde, consoleLog, initKakaoLogin } from "../assets/jsLib";

// middleware/authenticated.js
export default function ({store, route,redirect }) {
  if (!store.state.auth.flag) {
    return redirect(`/login?nurl=${route.fullPath}`);
  }
}
