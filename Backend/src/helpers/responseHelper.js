success = (result, res, next) => {
    if(result){
        res.json(result);
        return;
    }
    
    next(result);
    return;
}

module.exports = success;