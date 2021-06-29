
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

//========================= ABOUT ME
(function () {
  const tl = new TimelineLite();
  const controller = new ScrollMagic.Controller();
  tl.from('.aboutMe',{ opacity:0, duration:1.5 }, 0);
  const scene = new ScrollMagic.Scene({
      triggerElement: '#moi',
    })
      .setTween(tl)
      .addTo(controller);

    scene.reverse(false);
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


  // ============ ANIMATION CARTES PROJETS
  (function () {
      const cartes = document.querySelectorAll('.carte');
      const tl = new TimelineLite();
      const controller = new ScrollMagic.Controller(); 
        cartes.forEach((carte,index) => {
            tl.from(carte,{scaleX:0.1,scaleY:0.1,opacity:0,duration:0.1,ease: "none",},index/4);  
       })

      const scene = new ScrollMagic.Scene({
      triggerElement: '#portfolio',
    })
      .setTween(tl)
      .addTo(controller);

    scene.reverse(false); 
  })();

  // ============== ANIMATION EXP PRO
  (function () {
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      triggerElement: '#exp',
    })
      .setClassToggle('.contenant, .line','activated')
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