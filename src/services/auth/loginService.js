import getUserData from "../users/userData";

export default function loginService( username, password) {
    let isMatched = false;
  const userData = getUserData();

  userData.forEach((user) => {
    if (user.username === username.username && user.password === password.password) {
      return isMatched = true;
    }
  });
    return isMatched;
}
