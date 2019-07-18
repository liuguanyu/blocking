module.exports = (t)=>{
    let start = +new Date()
    while (+new Date() - start < t*1000){}
}
