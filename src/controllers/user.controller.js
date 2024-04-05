import  httpStatus from 'http-status';
import bcrypt from 'bcryptjs';
// import pick from '../utils/pick';
// import ApiError from '../utils/ApiError';
// import catchAsync from '../utils/catchAsync';
import userService  from '../services/user.service.js';

const createUser = async (req, res) => {
    console.log("FROM CREATE USER CONTROLLER....", req.body)
    const user = await userService.createUser(req.body);
    // console.log(user)
    return user
    // res.status(httpStatus.CREATED)
};

const loginUser = async (req, res) => {
  const user = await userService.getUserByEmail(req.body.email);
  
  if (!user) {
    return {status: httpStatus.NOT_FOUND, message: 'User not found'}
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)){
        return {status: httpStatus.OK, message: "user successfully logged in", data: user}
    }
    return {status: httpStatus.BAD_REQUEST, message: "Username or password wrong"}
  } catch (error) {
    return {status: httpStatus.INTERNAL_SERVER_ERROR, message: error}
  }
  
//   return res.send(user);
};

// const getUsers = catchAsync(async (req, res) => {
//   const filter = pick(req.query, ['name', 'role']);
//   const options = pick(req.query, ['sortBy', 'limit', 'page']);
//   const result = await userService.queryUsers(filter, options);
//   res.send(result);
// });

// const getUser = catchAsync(async (req, res) => {
//   const user = await userService.getUserById(req.params.userId);
//   if (!user) {
//     throw new ApiError(NOT_FOUND, 'User not found');
//   }
//   res.send(user);
// });

// const updateUser = catchAsync(async (req, res) => {
//   const user = await userService.updateUserById(req.params.userId, req.body);
//   res.send(user);
// });

// const deleteUser = catchAsync(async (req, res) => {
//   await userService.deleteUserById(req.params.userId);
//   res.status(NO_CONTENT).send();
// });

export default {
  createUser,
  loginUser
//   getUsers,
//   getUser,
//   updateUser,
//   deleteUser,
};