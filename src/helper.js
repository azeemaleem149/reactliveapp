const Helper = (value) => {
  switch (value) {
    case 1:
      const user = localStorage.getItem("auhenticate");
      return user;
    case 2:
      let entry = JSON.parse(localStorage.getItem("values"));
      return entry;
    case 3:
      let previousData = JSON.parse(localStorage.getItem("previousData"));
      return previousData;
  }
};
export default Helper;
