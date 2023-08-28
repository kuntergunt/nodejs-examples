// @ts-check

console.log('start line')

// async to sync with async-await
const asynchronousFunction = async (/** @type {string} */ asyncPar) => {
         /** @type {string} */
        let huhuu;
        huhuu = 'huhuu';
        return asyncPar + 'huhuu'
}


const mainFunction = async (/** @type {string} */ mainPar) => {
        const result = await asynchronousFunction('hu')
        return result + mainPar + ' hihii'
}


(async () => {
        let result = await mainFunction('hi')
        console.log('async ' + result)
})()

console.log('end line')