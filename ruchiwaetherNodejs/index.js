     const http=require("http");
        const fs=require("fs");
         // const homeFile=fs.readFileSync("home.html","utf-8");
          //  const server=http.createServer((req,res)=>{
                var requests = require("requests");
                const homefile=fs.readFileSync("home.html","utf-8");
                  const server=http.createServer((req,res)=>{
                         if(req.url=="/"){
                          requests(
                            "https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=ccf1d8660495359faa49fd8637b6dd0a"
                             )
                             .on("data", (chunk) => {
                               const objdata = JSON.parse(chunk);
                               const arrData = [objdata];
                                 console.log(arrData[0].main.temp);
                             })
                               .on("end", (err) => {
                                  if (err) return console.log("connection closed due to errors", err);
                                  console.log("end");
                                });
                               
                         }
                   
                  });
                    server.listen(8000,"127.0.0.1");
                       

        