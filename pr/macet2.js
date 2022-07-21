textToSmile=function(s){
	//масив з смайликами. [RegExp для пошуку і заміни смайлика, назва CSS-спрайта, текстовий варіант смайлика] 
	var smile=[[/\:\-\)/g,'sm1',':-)'], [/\;\-\)/g,'sm2',';-)'], [/\:\-D/g,'sm3',':-D']];
	for(var si=0;si<smile.length;si++){
		s=s.replace(smile[si][0],'<span class="'+smile[si][1]+'"><span class="smile"></span></span>');
	}
	return s;
}

insertSmile=function(s){
	var el=document.getElementById('text');
	el.focus();
	if(el.selectionStart!=undefined){
		var p=el.selectionStart;
		el.value=el.value.substring(0,el.selectionStart)+s+el.value.substring(el.selectionEnd,el.value.length);
		el.selectionStart=p+s.length;
		el.selectionEnd=el.selectionStart;
	}else el.value+=s;
}