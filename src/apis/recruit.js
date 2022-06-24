import {RecruitInstance as recruit, UserInstance as user} from './axios'
//企业添加岗位 1 +
export function addPosition(params){
    return recruit.post('/enterprise/position',params)
}
//企业删除岗位 1 +
export function deletePosition(params){
    return recruit.delete('/enterprise/position',{params})
}
//企业修改岗位信息
export function modifyPosition(params){
    return recruit.put('/enterprise/position',params)
}

//用户获取企业所有岗位信息 1 +
export function getCompanyAllPosition(params){
    return recruit.get('/enterprise/position/all',{params})
}

//企业获取某岗位所有申请者 1 +
export function getAllApplicants(params){
    return recruit.get('/enterprise/applicants',{params})
}

//用户查看推荐岗位 1 +
export function getRecommendPositions(params){
    return recruit.get('/user/position/recommend',{params})
}

//获取岗位详情 1 +
export function getPositionDetails(params){
    return recruit.get('/user/position/specified', {params})
}

//用户申请岗位 1 +
export function postPositionApplication(params){
    return recruit.post('/user/application',params)
}
//用户删除岗位申请 1 +
export function deletePositionApplication(params){
    return recruit.delete('/user/application',{params})
}

export function getAllApplicationPosition(params){
    return recruit.get('/application',{params})
}


// 用户得到申请过的信息 1 +
export function getPostedRecruitments(params){
    return recruit.get('/user/application', {params})
}

//这个放在招聘模块 1
//简历文件：增删查 +
export function getResume(params){
    return recruit.get('/user/resume',{params})
}
//+
export function deleteResume(params){
    return recruit.delete('/user/resume',{params})
}
//+
export function postResume(params){
    return recruit.post('/user/resume', params);
}