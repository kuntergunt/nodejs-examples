
// async to sync with async-await
const asynchronousFunction = async () => {
        return 'huhuu'
}


const mainFunction = async () => {
        const result = await asynchronousFunction()
        return result
}


(async () => {
        let result = await mainFunction()
        console.log(result)
})()