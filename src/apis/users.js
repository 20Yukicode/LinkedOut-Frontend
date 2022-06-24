import {TweetInstance as tweet, UserInstance as user} from './axios';
//邮箱验证码 1 +
//get 需要大括号
//post 不需要大括号 frombody fromform都不需要大括号
export function getEmailCode(params){
    return user.get('/email',{params})
}
//注册 1 +
export function userRegister(params){
    return user.post('/register',params)
}
//登录 1 +
export function userLogin(params){
    return user.post('/login', params)
}

//获取用户基础信息 1 +
export function getBasicInfo(params){
    return user.get('/basic',{params})
}

//获取用户详细信息 1  +
export function getUserInfo(params){
    return user.get('/userInfo',{params})
}

//获取企业用户个人信息 1 +
export function getEnterpriseInfo(params){
    return user.get('/enterpriseInfo',{params})
}

//用户个人信息维护 1 + 这里转成了formdata
export function updateUserInfo(params){
    return user.post('/userInfo', params)
}

//企业个人信息维护 1 +
export function updateEnterpriseInfo(params){
    return user.post('/enterpriseInfo', params)
}

//上传头像 1 这里使用修改用户信息即可 改成企业和用户的调用两个 + 存疑
export function upLoadUserImage(params){
    return user.post('/pic', params);
}

//上传背景图 1 这里使用修改用户信息即可 改成企业或用户的调用两个 + 存疑
export function upLoadUserBackground(params){
    return user.post('/back', params);
}

// 查找用户 1 +
export function userSearch(params){
    return user.get('/search',{params})
}

//教育经历 增删改查 1 +
export function postEduBackground(params){
    return user.post('/edu',params)
}
// 1 +
export function deleteUserEduBackground(params){
    return user.delete('/edu',{params})
}

export function updateUserEduBackground(params){
    return user.post('/edu',params)
}

//查询教育经历 1  +
export function getUserEduBackground(params){
    return user.get('/edu',{params})
}


//工作经历 增删改查 1 +
export function postUserJobBackground(params){
    return user.post('/job',params)
}

//查询工作经历 1 +
export function getUserJobBackground(params){
    return user.get('/job',{params})
}
// 1 +
export function deleteUserJobBackground(params){
    return user.delete('/job',{params})
}

export function updateUserJobBackground(params){
    return user.post('/job',params)
}

//关注用户 1 +
export function updateFollow(params){
    return user.post('/subscription',params,{params})
}

//取关用户 1 +
export function deleteFollow(params){
    return user.delete('/subscription',{params})
}

//推荐关注列表 1 +
export function getRecommendList(params){
    return user.get('/recommend', {params})
}

// 获取粉丝列表 1 +
export function getFansList(params) {
    return user.get('/fans',{params})
}

// 获取关注列表 1 +
export function getFollowingList(params) {
    return user.get('/follow',{params})
}