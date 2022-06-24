import { TweetInstance as tweet } from './axios';

export function getAllSubscriptionList(uid){
    return tweet.get('/subscriptionList/' + uid)
}


//点赞api 1 +
export function addLikes(params){
    return tweet.post('/likes',params,{params})
}

//取消点赞api 1 +
export function deleteLikes(params){
    return tweet.delete('/likes',{params})
}

//获取个人界面的动态 1 +
export function getSelfTweet(params){
    return tweet.get('/user/one',{params})
}

//查看关注者的动态id 1 +
export function getOtherTweet(params){
    return tweet.get('/user/subscribe',{params})
}

//获取动态所有的评论 1 +
export function getAllComments(params){
    return tweet.get('/comment',{params})
}

//发表评论 1 +
export function addComment(params){
    return tweet.post('/comment',params)
}

//删除评论 1 +
export function deleteComment(params){
    return tweet.delete('/comment',params)
}

//发布动态 1 疑惑
export function addTweet(params){
    return tweet.post('/user', params);
}

// 删除动态 1 +
export function deleteTweet(params){
    return tweet.delete('/user',{params})
}

