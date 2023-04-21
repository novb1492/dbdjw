export default async function ({$axios}) {
    console.log('middle');
    let response=await $axios.post(`${process.env.API_URL}/api/auth`, null, { withCredentials: true });
    console.log(response);
  }
  
  function isTokenValid(authToken) {
    // 인증 토큰의 유효성을 검사하는 로직을 작성합니다.
  }
  
  async function getNewAuthToken() {
    // 새로운 인증 토큰을 발급받는 로직을 작성합니다.
  }