const logFeature = (message)=> (req,res,next)=>{
    console.log(message);
    next(); // chay cac middleware va controller tiep theo
} 

module.exports = { 
    logFeature,
}