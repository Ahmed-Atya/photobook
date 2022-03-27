
var list =document.querySelector('.list'),
    listNav = document.querySelector('.list-nav');
//Showing the Menu
    list.addEventListener('click',showMenu);

    function showMenu(){
      listNav.style.display="block";
      console.log("success");
    }

// Closing the Menu

    var close = document.querySelector('.fa-close').addEventListener('click',closeMenu);

    function closeMenu(){
      listNav.style.display="none";
    }