


console.log('start line');

(async () => {
    let i = 2;

    while (i > 0) {
        const myCall = await fetch("https://reqbin.com/echo/post/json", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"key":"value"}),
        });
        if (myCall.status >= 400) {
            throw new Error("Bad response from server");
        }
        const content = await myCall.json();
        console.log(i + JSON.stringify(content));
        i--
    }

})()

console.log('end line');