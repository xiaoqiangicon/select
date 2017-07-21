function ajax(method,url,data,fn){
	if(window.XMLHttpRequest){
		var oXhr=new XMLHttpRequest();
	}else{
		var oXhr=new ActiveObject('Microsoft.XMLHTTP');
	}

	if(method=='GET'&& data){
		url+='?'+data;
	}
	oXhr.open(method,url,true);

	if(method=='GET'){
		oXhr.send();
	}else{
		oXhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		oXhr.send(data);
	}

	oXhr.onreadystatechange=function(){
		if(oXhr.readyState==4){
			if(oXhr.status==200){
				fn(oXhr.responseText);
			}
		}
	}
}