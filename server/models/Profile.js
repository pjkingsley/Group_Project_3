//Referenced week 21 activity 25
const { Schema, model } = require('mongoose');
const bycrypt = require('bcrypt');

const profileSchema = new Schema({
    name: {
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
            type: String,
            trim: true,
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
        this.password = await bycrypt.hash(this.password, saltRounds);
    };
    next();
});

profileSchema.methods.isCorrectPassword = async function (password) {
    return bycrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports =  Profile;