var counter=1;
var size=640;
document.querySelector('.slider').style.transform='translate('+(-size*counter)+'px)';


document.querySelectorAll('.btn')[1].addEventListener("click",function(){
    document.querySelector('.slider').style.transition='transform 0.5s ease-in-out';
counter ++;
console.log("next");
console.log(counter);
document.querySelector('.slider').style.transform='translate('+(-size*counter)+'px)';
if(counter==5)
{
    document.querySelector('.slider').style.transition='none';
        counter=1;
        document.querySelector('.slider').style.transform='translate('+(-size*counter)+'px)';

}
});
document.querySelectorAll('.btn')[0].addEventListener("click",function(){
    document.querySelector('.slider').style.transition='transform 0.5s ease-in-out';
    counter --;
    console.log("next");
    document.querySelector('.slider').style.transform='translate('+(-size*counter)+'px)';
    if(counter==0)
    {
        document.querySelector('.slider').style.transition='none';
        counter=4;
        document.querySelector('.slider').style.transform='translate('+(-size*counter)+'px)';
    }
    });