var promodoro = document.getElementById('promodoro')
var longbreak = document.getElementById('longbreak')
var shortbreak = document.getElementById('shortbreak')

var start = document.getElementById('start')
var stop = document.getElementById('stop')
var reset = document.getElementById('reset')

var first = document.getElementById('first')
var second = document.getElementById('second')
var third = document.getElementById('third')




promodoro.addEventListener('click',function (){
first.style.display='block'
second.style.display='none'
third.style.display='none'
       
start.addEventListener('click', time,{once:true});
},{once:true})
shortbreak.addEventListener('click',function () {

    first.style.display='none'
    second.style.display='block'
    third.style.display='none'
    
    start.addEventListener('click', long, {once:true})
    }, {once:true})

 longbreak.addEventListener('click',function(){
        
    first.style.display='none'
    second.style.display='none'
    third.style.display='block'
    
    start.addEventListener('click', short,{once:true})
        }, {once:true})
    
        var firstnum = Array.from(first.textContent).filter(elem=> {
            return  elem!=':';})
            
        var secondnum = Array.from(second.textContent).filter(elem=> {
            return  elem!=':';})
            
        var thirdnum = Array.from(third.textContent).filter(elem=> {
            return  elem!=':';})
        
 function time(){
        var nums = firstnum
            stop.addEventListener('click',timestop )
            var interval = setInterval(downsec, 1000); 

    function timestop(x){      
            start.addEventListener('click', time,{once:true});
            var x=interval
        clearInterval(x)
            }
            
    function downsec(){
             nums[3]=nums[3]-1;
            if(nums[3]==-1)
            {
                nums[3]=9;
                nums[2]=nums[2]-1;
                if(nums[2]==-1){
                    nums[2]=5;
                    nums[1]=nums[1]-1;
                    if(nums[1]==-1){
                        nums[1]=9;
                        nums[0]=nums[0]-1;
                        if(nums[0]=-1)
                        nums[0]=0;
                    }
                }
            }
            
        
        first.innerHTML=nums[0]+nums[1] + ':' + nums[2]+nums[3]
    }
         }
         function long(){
             
        var nums = secondnum
        stop.addEventListener('click',timestop )
        var interval = setInterval(downlong, 1000); 

function timestop(x){      
        start.addEventListener('click', long,{once:true});
        var x=interval
    clearInterval(x)
        }
        
        
function downlong(){
         nums[3]=nums[3]-1;
        if(nums[3]==-1)
        {
            nums[3]=9;
            nums[2]=nums[2]-1;
            if(nums[2]==-1){
                nums[2]=5;
                nums[1]=nums[1]-1;
                if(nums[1]==-1){
                    nums[1]=9;
                    nums[0]=nums[0]-1;
                    if(nums[0]=-1)
                    nums[0]=0;
                }
            }
        }
        
    
    second.innerHTML=nums[0]+nums[1] + ':' + nums[2]+nums[3]
}
         }
         function short(){
             
            var nums = thirdnum
            stop.addEventListener('click',timestop )
            var interval = setInterval(downsec, 1000); 
    
    function timestop(x){      
            start.addEventListener('click', short,{once:true});
            var x=interval
        clearInterval(x)
            }
            
            
    function downsec(){
             nums[3]=nums[3]-1;
            if(nums[3]==-1)
            {
                nums[3]=9;
                nums[2]=nums[2]-1;
                if(nums[2]==-1){
                    nums[2]=5;
                    nums[1]=nums[1]-1;
                    if(nums[1]==-1){
                        nums[1]=9;
                        nums[0]=nums[0]-1;
                        if(nums[0]=-1)
                        nums[0]=0;
                    }
                }
            }
            
        
        third.innerHTML=nums[0]+nums[1] + ':' + nums[2]+nums[3]
    }
             }