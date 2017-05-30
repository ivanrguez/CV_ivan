/*scrool*/
var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener('click', function(event){
        deleteActiveClass();

        if (Modernizr.classList) {
            this.classList.add('active');
        } else {
            this.className += ' active';
        }

        var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
        if (sectionToGo.length > 1) {
            event.preventDefault();
            var goTo = sectionToGo[sectionToGo.length - 1];
            getElementByIdAndScroll(goTo);
        }
    });
}

function getElementByIdAndScroll(name) {
    var element;
    if (name == '') {
        element = document.getElementsByClassName('header')[0];
    } else {
        element = document.getElementById(name);
    }

    scrollToElement(element);
}

function scrollToElement(element) {
    var jump = parseInt(element.getBoundingClientRect().top * 0.3);
    document.body.scrollTop += jump;

    if(!element.lastJump || element.lastJump > Math.abs(jump)) {
        element.lastJump = Math.abs(jump);

        setTimeout(function() {
            scrollToElement(element);
        }, "60");
    } else {
        element.lastJump = null;
    }
}

function deleteActiveClass() {
    document.getElementsByClassName('navbar-item active')[0].classList.remove('active');
}

var cumulativeOffset = function(element) {
    var top = 0;
    do {
        top += element.offsetTop || 0;
        element = element.offsetParent;
    } while(element);

    return top;
};

var offsetQuienSoy = cumulativeOffset(document.getElementById('quien-soy')) - 59;
var offsetEstudios = cumulativeOffset(document.getElementById('estudios')) - 59;
var offsetExperiencia = cumulativeOffset(document.getElementById('experiencia')) - 59;
var offsetSobreMi = cumulativeOffset(document.getElementById('sobre-mi')) - 59;


window.addEventListener('scroll', changeMenuStyle);

function changeMenuStyle(event) {
    var previous;


    if (window.pageYOffset >= 0 && window.pageYOffset < offsetQuienSoy) {
        if(!previous) {
            previous = 1;
        } else if(previous == 1) {
            return false;
        }

        deleteActiveClass();

       if(Modernizr.classList) { 
        document.querySelector('a[href="#"]').parentNode.classList.add("active");
    } else {
            document.querySelector('a[href="#"]').parentNode.className += " active";
        }

    } else if(window.pageYOffset >= offsetQuienSoy && window.pageYOffset < offsetEstudios) {
        if(!previous) {
            previous = 2;
        } else if(previous == 2) {
            return false;
        }

        deleteActiveClass();
        if(Modernizr.classList) {
            document.querySelector('a[href$="quien-soy"]').parentNode.classList.add("active");
        } else {
            document.querySelector('a[href$="quien-soy"]').parentNode.className += " active";
        } 

    } else if (window.pageYOffset >= offsetEstudios && window.pageYOffset < offsetExperiencia) {
        if(!previous) {
            previous = 3;
        } else if(previous == 3) {
            return false;
        }

        deleteActiveClass();
        if(Modernizr.classList) {
        document.querySelector('a[href$="estudios"]').parentNode.classList.add("active");
        } else {
            document.querySelector('a[href$="estudios"]').parentNode.className += " active";
        } 

    } else if (window.pageYOffset >= offsetExperiencia && window.pageYOffset < offsetSobreMi) {
        if(!previous) {
            previous = 4;
        } else if(previous == 4) {
            return false;
        }

        deleteActiveClass();
        if(Modernizr.classList) {

        document.querySelector('a[href$="experiencia"]').parentNode.classList.add("active");
        } else {
            document.querySelector('a[href$="experiencia"]').parentNode.className += " active";
        } 

    }else if (window.pageYOffset >= offsetSobreMi){
        if(!previous) {
            previous = 5;
        } else if(previous == 5) {
            return false;
        }

        deleteActiveClass();
        
        if(Modernizr.classList) {
        document.querySelector('a[href$="sobre-mi"]').parentNode.classList.add("active");
    } else {
            document.querySelector('a[href$="sobre-mi"]').parentNode.className += " active";
        } 
    }
}
/*fin scrool*/
/*bajar despacio*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$("#firstpane p.menu_head").click(function()
{
    $(this).next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
    $(this).siblings();
});
/*fin bajar despacio*/
/*enlace linkedin*/
function funcionLinkedin(url){
window.open('https://es.linkedin.com/in/ivan-rodriguez-pulido','_blank');
}
/*fin enlace linkedin*/