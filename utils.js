export function getByID(req, data) {
  const id = parseInt(req.params.id);
  return data.find((obj) => obj.id === id);
}
