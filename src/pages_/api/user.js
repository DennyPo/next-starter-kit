
export default (req, res) => {
  res.statusCode = 200;

  if (req.headers.authorization && req.headers.authorization === "next-starter-kit-token") {
    res.send({
      user: {
        name: "Name",
        lastName: "LastName"
      }
    });
  } else {
    res.send({});
  }
}
