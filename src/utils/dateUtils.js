function getTodayYYYYMMDD(){
    const  date = new Date();
    return date.getFullYear() + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1).toString() + (date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate())   
}

module.exports = {
    getTodayYYYYMMDD
}