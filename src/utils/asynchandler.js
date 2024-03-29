const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(res,res,next)).
    catch((err) => next(err));
  };
};

export { asyncHandler };

// --------------another way ----

//higher order functio ()=> ()=>{}

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       sucess: false,
//       message: err.message,
//     });
//   }
// };