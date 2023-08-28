console.log('start line');

const execAsync = async () => {
    const myCall = await fetch("https://reqbin.com/echo/post/json", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "key": "value" }),
    });
    if (myCall.status >= 400) {
        throw new Error("Bad response from server")
    }
    return await myCall.json()
}

(async () => {
    let i = 2;
    while (i > 0) {
        const content = await execAsync()
        console.log(i + JSON.stringify(content));
        i--
    }
})()


const execError = async () => {
    throw new Error("intentional error")
}

(async () => {
    try {
        await execError()
    } catch (error) {
        console.error(error);
    }
})()

console.log('end line');