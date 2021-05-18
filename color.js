//js 파일엔 <script></script> 들어가면 안 된다


var Links = {
    setColor: function(color){
    var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            console.log(alist[i]);
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}
var Body = {
    setColor: function BodySetColor(color){ 
    document.querySelector('body').style.color = color;
    }, // , 꼭 있어야 함 객체 나열할 때 
    setBackgroundColor : function BodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor = color;
    }
}

function nightDayHandler(self){ //2. self넣어줌 
    var target = document.querySelector('body');
    if (self.value === 'night'){ //3. this -> self 바꿔줌
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        //배열반복 추가
        Links.setColor('powderblue');
    }else {
        target.style.backgroundColor='white';
        target.style.color='black';
        self.value = 'night';
        //배열반복 추가
        Links.setColor('hotpink');
    }
}