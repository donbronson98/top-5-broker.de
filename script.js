document.getElementsByClassName('mobile-bottom-nav')[0].onclick = function(){mobileMenu()}

function mobileMenu() {
    if(window.getComputedStyle(document.getElementsByClassName('mobile-menu')[0], null).display=='none') {
        document.getElementsByClassName('mobile-menu')[0].style.display = 'flex';
        
        //mobile bar animation
        document.getElementsByClassName('mobile-bar')[1].style.backgroundColor = 'transparent';
        document.getElementsByClassName('mobile-bar')[0].style.transform = 'translateY(10px) rotate(45deg)';
        document.getElementsByClassName('mobile-bar')[2].style.transform = 'translateY(-10px) rotate(-45deg)';
    }
    else {
        document.getElementsByClassName('mobile-menu')[0].style.display = 'none';

        //mobile bar animation
        document.getElementsByClassName('mobile-bar')[1].style.backgroundColor = '#000000';
        document.getElementsByClassName('mobile-bar')[0].style.transform = 'none';
        document.getElementsByClassName('mobile-bar')[2].style.transform = 'none';
    }
}