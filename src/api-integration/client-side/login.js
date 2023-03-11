const { default: axios } = require("axios");

const login = async (username, password) => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_NOTE_SERVICE}/users`);
    const user = data.find((u) => u.username === username);
    console.log({ u: user.username, p: user.password, window });
    if (!user) throw new Error("USER NOT FOUND");
    if (user.password !== password) throw new Error("INVALID CREDENTIAL");
    window.localStorage.setItem("USER", username);
    window.localStorage.setItem("TOKEN", "eHLJFAdj123ADSDFSDKFSDF128JJLSFJSD");
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = { login };
