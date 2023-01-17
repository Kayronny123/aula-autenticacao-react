export const navigateToHome = (navigate) => {
  navigate("/");
};

export const navigateToAdmin = (navigate) => {
  navigate("/admin");
};

export const navigateToUser = (navigate, param) => {
  navigate(`/users/${param}`);
};
