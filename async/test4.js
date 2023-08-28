// async http call, do it all async and return result in web service
let express = require('express');
let app = express();


app.get('/call', async (req, res) => {
    try {
        const innerCall = await fetch('https://reqbin.com/echo/get/json');

        if (innerCall.status >= 400) {
            throw new Error("Bad response from server");
        }

        const content = await innerCall.json();
        console.log(content);
        res.json(content);

    } catch (error) {
        console.log(error);
        next(error);
    }
});


let server = app.listen(8081, function () {
    let host = server.address().address || 'localhost'
    let port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});