var posts=["2022/05/12/Hexo/Hexo部署/","2024/05/10/编程学习/vue学习笔记2/","2024/05/10/编程学习/vue学习笔记(一)/","2024/05/07/编程学习/Git学习笔记/","2024/05/05/游戏相关/森林之子物品id/","2024/05/04/游戏相关/森林之子Mod分享/","2024/05/04/游戏相关/森林之子指令分享/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };