#thirdupload
新增router文件夹，内含index.js
res.download('Desktop/nodejsDownloadServer/yourfilename.extension','yourfilename.extension');//某路径下文件名字，返回到客户端具体的文件名字
只要用户请求“/”空白路径即可返回规定路径下需要下载的文件
#secondupload
新增本地IP地址获取，并打印，方便查看
var os = require('os');
var IPv4,hostName;
hostName=os.hostname();
for(var i=0;i<os.networkInterfaces().en0.length;i++){
    if(os.networkInterfaces().en0[i].family=='IPv4'){
        IPv4=os.networkInterfaces().en0[i].address;
    }
}  
#FirstUpload
this js port is 2000,you can make download server
# nodejsDownloadServer
make a nodejs download serve
