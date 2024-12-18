const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "cusyzboZ#MR1FBJnkl2FwAHJUFoPSmczQveUiV9dkuGn9dw2Qkrg",
ALIVE_IMG: process.env.ALIVE_IMG || "https://avatars.githubusercontent.com/u/106251140?v=4",
ALIVE_MSG: process.env.ALIVE_MSG || "This Bot Create By Resika Hirushan I'm Alive Now",
};
