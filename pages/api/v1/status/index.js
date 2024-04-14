function status(request, response) {
  response.status(200).json({ status: "Muito boa ação" });
}

export default status;
