import  httpStatus from 'http-status';
import {createUserProfile, getUserProfileById, getUserProfileByIdAndUpdate} from '../services/userProfile.service.js';

export const createUserProfileController = async (req, res) => {
    console.log("FROM CREATE USER CONTROLLER....", req.body)
    const userProfile = await createUserProfile(req.body);
    return userProfile
};

export const getUserProfileDetailController = async (profileId, res) => {
    console.log(profileId)
    const profileDetail = await getUserProfileById(profileId);
    return profileDetail
};

export const updateBookingDetailController = async (profileId, req, res) => {
    console.log(profileId)
    const updateBooking = await getUserProfileByIdAndUpdate(profileId, req.body);
    return updateBooking
};