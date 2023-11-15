export function getByID(req, data) {
  const id = parseInt(req.params.id);
  const foundData = data.find((obj) => obj.id === id);

  if (foundData) {
    res.json(foundData);
  } else {
    res.status(404).json("this ID not found");
  }
}
