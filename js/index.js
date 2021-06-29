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
      if(content[j].classList.contains('projet') || content[j].classList.contains('work')){
        content[j].style.display = content[j].style.display === 'grid' ? 'none' : 'grid';
      }
      else {
        content[j].style.display = content[j].style.display === 'flex' ? 'none' : 'flex';
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
    submit.addEventListener('click',function submitForm(e) {
      e.preventDefault();
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

});
