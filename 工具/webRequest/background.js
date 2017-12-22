
var string="# SSMP接口文档\n\n"
var newLine = "\n\n"
var tab = "  ";
var count = 0;

function getDetail(detail){
    var string = '- path';
    string += detail.url+newLine
            + tab + "method:"+detail.method + newLine;
    return string;
}

//监听所有请求  
console.log('监控请求');
chrome.webRequest.onBeforeRequest.addListener (  
    function(details) {  
        chrome.tabs.query({active:true},function(tab){  
            // 当前页面的url  
            var pageUrl = tab[0].url;  
            //   console.log("current url -> " + pageUrl); 
            
            chrome.browserAction.setBadgeText({text:''+(++count)})
            string += getDetail(details);
              console.log(details);
            //   console.log("current url -> " , details.requestBody.formData);  
          });  
    
      },  
         
      {urls:["*://ssmpsit.cnsuning.com/ssmp-web/*","*://dippre.cnsuning.com/*"]},  //监听页面请求,你也可以通过*来匹配。  
      ["blocking","requestBody"]   
  );  
  chrome.webRequest.onCompleted.addListener (  
    function(details) {  
        chrome.tabs.query({active:true},function(tab){  
            // 当前页面的url  
            var pageUrl = tab[0].url;  
            console.log('完成:',details);
        });  
        return details;
    },  
    {urls:["*://ssmpsit.cnsuning.com/ssmp-web/*","*://dippre.cnsuning.com/*"]},  
    ["responseHeaders"]   
);  

// setTimeout(() => {
//     var blob = new Blob([string], {type: "text/plain;charset=utf-8"});
//     saveAs(blob, "hel.md");
// }, 15000);