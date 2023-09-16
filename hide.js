text = '<p style="display:block; visibility:visible;margin=0px; padding:0px; z-index:999;">کلیه حقوق این سایت مربوط به کیف انجلیک می باشد طراحی و توسعه <a href="http://link.ir/">علی ارمان</a></p>'
var my_footer = document.getElementsByClassName( "footer-container" );
my_footer[0].innerHTML += text;
document.getElementsByTagName( "BODY" )[ 0 ].style.display = "none";
function check_license ()
{
    console.log( "text" );
    var check_id = document.getElementsByClassName( "footer-container" )[ 0 ].lastChild;
    if ( check_id.style.display != "block" || check_id.style.visibility != "visible" )
    {
        console.log( "طراحی علی ارمان" )
        check_id.style.display = "block";
        check_id.style.visibility = "visible";
        check_id.style.margin = "0px";
        check_id.style.padding = "0px";
    }
    const container = document.getElementsByClassName( "footer-container" );
    if ( !container.textContent.includes( 'علی ارمان' ) )
    {
        document.getElementsByTagName( "BODY" )[ 0 ].style.display = "none";
        console.log( 'طراحی علی آرمان' );
    }
    else
    {
        document.getElementsByTagName( "BODY" )[ 0 ].style.display = "block";

    }
}
setInterval( check_license, 1000 );