const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique:true,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    username: {
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },createdAt:{
        type: Date,
        default: Date.now
    }
    

})

// function generateUniqueAccountName(proposedName) {
//     return Account
//         .findOne({ name: proposedName })
//         .then(function (account) {
//             if (account) {
//                 console.log('no can do try again: ' + proposedName);
//                 proposedName += Math.floor((Math.random() * 100) + 1);
//                 return generateUniqueAccountName(proposedName); // <== return statement here
//             }
//             console.log('proposed name is unique' + proposedName);
//             return proposedName;
//         })
//         .catch(function (err) {
//             console.error(err);
//             throw err;
//         });
// }

module.exports = mongoose.model('mytable', Users)