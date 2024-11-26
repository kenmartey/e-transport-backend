import { Schema, model } from 'mongoose';

const userProfileSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        phone_number: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);


/**
 * @typedef userProfile
 */
const userProfile = model('UserProfile', userProfileSchema);

export default userProfile;