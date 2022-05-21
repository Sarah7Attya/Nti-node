const test = () => {
    console.log("test from MyMod")
}
const test2 = () => {
    console.log("test2 from MyMod")
}

// module.exports = test
module.exports = {
    t:test,
    t2:test2
}