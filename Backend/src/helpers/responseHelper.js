success = (result, res, next) => {
    if(result.status == 200){
        res.json(result.data);
        return;
    }
    if(result.response.status == 404){
        next();
        return;
    }
    next(result);
    return;
}

module.exports = success;