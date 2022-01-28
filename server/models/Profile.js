//Referenced week 21 activity 25
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const profileSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    authored: [
        {
            type: Schema.Types.ObjectId,
            ref: "Recipe",
        },
    ],
    saved: [
        {
            type: String,
            trim: true,
        },
    ],
});

profileSchema.pre('save', async function (next){
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    };
    next();
});

profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports =  Profile;