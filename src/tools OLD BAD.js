//general tools for using the bot
const { Console } = require('console');
const fs = require('fs'); //file system
const saveloc = "/home/fus/Desktop/Creative/SkulldogJS/save";
//takes discord message, spits out string array split by spaces
function ParsingTool(msg) {
    let temp = msg.content.split(" ");
    temp[0]
    return temp;
}

function JsonFromUser(user) {
    data = JSON.stringify(user);

    // try/catch to see if it works
    try {
        console.log(`JsonFromUser - trying with user ${user.tag}...`);
        fs.writeFileSync(`${saveloc}/userdata/${user.id}.json`, data);
    }
    catch (err) {
        console.log(`JsonFromUser - failed for ${user.tag}! \n${err}`);
    }
    finally {
        console.log(`JsonFromUser - successfully written for user ${user.tag}!`);
    }
}

function UserFromJson(user) {
    console.log(`UserFromJson - trying user ${user.tag}...`);
    let rawdata;
    try {
        rawdata = fs.readFileSync(`${saveloc}/userdata/${user.id}.json`);
        let file = JSON.parse(rawdata);
        console.log(`UserFromJson - success for user ${user.tag}!`);
        return file;
    }
    catch {
        console.log(`UserFromJson - failed for user ${user.tag}!`);
    }
}

module.exports = {
    //save user data
    SaveUser(user, data) {
        console.log(`SaveUser - trying to load user ${user.tag}...`)
        let file = UserFromJson(user);

        if (file == null) { //if user file doesnt exist, start file off with name and id
            file = {};
            file["tag"] = user.tag;
            file["id"] = user.id;
            if (data != null) file += data;
        }

        else { //if user file exists
            for (value in data) {
                file[value] = data[value];
            }
        }

        try { JsonFromUser(file); }

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
        let file = UserFromJson(user);

        let filegacha = file["gacha"];
        filegacha[`${gachaid}`] = true;
        file["gacha"] = filegacha;

        this.SaveUser(user, file);
        console.log(`AddGacha - done for ${user.tag} i think`);
    },

    ToGachaObj(id)
    {
        let gachaobj = {};
        gachaobj[`${id}`] = true;
        return gachaobj;
    }
}