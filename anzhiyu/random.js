var posts=["2022/05/12/Hexo/Hexo部署/","2024/05/04/游戏相关/森林之子Mod分享/","2024/05/04/游戏相关/森林之子指令分享/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };