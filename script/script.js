document.addEventListener("DOMContentLoaded", init);
function init() {

window.onscroll = function() {stickyNavBar()};
	  function stickyNavBar() {
	 	    let menuHeight = document.getElementById("menu");
	 	    let sticky = menuHeight.offsetTop;
	 	    if (window.pageYOffset > sticky) {
      		  document.body.style.paddingTop = menuHeight.offsetHeight + 'px';
      		  menuHeight.classList.add("sticky");
    		} 
    		else {
      		  document.body.style.paddingTop = '0px';
      		  menuHeight.classList.remove("sticky");
    		}
	  }

    let colorChanger1 = document.getElementById("change1");
    colorChanger1.onclick = function() {changeColors1()};
    function changeColors1() {
        document.body.style.backgroundColor = "lightSkyBlue";
    }

    let colorChanger2 = document.getElementById("change2");
    colorChanger2.onclick = function() {changeColors2()};
    function changeColors2() {
        document.body.style.backgroundColor = "white";
    }

    let buttons = document.querySelectorAll("div.t-our-company__buttons a.colorModif");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", modif);
        function modif() {
            buttons[i].style.backgroundColor = "royalBlue";
            buttons[i].style.color = "lavender";
        }
    }
        
  

}