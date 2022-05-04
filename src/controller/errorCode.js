export const errorController = (res) => {
  const { status } = res;
  if (status === 400) {
    return {
      message: "error",
      data: "An occured",
    };
  } else if (status === 409) {
    return {
      message: "error",
      data: "",
    };
  }
};
