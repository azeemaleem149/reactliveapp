// const Helper1 = () => {
//   const user = localStorage.getItem("auhenticate");
//   return user;
// };
// const Helper2 = () => {
//   let previousData = JSON.parse(localStorage.getItem("previousData"));
//   return previousData;
// };

// export { Helper1, Helper2 };

const Helper = (value) => {
  switch (value) {
    case 1:
      const user = localStorage.getItem("auhenticate");
      return user;
    case 2:
      let previousData = JSON.parse(localStorage.getItem("previousData"));
      return previousData;
    case 3:
      let entry = JSON.parse(localStorage.getItem("values"));
      return entry;
  }
};
export default Helper;
