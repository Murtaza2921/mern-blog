export const test = (req, res) => {
  res.json({ message: "API is working!" });
};

export const userUpdate = async (req, res, next) => {
  console.log(req.user);
};
