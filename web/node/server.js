var ws = require(__dirname + '/lib/ws/server');  
//包含刚刚下下来的库  __dirname 表示当前目录 不管你文件放在哪里，一定要包含你要用到的库，这里我是包含了lib/ws下的server.js   
var server = ws.createServer();  
  
server.addListener('connection', function(conn){  //监听是否有新的连接   
    console.log('connection....');  
      
    //conns.push(conn);   
      
    conn.addListener('message',function(msg){  
            //监听是否有新的消息到达   
        console.log(msg);  
          
        /*for(var i=0; i<conns.length; i++){ 
            if(conns[i]!=conn){ 
                conns[i].send(msg); 
            } 
        }*/  
 
                //发送广播   
        server.broadcast(msg);   
    });  
});  
//设定监听的端口   
server.listen(8000,"127.0.0.1");  
console.log('running......');  