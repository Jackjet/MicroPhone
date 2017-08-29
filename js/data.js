var json1={"errorReason":{"msg":"请输入验证码!","success":false},"result":{},"success":true,"userVo":{"headimgurl":"http:\/\/wx.qlogo.cn\/mmopen\/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe\/0","nickname":"Band","openId":"o5j-ps0WymFfHlQEGC_-JtcD4uE4","telNo":"13681111111","userId":0,"validateCode":""}}
var json2={"errorReason":{"msg":"","success":true},"result":{},"success":true,"userVo":{"headimgurl":"http:\/\/wx.qlogo.cn\/mmopen\/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe\/0","nickname":"Band","openId":"o5j-ps0WymFfHlQEGC_-JtcD4uE4","telNo":"13681111111","userId":0,"validateCode":""}}

var obj1 = eval(json1);

var obj2 = eval(json2);

if(obj1.errorReason.success==false){
	console.log(obj1.errorReason.msg);
}else{
}

if(obj2.errorReason.success==true){
	console.log(obj2.userVo.openId);
	console.log(obj2.userVo.headimgurl);
	console.log(obj2.userVo.telNo);
	
}else{
	
	
}
