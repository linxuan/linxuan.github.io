$(document).ready(function(){!function(){var t=".post-toc",a=$(t),e=".active-current";function i(){$(t+" "+e).removeClass(e.substring(1))}a.on("activate.bs.scrollspy",function(){var e=$(t+" .active").last();i(),e.addClass("active-current"),a.scrollTop(e.offset().top-a.offset().top+a.scrollTop()-a.height()/2)}).on("clear.bs.scrollspy",i),$("body").scrollspy({target:t})}()}),$(document).ready(function(){var t=$("html"),a=$.isFunction(t.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this);if(!t.hasClass("sidebar-nav-active")){var e=$(".sidebar-panel-active"),i=$("."+t.data("target"));a?e.velocity("transition.slideUpOut",200,function(){i.velocity("stop").velocity("transition.slideDownIn",200).addClass("sidebar-panel-active")}):e.animate({opacity:0},200,function(){e.hide(),i.stop().css({opacity:0,display:"block"}).animate({opacity:1},200,function(){e.removeClass("sidebar-panel-active"),i.addClass("sidebar-panel-active")})}),t.siblings().removeClass("sidebar-nav-active"),t.addClass("sidebar-nav-active")}}),$(".post-toc a").on("click",function(e){e.preventDefault();var i=NexT.utils.escapeSelector(this.getAttribute("href")),s=$(i).offset().top;a?t.velocity("stop").velocity("scroll",{offset:s+"px",mobileHA:!1}):$("html, body").stop().animate({scrollTop:s},500)});var e=$(".post-toc-content"),i="post"===CONFIG.sidebar.display||"always"===CONFIG.sidebar.display,s=e.length>0&&e.html().trim().length>0;i&&s&&(CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar())});