import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        name: String,
        email: String,
        provider: String,
        provider_id: String,
        token: String,
        provider_pic: String,
        
        followers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        following: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
)
userSchema.methods.follow = function(user_id) {
    if (this.following.indexOf(user_id) === -1) {
        this.following.push(user_id)
    }
    return this.save()
}
userSchema.methods.addFollower = function(fs) {
    this.followers.push(fs)
}

export default model('User', userSchema);