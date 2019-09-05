//helpCenter
let oHelpCenter=document.getElementsByClassName("helpCenter");
let oHelpCenter_next=document.getElementsByClassName("helpCenter_next");
oHelpCenter[0].onmouseover=function(){
	oHelpCenter_next[0].style.display="block";
	oHelpCenter_next[0].onmouseover=function(){
		oHelpCenter_next[0].style.display="block";
	}
	oHelpCenter_next[0].onmouseout=function(){
		oHelpCenter_next[0].style.display="none";
	}
	oHelpCenter[0].onmouseout=function(){
		oHelpCenter_next[0].style.display="none";
	}
}
// subscribeToEmagazines
let oSubscribeToEmagazines=document.getElementsByClassName("subscribeToEmagazines");
let oSubscribeToEmagazines_next=document.getElementsByClassName("subscribeToEmagazines_next");
oSubscribeToEmagazines[0].onmouseover=function(){
	oSubscribeToEmagazines_next[0].style.display="block";
	 oSubscribeToEmagazines_next[0].onmouseover=function(){
		 oSubscribeToEmagazines_next[0].style.display="block";
	}
	 oSubscribeToEmagazines_next[0].onmouseout=function(){
		 oSubscribeToEmagazines_next[0].style.display="none";
	}
	oSubscribeToEmagazines[0].onmouseout=function(){
		 oSubscribeToEmagazines_next[0].style.display="none";
	}
}
// loginAndRegister
let oLoginAndRegister=document.getElementsByClassName("loginAndRegister");
let oLoginAndRegister_next=document.getElementsByClassName("loginAndRegister_next");
oLoginAndRegister[0].onmouseover=function(){
	oLoginAndRegister_next[0].style.display="block";
	 oLoginAndRegister_next[0].onmouseover=function(){
		 oLoginAndRegister_next[0].style.display="block";
	}
	 oLoginAndRegister_next[0].onmouseout=function(){
		 oLoginAndRegister_next[0].style.display="none";
	}
	oLoginAndRegister[0].onmouseout=function(){
		 oLoginAndRegister_next[0].style.display="none";
	}
}
// myShoppingBag
let oMyShoppingBag=document.getElementsByClassName("myShoppingBag");
let oMyShoppingBag_next=document.getElementsByClassName("myShoppingBag_next");
oMyShoppingBag[0].onmouseover=function(){
	oMyShoppingBag_next[0].style.display="block";
	oMyShoppingBag_next[0].onmouseover=function(){
		oMyShoppingBag_next[0].style.display="block";
	}
	oMyShoppingBag_next[0].onmouseout=function(){
		oMyShoppingBag_next[0].style.display="none";
	}
	oMyShoppingBag[0].onmouseout=function(){
		 oMyShoppingBag_next[0].style.display="none";
	}
}

//固定导航栏
// window.onscroll=function(){
// 	_top=document.body.scrollTop||document.documentElement.scrollTop;
// 	if(_top==96){
// 		let oNav=document.getElementsByTagName("nav");
// 		oNav[0].style.position="fixed";
// 		oNav[0].style.left="0";
// 		oNav[0].style.left="0";
// 	}
// }

// news
let oNews_li=document.getElementsByClassName("news_li");
let oNews=document.getElementsByClassName("news");
oNews_li[0].onmouseover=function(){
	oNews[0].style.display="block";
	oNews[0].onmouseover=function(){
		oNews[0].style.display="block";
	}
	oNews[0].onmouseout=function(){
		oNews[0].style.display="none";
	}
	oNews_li[0].onmouseout=function(){
		oNews[0].style.display="none";
	}
}
// cosmetics
let oCosmetics_li=document.getElementsByClassName("cosmetics_li");
let oCosmetics=document.getElementsByClassName("cosmetics");
oCosmetics_li[0].onmouseover=function(){
	oCosmetics[0].style.display="block";
	oCosmetics[0].onmouseover=function(){
		oCosmetics[0].style.display="block";
	}
	oCosmetics[0].onmouseout=function(){
		oCosmetics[0].style.display="none";
	}
	oCosmetics_li[0].onmouseout=function(){
		oCosmetics[0].style.display="none";
	}
}
// skinCare
let oSkinCare_li=document.getElementsByClassName("skinCare_li");
let oSkinCare=document.getElementsByClassName("skinCare");
oSkinCare_li[0].onmouseover=function(){
	oSkinCare[0].style.display="block";
	oSkinCare[0].onmouseover=function(){
		oSkinCare[0].style.display="block";
	}
	oSkinCare[0].onmouseout=function(){
		oSkinCare[0].style.display="none";
	}
	oSkinCare_li[0].onmouseout=function(){
		oSkinCare[0].style.display="none";
	}
}
// Perfume
let oPerfume_li=document.getElementsByClassName("Perfume_li");
let oPerfume=document.getElementsByClassName("perfume");
oPerfume_li[0].onmouseover=function(){
	oPerfume[0].style.display="block";
	oPerfume[0].onmouseover=function(){
		oPerfume[0].style.display="block";
	}
	oPerfume[0].onmouseout=function(){
		oPerfume[0].style.display="none";
	}
	oPerfume_li[0].onmouseout=function(){
		oPerfume[0].style.display="none";
	}
}
// officialWebsiteCourtesy
let oOfficialWebsiteCourtesy_li=document.getElementsByClassName("officialWebsiteCourtesy_li");
let oOfficialWebsiteCourtesy=document.getElementsByClassName("officialWebsiteCourtesy");
oOfficialWebsiteCourtesy_li[0].onmouseover=function(){
	oOfficialWebsiteCourtesy[0].style.display="block";
	oOfficialWebsiteCourtesy[0].onmouseover=function(){
		oOfficialWebsiteCourtesy[0].style.display="block";
	}
	oOfficialWebsiteCourtesy[0].onmouseout=function(){
		oOfficialWebsiteCourtesy[0].style.display="none";
	}
	oOfficialWebsiteCourtesy_li[0].onmouseout=function(){
		oOfficialWebsiteCourtesy[0].style.display="none";
	}
}
// redTube
$(function(){
	$(".btn-box").click(function(){
		$(this).css({
			borderBottom:"none",
			outline:"none"
		});
		let oInput=$('<input type="text">');
		oInput.appendTo($("nav"));
		oInput.attr({
			"placeholder":"红管",
			"autofocus":"autofocus"
		});
		oInput.css({
			width:"1099px",
			height:"78px",
			background:"white",
			position:"absolute",
			left:0,
			top:42,
			paddingLeft:250,
			fontSize:18,
			outline:"none",
			border:"none",
			borderBottom:"1px",
			borderBottomColor:"#cccccc",
			borderBottomStyle:"solid"
		}); 
		
		// $(".btn-box").click(function(){
		// 	$("oInput").css({
		// 		display:"none"
		// 	});
		// });
		
		$("#bannerImg").css({
			position:"relative",
			left:0,
			top:78
		});
		
		let oDiv=$("<div></div>");
		oDiv.appendTo($("body"));
		oDiv.css({
			width:1349,
			height:420,
			background:"black",
			opacity:.7,
			position:"fixed",
			left:0,
			bottom:0
		});
	});
});

//轮播图
class Banner{
	constructor(newOimg){
		this.index=0;
		this.oImg=newOimg;
		this.oImg.style.background="url(img/banner"+this.index+".jpg)";
	}
	//设置div此时的背景图片状态
	setOimgBackground(){
		this.oImg.style.background="url(img/banner"+this.index+".jpg)";
	}
	//点击下一个按钮
	nextBtn(){
		let nextBtn=document.getElementsByClassName("next");
		let that=this;
		nextBtn[0].onclick=function(){
			that.index++;
			if(that.index==7){
				that.index=0;
			}
			that.setOimgBackground();
		}
	}
	//点击上一个按钮
	previousBtn(){
		let previousBtn=document.getElementsByClassName("prev");
		let that=this;
		previousBtn[0].onclick=function(){
			that.index--;
			if(that.index==-1){
				that.index=6;
			}
			that.setOimgBackground();
		}
	}
	//设置定时轮播
	autoMove(){
		let that=this;
		setInterval(function(){
			that.index++;
			if(that.index==7 ){
				that.index=0;
			}
			that.setOimgBackground();
		},5000);
	}
}
let oBannerImg=document.getElementById("bannerImg");
let oBanner = new Banner(oBannerImg);
oBanner.nextBtn();
oBanner.previousBtn();
oBanner.autoMove();

// section部分的小选项卡加轮播图
// let arr_Color=["#9f2e21","#c61b16","#e62026","#7f1d00","#7a2c25","#660500","#9b5b55","#db3218","#bf3118","#731505","#bc0b13","#b75b5c","#9c4348","#870d2f","#b4002f","#a30938","#eb5883","#541927","#bd445c","#871f23","#ce7b9d","#d48b9f","#c9385b","#97336f","#9f2e21","#8b3e3d","#f2643e","#e33f2d","#ec425a"];
// let oSpan_list=document.getElementsByClassName("span_list");
// window.onload=function(){
// 	for(var i=0;i<7;i++){
// 	// oSpan_list[i].index=i;
// 	oSpan_list[i].style.background=arr_Color[i];
// 	}
// }	
// 	
// let arr=[#8b4a56,#6f2120,#562015,#a9332a,#a9332a,#7d040a,#94030e,#af090f,#af2c43,#b93a54,#be5f69,#a24266,#9d002d,#8e0227,#65003c,#470b1c];
// let oSpan_list=document.getElementsByClassName("span_list");
// window.onload=function(){
// 	for(var i=0;i<7;i++){
// 	// oSpan_list[i].index=i;
// 	oSpan_list[i].style.background=arr_Color[i];
// 	}
// }
class Paging {
		constructor(newLi) {
			this.index = 0;
			this.arrJson = [];
			this.arrOli = newLi;
		}
		//获取数据
		getData() {
			let that = this;
			let xhr = new XMLHttpRequest();
			xhr.open("get", "list_Color.json", true);
			xhr.onreadystatechange = function() {
				if (xhr.status == 200 && xhr.readyState == 4) {
					that.load(xhr.responseText);
				}
			}
			xhr.send();
		}
		//加载数据
		load(str) {
			this.arrJson = JSON.parse(str);
		}
		//分页赋值
		setPagination() {
			for (let i = this.index * 7, j = 0; i < this.index * 7 + 7; i++, j++) {
				this.arrOli[j].firstElementChild.style.background = this.arrJson[i].color;
			}
		}
		next() {
			let btnNext = document.getElementById("btn-next");
			let that = this;
			btnNext.onclick = function() {
				that.index++;
				if (that.index == that.arrJson.length / 7) {
					that.index = 0;
				}
				that.setPagination();
			}
		}
		previous() {
			let bntPrev = document.getElementById("btn-previous");
			let that = this;
			bntPrev.onclick = function() {
				that.index--;
				if (that.index == -1) {
					that.index = that.arrJson.length / 7 - 1;
				}
				that.setPagination();
			}
		}
	}
	let oLi = document.getElementsByClassName("li_list");
	let p = new Paging(oLi);
	p.getData();
	p.next();
	p.previous();
//video
// video_left
let o_video_left_top=document.getElementsByClassName("_video_left_top")[0];
let o_video_left_top_hover=document.getElementsByClassName("_video_left_top_hover")[0];
let o_video_left_top_img=document.getElementsByClassName("_video_left_top_img")[0];
o_video_left_top.onmouseover=function(){
	o_video_left_top_img.style.display="none";
	o_video_left_top_hover.style.opacity=1;
}
o_video_left_top.onmouseout=function(){
	o_video_left_top_img.style.display="block";
	o_video_left_top_hover.style.opacity=0;
}
// video_right
let o_video_right=document.getElementsByClassName("_video_right")[0];
let oHover_before=document.getElementsByClassName("hover_before")[0];
let oHover_after=document.getElementsByClassName("hover_after")[0];
o_video_right.onmouseover=function(){
	oHover_before.style.display="none";
	oHover_after.style.display="block";
}
o_video_right.onmouseout=function(){
	oHover_before.style.display="block";
	oHover_after.style.display="none";
}


let arr_Color=["#9f2e21","#c61b16","#e62026","#7f1d00","#7a2c25","#660500","#9b5b55","#db3218","#bf3118","#731505","#bc0b13","#b75b5c","#9c4348","#870d2f","#b4002f","#a30938","#eb5883","#541927","#bd445c","#871f23","#ce7b9d","#d48b9f","#c9385b","#97336f","#9f2e21","#8b3e3d","#f2643e","#e33f2d","#ec425a"];
let oChoose_list=document.getElementsByClassName("choose_list");
window.onload=function(){
	for(var i=0;i<7;i++){
	// oSpan_list[i].index=i;
	oChoose_list[i].style.background=arr_Color[i];
	}
}	

// let a=[#d0ab87,#e0b88a,#b98d69,#c1956f,#d0ab87,#d0ab87,#e0b88a];

let oGirl_perfume_left=document.getElementsByClassName("girl_perfume_left")[0];
let oGirl_perfume_left_img=document.getElementsByClassName("girl_perfume_left_img")[0];
let oGirl_perfume_left_hover=document.getElementsByClassName("girl_perfume_left_hover")[0];
oGirl_perfume_left.onmouseover=function(){
	oGirl_perfume_left_img.style.display="none";
	oGirl_perfume_left_hover.style.display="block";
}
oGirl_perfume_left.onmouseout=function(){
	oGirl_perfume_left_img.style.display="block";
	oGirl_perfume_left_hover.style.display="none";
}