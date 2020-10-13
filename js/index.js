window.addEventListener('load', function () {
  //=================== AJOUT DE LA CLASSE .collapsed  et .toggle sur les sections QUAND MEDIA <992px

  function addClass(largeur) {
    const a = document.querySelectorAll('.sousMenu');
    for (let i = 0; i < a.length; i++) {
      if (largeur.matches) {
        if (a[i].className === 'sousMenu') {
          a[i].className += ' collapsed';
        }
      } else {
        a[i].className = 'sousMenu';
      }
    }
    const b = document.querySelectorAll(
      'section:not(:last-child)>div:first-child'
    );
    for (let j = 0; j < b.length; j++) {
      if (largeur.matches) {
        if (b[j].className === '') {
          b[j].className = 'toggle';
        }
      } else {
        b[j].className = '';
      }
    }
  }

  // ================ COLLAPSE DES CATEGORIES ET DU MENU

  const quicknext = document.querySelectorAll('.toggle');
  for (let j = 0; j < quicknext.length; j++) {
    quicknext[j].addEventListener('click', function () {
      //this.classList.toggle("active");
      let content = document.getElementsByClassName('contenu');

      if (content[j].style.display === 'flex') {
        content[j].style.display = 'none';
      } else {
        content[j].style.display = 'flex';
      }
    });
  }
  // ============ COLLAPSE CARTE PORTFOLIO

  const tgl = document.querySelectorAll('.toggleCard');
  for (let i = 0; i < tgl.length; i++) {
    tgl[i].addEventListener('click', function () {
      const content = document.getElementsByClassName('carteVerso');

      if (content[i].style.maxHeight) {
        content[i].style.maxHeight = null;
      } else {
        content[i].style.maxHeight = content[i].scrollHeight + 'px';
        content[i].classList.toggle('ombre');
      }
    });
  }

  //====== ADD CLASSE ZOOMIN OVER PORTFOLIO
  (function () {
    const carte = document.querySelectorAll('.carte');
    for (let i = 0; i < carte.length; i++) {
      carte[i].addEventListener('mouseover', function () {
        this.classList.toggle('zoomIn');
      });
    }
  })();

  //=================== DISPLAY NONE/BLOCK DU MENU SELON MEDIA QUERY
  function changeStyle(largeur) {
    let a = document.querySelector('.menu');
    if (largeur.matches) {
      a.style.display = 'none';
    } else {
      a.style.display = 'block';
    }
  }

  const largeur = window.matchMedia('(max-width: 992px)');

  addClass(largeur);
  largeur.addListener(addClass);

  changeStyle(largeur);
  largeur.addListener(changeStyle);

  //==================== DISPARITION DU SOUS-MENU QUAND ON CLIQUE SUR UN ONGLET
  const sousMenu = document.querySelectorAll('.collapsed');
  for (let i = 0; i < sousMenu.length; i++) {
    sousMenu[i].addEventListener('click', function () {
      const prevDiv = document.querySelector('.menu');
      prevDiv.style.display = 'none';
    });
  }

  //======================== FENETRE CONTACT MODAL
  // Get the modal
  const modal = document.querySelector('.modalWindow');

  // Get the button that opens the modal
  const btn = document.querySelector('.modal-btn');

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal
  btn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  //============== FORMULAIRE
  $(function () {
    $('#contact-form').submit(function (e) {
      e.preventDefault();
      $('.comments').empty();
      var postdata = $('#contact-form').serialize();

      $.ajax({
        type: 'POST',
        url: 'php/contact.php',
        data: postdata,
        dataType: 'json',
        success: function (result) {
          if (result.isSuccess) {
            $('#contact-form').append(
              "<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté ! &#128512;</p>"
            );
            setTimeout(function () {
              $('.thank-you').remove();
            }, 5000);

            $('#contact-form')[0].reset();
          } else {
            $('#firstname + .comments').html(result.firstnameError);
            $('#name + .comments').html(result.nameError);
            $('#email + .comments').html(result.emailError);
            $('#phone + .comments').html(result.phoneError);
            $('#message + .comments').html(result.messageError);
          }
        },
      });
    });
  });

  //============ SUBMIT FORM !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  /* const submit = document.getElementById('submit');
    submit.addEventListener('click',function submitForm() {
   // Get the first form with the name
   // Usually the form name is not repeated
   // but duplicate names are possible in HTML
   // Therefore to work around the issue, enforce the correct index
   var frm = document.getElementById('formulaire')[0];
   frm.submit(); // Submit the form
   frm.reset();  // Reset all form data
   return false; // Prevent page refresh
});*/

  //================================= SMOOTH TRANSITION

  $(document).ready(function () {
    // Add smooth scrolling to all links
    $('a').on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== '') {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            5;
          }
        );
      } // End if
    });
  });

  //================================== ANIMATION GSAP
  //================== ACCUEIL
  (function () {
    const tl = new TimelineLite();
    tl.from('nav', { opacity: 0, y: -100, duration: 1 })
      .from('.title', { x: -500, duration: 1 }, 0)
      .from(
        '.accroche',
        { opacity: 0, x: -500, duration: 1, ease: 'power2.out' },
        1
      )
      .from(
        '.reseau',
        { opacity: 0, x: -500, duration: 1, ease: 'power2.out' },
        1
      )
      .from('.pp', { opacity: 0, duration: 2.5 }, 0);
  })();

  //===================== FORMATION
  (function () {
    const tl = new TimelineLite();
    const controller = new ScrollMagic.Controller();
    tl.from('.dateformation>.ligne1', { opacity: 0, x: -200, duration: 0.5 }, 0)
      .from(
        '.dateformation>.ligne2',
        { opacity: 0, x: -200, duration: 0.5 },
        0.3
      )
      .from(
        '.dateformation>.ligne3',
        { opacity: 0, x: -200, duration: 0.5 },
        0.6
      )
      .from(
        '.dateformation>.ligne4',
        { opacity: 0, x: -200, duration: 0.5 },
        0.9
      );

    tl.from('.etude>.ligne1', { opacity: 0, x: 200, duration: 0.5 }, 0)
      .from('.etude>.ligne2', { opacity: 0, x: 200, duration: 0.5 }, 0.3)
      .from('.etude>.ligne3', { opacity: 0, x: 200, duration: 0.5 }, 0.6)
      .from('.etude>.ligne4', { opacity: 0, x: 200, duration: 0.5 }, 0.9);

    const scene = new ScrollMagic.Scene({
      triggerElement: '#formation',
    })
      .setTween(tl)
      .addTo(controller);

    scene.reverse(false);
  })();

  // ============== ANIMATION EXP PRO
  (function () {
    const tl = new TimelineLite();
    const controller = new ScrollMagic.Controller();
    tl.from(
      '.blanc',
      { opacity: 0, x: -1000, duration: 1 },
      0.5
    ).from('.contenant', { opacity: 0, duration: 1 });

    const scene = new ScrollMagic.Scene({
      triggerElement: '#exp',
    })
      .setTween(tl)
      .addTo(controller);

    scene.reverse(false);
  })();

  // ======== ANIMATION LOGO COMPETENCES

  const width = window.matchMedia('(max-width: 575px)');

  function animation(width) {
    const logo = document.querySelectorAll('.case');
    for (let i = 0; i < logo.length; i++) {
      const tl = new TimelineLite();
      const tl2 = new TimelineLite();

      if (width.matches) {
        if (logo[i].className === 'case flex column') {
          logo[i].className = 'case flex row';
          logo[i].style['flex-wrap'] = 'nowrap';
        }
        tl2
          .fromTo(
            logo[i],
            { x: -1150, y: 0 },
            { x: 1150, y: 0, ease: 'none', duration: 20 }
          )
          .repeat(-1);
      } else {
        logo[i].className = 'case flex column';
        tl.fromTo(
          '.case:nth-child(odd)',
          { yPercent: 0, x: 0 },
          { yPercent: -50, x: 0, duration: 2, ease: 'none' },
          0
        )
          .fromTo(
            '.case:nth-child(even)',
            { yPercent: 0, x: 0 },
            { yPercent: 50, x: 0, duration: 2, ease: 'none' },
            0
          )
          .fromTo(
            '.case:nth-child(odd)',
            { yPercent: -50, x: 0 },
            { yPercent: 0, x: 0, duration: 2, ease: 'none' },
            '+=2'
          )
          .fromTo(
            '.case:nth-child(even)',
            { yPercent: 50, x: 0 },
            { yPercent: 0, x: 0, duration: 2, ease: 'none' },
            '-=2'
          )
          .repeat(-1)
          .repeatDelay(2);
      }

      window.addEventListener('resize', function () {
        if (width.matches) {
          tl.progress(0).clear();
          tl.kill();
        } else {
          tl2.progress(0).clear();
          tl2.kill();
        }
      });
    }
  }

  animation(width);
  width.addListener(animation);
});
