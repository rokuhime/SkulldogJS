//general tools for using the bot
const { Console } = require('console');
const fs = require('fs'); //file system
const { getUnpackedSettings } = require('http2');
const saveloc = "/home/fus/Desktop/Creative/SkulldogJS/save";
//takes discord message, spits out string array split by spaces

module.exports = {
    //save user data
    SaveUser(user, data) {
        console.log(`SaveUser - trying to load user ${user.tag}...`)
        let file = LoadUser(user);

        if (file == null) { //if user file doesnt exist, make new
            
        }

        else { //if user file exists

        }

        try { SaveUser(file); }
        catch {
            console.log(`SaveUser - error saving data for user ${user.tag}!`)
            return false;
        }

        finally { return true; }
    },

    AddGacha(user, gachaid) //exclusively for adding gacha
    {
        console.log(`AddGacha - ${user.tag}, ${gachaid}`);
        console.log(`AddGacha - trying to load user ${user.tag}...`);
        let file = LoadUser(user);

        

        this.SaveUser(user, file);
        console.log(`AddGacha - done for ${user.tag} i think`);
    },

    ToGachaObj(id)
    {
        let gachaobj = {};
        gachaobj[`${id}`] = true;
        return gachaobj;
    },

    dev(user)
    {


    },

    LoadUser(user) {
        console.log(`LoadUser - trying user ${user.tag}...`);
        let rawdata;
        try {
            rawdata = fs.readFileSync(`${saveloc}/userdata/${user.id}.json`);
            let file = JSON.parse(rawdata);
    
            let us;
            if (typeof file.gacha != "undefined") us = new UserSave(file.tag, file.id, file.gacha);
            else us = new UserSave(file.tag, file.id);
    
            console.log(`LoadUser - success for user ${user.tag}!`);
            return us;
        }
        catch(err) {
            console.log(`LoadUser - failed for user ${user.tag}!`);
            console.log(err);
        }
    }
}

function UserToUS(user)
{
    let result = new UserSave(user.tag, user.id);
    return result;
}

function UserToUS(user, gacha)
{
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