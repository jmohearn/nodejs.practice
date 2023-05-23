let fs = require('fs');
let https = require('https');
let myPhotoLocation = "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg";
let name = 'jeremy';

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
    if(error) {
        return console.log(error);
    } else {
        return console.log("Congrats")
    }
});

https.get(myPhotoLocation, function(response) {
    response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
});

