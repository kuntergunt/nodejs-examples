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
        content1.inner = "i have added this";
        console.log('1' + JSON.stringify(content1));


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
        content2.outer = content1;
        console.log('2' + JSON.stringify(content2));

        // return result in http response
        res.json(content2);

    } catch (error) {
        console.log(error);
    }
});


let server = app.listen(8081, function () {
    console.log("Example app listening, go to http://localhost:8081/call")
});

// http://localhost:8081/call