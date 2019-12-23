function trans()
{
    document.getElementById("trans-slide").style.animationName = "animate" ;
    window.setTimeout(func,1000);
    function func()
    {
        document.getElementById("container").style.display = "none" ;
        document.getElementById("loading").style.display = "block" ;
    }

    setTimeout(function(){
        reset_function() ;
    },5000);
}
function reset_function()
{
    var reset = document.getElementById("trans-slide") ;
    reset.style.animation = "none" ;
    reset.offsetHeight ;
    reset.style.animation = null ;
    document.getElementById("container").style.display = "block" ;
    document.getElementById("loading").style.display = "none" ;
}