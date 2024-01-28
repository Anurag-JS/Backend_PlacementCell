const dbpassword = encodeURIComponent('PlacementCell@codingninjas');
const developement = {
    name :'developement',
    db_path :'./config/mongoose',
    passport_path : './config/passport-local-strategy',
    customMware_path : './config/flashMessage',
    assets_path : './assets',
    secret_key :'#placementCell@careercamp$$Team&&&interface##Anurag%%',
    mongoose_path :`mongodb+srv://anuragv:${dbpassword}@cluster0.emzh9dy.mongodb.net/?retryWrites=true&w=majority`,
    api_path :'https://remotive.com/api/remote-jobs'
}
module.exports = developement;