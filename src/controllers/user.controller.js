import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const registerUser= asyncHandler(async (req,res)=>{
  res.status(200).json({
    message:"okkkkk"
  })
})


// const registerUser = asyncHandler(async (req, res) => {
//   const { email, userName, fullName, password } = req.body;
//   console.log("Request Body:", req.body);

//   console.log("email:", email);
//   if (
//     [fullName, email, userName, password].some((field) => field?.trim() === "")
//   ) {
//     throw new ApiError(400, "All fileds are required");
//   }

//   const existedUser = await User.findOne({
//     $or: [{ userName }, { email }],
//   });
//   if (existedUser) {
//     throw new ApiError(409, "User already exists");
//   }
//   const avatarLocalPath = req.files?.avatar[0]?.path;
//   const coverImageLocalPath = req.files?.coverImage[0]?.path;

//   if (!avatarLocalPath) {
//     throw new ApiError(400, "Avatar File is Required");
//   }
//   const avatar = await uploadOnCloudinary(avatarLocalPath);
//   const coverImage = await uploadOnCloudinary(coverImageLocalPath);
//   if (!avatar) {
//     throw new ApiError(400, "Avatar Upload Failed");
//   }
//   const user = await User.create({
//     fullName,
//     avatar: avatar.url,
//     coverImage: coverImage?.url || "",
//     userName: userName.toLowerCase(),
//     email,
//     password,
//   });

//   const createdUser = await User.findById(user._id).select(
//     "-password -refreshToken"
//   );
//   if (!createdUser) {
//     throw new ApiError(500, "Something went wrong while registering a user");
//   }
//   return res
//     .status(200)
//     .json(new ApiResponse(200, createdUser, "User Registered Successfully"));
// });

export { registerUser };
