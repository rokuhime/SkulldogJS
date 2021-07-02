//general tools for using the bot
const { Console } = require('console');
const fs = require('fs'); //file system
const { getUnpackedSettings } = require('http2');
const saveloc = "/home/fus/Desktop/Creative/SkulldogJS/save";

const userModel = require('../database/models/usersaves.js');
//takes discord message, spits out string array split by spaces

module.exports = {

    async SaveUser(user, data) {
        //try to load, if not make new
        let userdata = await this.LoadUser(user);
        if (userdata == null) { //create new user
            let userSet = new userModel({
                id: user.id,
                name: user.tag,
                gacha: [0]
            }).save().then(result => {
                console.log(`user save added for ${result.name}!`);
                console.log(userdata);
                userdata = result;
            })
                .catch(err => console.log(err))
        }
        else {
            userdata = userdata[0];
        }
        console.log(`user found for ${userdata.name}!`);
            console.log(userdata);
            console.log(`user found for ${userdata.id}!`);
        //either way save that data
        //report if worked
    },

    async LoadUser(user) {
        return await userModel.find({
            id: user.id
        }, function (err, results) {
            if (err) {
                throw err;
            }
            if (results.length) {
                // interact with data
                results = results[0];
                console.log(`user ${results.name} found!`);
                return results;
            }
        }).catch(err => console.log(err));
    },

    ///////////////////////////////////////////////////////////

    ToGachaObj(id) {

        return gachaobj;
    }
}

function UserToUS(user) {
    let result = new UserSave(user.tag, user.id);
    return result;
}

function UserToUS(user, gacha) {
    let result = new UserSave(user.tag, user.id, gacha);
    return result;
}

function SaveUser(user, data) {
    data = JSON.stringify(user);

    // try/catch to see if it works
    try {
        console.log(`SaveUser - trying with user ${user.tag}...`);
        fs.writeFileSync(`${saveloc}/userdata/${user.id}.json`, data);
    }
    catch (err) {
        console.log(`SaveUser - failed for ${user.tag}! \n${err}`);
    }
    finally {
        console.log(`SaveUser - successfully written for user ${user.tag}!`);
    }
}