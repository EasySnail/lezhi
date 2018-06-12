
var easy = {
	name:'easy',
	test1:function(){
	
    },
    	getUrlParam:function(name){
    		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
   		var r = window.location.search.substr(1).match(reg);  
   		if (r != null) return unescape(r[2]); return null;
    	},
	toast:function(text){
    		if ($("#easy-toast").length > 0) {
    			$("#easy-toast").remove();
    		}
    		var toastbg = $("<div id='easy-toast'></div>");
    		toastbg.css({"position":"fixed","bottom":"18%","text-align":"center","width":"100%","z-index":995});
    		var toastdom = $("<div></div>").text(text);
    		toastdom.css({"opacity":"0","border-radius":"8px","line-height":"18px","max-width":"70%","padding":"12px  20px","color":"white","background-color":"rgba(0,0,0,0.8)","display":"inline-block","font-size":"1.0em"});
    		toastbg.append(toastdom);
    		$('body').prepend(toastbg);
    		toastdom.animate({opacity:'1.0'},"slow");
    		toastdom.animate({opacity:"1.0"},2000);
    		toastdom.animate({opacity:'0'},"slow",function(){
    			toastdom.remove();
    		});
        		
   	},
   	
	showBackdrop:function(backdropId){
   	 	
	},
	closeBackdrop:function(backdropId){
		var dom = $("#"+backdropId); 
		if (dom.length>0) {
			dom.animate({opacity:"0"},"fast",function(){
				dom.hide();	
			});	
		}
	}
};
$(document).ready(function() {	
	
	var backdrops = $(".easy-backdrop-bg");
	if (backdrops.length > 0) {
		$("[data-ebackdrop]").click(function(){
			var bdId = "#"+$(this).attr("data-ebackdrop");
			$(bdId).show();
			$(bdId).animate({opacity:"1.0"},"fast");
		});	
		var backdropContent = $('.easy-backdrop');
		if (backdropContent.length > 0) {
			backdropContent.click(function(e){
				e.stopPropagation();
			});
			var backdropClose = $('.easy-backdrop-close');
			if (backdropClose.length > 0) {
				backdropClose.click(function(e){
					e.stopPropagation();
					var closepbgdom = $(this).parents('.easy-backdrop-bg');
					if (closepbgdom.length > 0) {
						easy.closeBackdrop(closepbgdom.attr('id'));
					}
				});
			}
		}
		backdrops.click(function(){
			easy.closeBackdrop($(this).attr('id'));
		});
		backdrops.css({"align-items":"center","justify-content":"center","display":"flex","display":"-webkit-flex","position":"fixed","top":"0","right":"0","left":"0","bottom":"0","z-index":998,"background-color":"rgba(0,0,0,.3)","opacity":"0"});
		backdrops.hide();
	}
});

var easyauto = (function (document, undefined) {
	//自动执行函数
	
})(document);



