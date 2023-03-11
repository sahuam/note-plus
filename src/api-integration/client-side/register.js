const { default: axios } = require("axios");

const register = async (data) => {
  try {
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_NOTE_SERVICE}/users`,
      data
    );
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = { register };
