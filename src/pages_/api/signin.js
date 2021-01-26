
export default (req, res) => {
  res.statusCode = 200;
  res.send({
    token: "next-starter-kit-token",
    user: {
      name: "Name",
      lastName: "LastName"
    }
  });
}
