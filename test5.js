// multiple async calls, return result in web service
let express = require('express');
let app = express();


app.get('/call', async (req, res) => {
    try {
        // first async call GET
        const innerCall1 = await fetch('https://reqbin.com/echo/get/json');
        if (innerCall1.status >= 400) {
            throw new Error("Bad response from server");
        }
        const content1 = await innerCall1.json();
        console.log(content1);
        content1.info = "i have added this";


        // 2nd async call POST
        const innerCall2 = await fetch("https://reqbin.com/echo/post/json", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content1),
        });
        if (innerCall2.status >= 400) {
            throw new Error("Bad response from server");
        }
        const content2 = await innerCall2.json();
        console.log(content2);

        // return result
        res.json(content2);

    } catch (error) {
        console.log(error);
        next(error);
    }
});


let server = app.listen(8081, function () {
    console.log("Example app listening at http://localhost:8081")
});

// http://localhost:8081/call