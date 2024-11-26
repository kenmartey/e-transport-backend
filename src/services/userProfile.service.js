import userProfile from "../models/userProfile.models.js";

/**
 * Create User Profile
 * @param {Object} userProfileData
 * @retur00ns {Promise<User>}
 */
export const createUserProfile= async (userProfileData, res) => {
  return userProfile.create(userProfileData);
};

/**
 * Get user Profile Details
 * @param {ObjectId} profileId
 * @returns {Promise<User>}
 */
export const getUserProfileById = async (profileId) => {
    return userProfile.findById({_id: profileId});
  };

/**
 * Get User Profile Details
 * @param {ObjectId} profileId
 * @returns {Promise<User>}
 */
export const getUserProfileByIdAndUpdate = async (profileId, userProfileData) => {
    return userProfile.findOneAndUpdate({_id: profileId}, {$set: userProfileData},{
        new: true
      });
  };
