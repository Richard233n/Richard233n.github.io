var posts=["2024/05/15/vscode美化/vscode常用的快捷键/","2023/05/16/Hexo/hexo初始化/","2022/05/12/Hexo/Hexo部署/","2023/05/16/Hexo/博客自定义功能/","2024/05/15/Hexo/如何在hexo文章中添加视频播放器/","2023/05/16/Hexo/hexo自定义/","2024/05/18/编程学习/TailwindCSS/","2024/07/11/编程学习/vscode错误解决办法/","2024/05/15/前端开发/前端面试题/","2024/05/31/游戏相关/森林之子/AutoPickUp/","2024/05/22/游戏相关/森林之子/Sort相关指令/","2024/05/24/游戏相关/森林之子/所有16个蓝图控制台命令和地图位置/","2024/05/24/游戏相关/森林之子/所有7个神器碎片控制台命令和地图位置/","2024/05/04/游戏相关/森林之子/森林之子指令分享/","2024/05/04/游戏相关/森林之子/森林之子Mod分享/","2024/05/22/游戏相关/森林之子/森林之子指令大全/","2024/05/05/游戏相关/森林之子/森林之子物品id/","2024/05/13/游戏相关/森林之子/森林之子蓝图位置及代码/","2024/05/15/编程学习/Github/GitHub新闻/","2024/05/07/编程学习/Github/Git学习笔记/","2024/05/18/编程学习/Github/如何克隆指定的git分支/","2024/05/17/编程学习/Vue项目/vue-shop项目笔记1/","2024/05/17/编程学习/Vue项目/vue-shop项目笔记2/","2024/05/17/编程学习/Vue项目/vue-shop项目笔记3/","2024/05/10/编程学习/vue学习笔记/vue学习笔记(一)/","2024/05/10/编程学习/vue学习笔记/vue学习笔记(二)/","2024/05/17/编程学习/vue学习笔记/vue学习笔记-三/","2024/05/17/编程学习/vue学习笔记/vue学习笔记-四/","2024/05/10/编程学习/vue-shop项目笔记/vue项目学习笔记2/","2024/05/11/编程学习/vue-shop项目笔记/vue项目学习笔记3/","2024/05/10/编程学习/vue-shop项目笔记/vue项目学习笔记1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };