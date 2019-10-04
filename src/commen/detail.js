var EventUtil={
    //阻止冒泡  捕获
    stopPropagation:function(event){
        if(event.stopPropagation){
           event.stopPropagation;
        }else{
           event.cancelBubble=true;
        }
    },
    //阻止默认事件
    preventDefault:function(event){
        if(event.preventDefault){
             event.preventDefault;
        }else{
             event.returnValue=true;
        }
    },
    //获得事件
    GetEvent:function(event){
         return event?event:window.event;
    },
    //添加事件
    addEventListener:function(element,type,handle){
          //dom2级 事件处理程序，false表示在冒泡阶段处理事件程序
           if(element.addEventListener){
              element.addEventListener(type,handle,true);
           }
           //IE 事件处理程序
           else if(element.attachEvent){
              element.attachEvent("on"+type,handle);
           }
           //dom 0级
           else{
             element["on"+$.type]=handle;
           }

    },
    //移除事件
    removeEvent:function(element,type,handle){
        if(element.removeEventListener){
            element.removeEventListener(tyle,handle);
        }
        // IE 事件处理程序
        else if(elemetn.detachEvent){
            element.detachEvent("on"+type,handle);
        }
        //dom 0级
        else{
           element["on"+$.type]=null;
        }
    },
    //得到目标
    getTarget:function(event){
         return event.target||event.srcElement;
    }

}



