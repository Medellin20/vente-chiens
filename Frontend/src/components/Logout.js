

const Logout = () => {
  window.localStorage.removeItem("token");
  window.location = "/";
}

export default  Logout;
