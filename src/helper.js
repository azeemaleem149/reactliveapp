const Helper1 = () => {
  const user = localStorage.getItem("auhenticate");
  return user;
};
const Helper2 = () => {
  let previousData = JSON.parse(localStorage.getItem("previousData"));
  return previousData;
};

export { Helper1, Helper2 };
