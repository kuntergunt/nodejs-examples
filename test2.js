

console.log('start line')

// async to sync with async-await
const asynchronousFunction = async () => {
        return 'huhuu'
}


const mainFunction = async () => {
        const result = await asynchronousFunction()
        return result + ' hihii'
}


(async () => {
        let result = await mainFunction()
        console.log('async ' + result)
})()

console.log('end line')