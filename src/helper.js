// const Helper1 = () => {
//   let allValues = JSON.parse(localStorage.getItem("values"));
//   return allValues;
// };

// const Helper2 = () => {
//   let previousData = JSON.parse(localStorage.getItem("previousData"));
//   return previousData;
// };
// const Helper3 = () => {
//   const user = localStorage.getItem("auhenticate");
//   return user;
// };

// export { Helper1, Helper2, Helper3 };

const Helper = (value) => {
  switch (value) {
    case 1:
      let entry = JSON.parse(localStorage.getItem("values"));
      return entry;
    case 2:
      let previousData = JSON.parse(localStorage.getItem("previousData"));
      return previousData;
    case 3:
      const user = localStorage.getItem("auhenticate");
      return user;
  }
};
export default Helper;
