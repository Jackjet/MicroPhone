mui.init({
  gestureConfig:{
   tap: true, //默认为true
   doubletap: true, //默认为false
   longtap: true, //默认为false
   swipe: true, //默认为true
   drag: true, //默认为true
   hold:false,//默认为false，不监听
   release:false//默认为false，不监听
  }
});

//	验证码计时
	var timer=60;
	var oBtn=document.getElementById('yzm');
	
	function settime(val){
		if(timer==0){
			val.removeAttribute('disabled');
			val.value="获取验证码";
			timer=60;
			oBtn.style.background="#ffba16";
		}else{
			val.setAttribute('disabled', true); 
			val.value='重新发送' + timer + 's'; 
			timer--; 
			oBtn.style.background="#ccc";
			setTimeout(function(){
				settime(val);
			},1000);
		}
}	
	
	
//键盘输入
window.onload=function(){
	var oInput=document.getElementById('Tel');
	var oDel=document.getElementById('del');
	var oNum=document.querySelectorAll('#shuzi span');
	    for(var i=0;i<oNum.length;i++){
	        oNum[i].onclick=function(){
	            oInput.value+=this.innerHTML;
	        }
	    }
	//长按清空内容
	oDel.addEventListener("longtap",function () {
	 	oInput.value='';
	});
	//点击删除
	oDel.onclick=function(){
		var str=oInput.value;
		del=str.substring(0,str.length - 1);
		oInput.value=del;
	}
		
        
}

