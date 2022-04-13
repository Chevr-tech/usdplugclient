export const getToken = async (key) => {
  try {
    let token = await localStorage.getItem(key);
    return token;
  } catch (err) {
    console.log(`${err.message}. failed to get token `);
  }
};

export const setToken = async (key, value) => {
  try {
    await localStorage.setItem(key, value);
    console.log("setToken succesfull");
    return;
  } catch (err) {
    console.log(`${err.message} failed to set token `);
  }
};

export const deleteToken = async (key) => {
  try {
    await localStorage.removeItem(key);
    console.log("token was deleted successfully");
    return;
  } catch (err) {
    console.log(`${err.message} an error occured on deleteToken`);
  }
};

// store username
export const storeUsername = async (key, value) => {
  try {
    await localStorage.setItem(key, value);
    console.log("stored username successfully");
  } catch (err) {
    console.log(err.message, "An error occured while getting username");
  }
};

// get Username
export const getUsername = async (key) => {
  try {
    let userName = await localStorage.getItem(key);
    // console.log(userName, "line 44 token.js");
    return userName;
  } catch (err) {
    return err.message;
  }
};

// registration status
export const storeRegistrationStatus = async (key, value) => {
  try {
    await localStorage.setItem(key, value);
    console.log("stored username successfully");
  } catch (err) {
    console.log(err.message, "An error occured while getting username");
  }
};

// get Username
export const getRegistrationStatus = async (key) => {
  try {
    let userName = await localStorage.getItem(key);
    // console.log(userName, "line 44 token.js");
    return userName;
  } catch (err) {
    return err.message;
  }
};
