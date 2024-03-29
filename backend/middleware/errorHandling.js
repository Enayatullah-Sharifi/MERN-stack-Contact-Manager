export default function errorHandler(err, req, res, next) {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message: "Resource not found";
  }

  res.status(statusCode).json({
    message,
    stack: err.stack,
  });
}
