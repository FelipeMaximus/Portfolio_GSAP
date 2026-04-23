$(function () {

'use strict';

// FUNÇÃO SCROLL SUAVE DO LENIS - tempo de duração e rolagem infinita e escrolagem suave

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis(
    { duration: 1.5,
      infinite: true,
      smooth: true
    }); 
    
    //fução para evitar travamento entre o gsap e o lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

//evita micro travamentos
gsap.ticker.lagSmoothing(0);


    //CRIANDO A ANIMAÇÃO EM TODO O GSAP__ANIM , AS SEÇÕES  SE SOBREPOEM AO ESCROLLAR
      const gsapAnim = gsap.utils.toArray('.gsap__anim');

        gsapAnim.forEach(section => {
            gsap.to(section, {
                //para responsividade
                yPercent: 100,
                ease: 'none',//tira erro sobreposto da animação
                scrollTrigger: {
                   trigger: section,
                     start: 'bottom bottom',
                     end: 'bottom top',
                     scrub: true,
                     //evita que a animação fique travada, mesmo que o usuário pare de rolar a página
                     snap:true
                }
            });
        });

//ANIMAÇÃO NO PARALLAX__WRAPP
       const parallaxWrapp = gsap.utils.toArray('.parallax__wrapp');

        parallaxWrapp.forEach(parallax => {
            gsap.to(parallax, {
                //para responsividade
                yPercent: -20,
                ease: 'none',//tira erro sobreposto da animação
                scrollTrigger: {
                   trigger: parallax,
                     start: 'top top',
                     end: 'bottom top',
                     scrub: true
                }
            });
        });  

        //ANIMAÇÃO NO TITULO
        gsap.to('.title-p', {
                //para responsividade
                yPercent: 100,
                scrollTrigger: {
                   trigger: 'header.header',
                     start: 'top top',
                     end: 'bottom top',
                     scrub: true
                }
            });


            //ANIMAÇÃO DE ROLAGEM DA LOGO
              gsap.to('.title__img img', {
                rotate: 360,
                ease: 'none',
                scrollTrigger: {
                   trigger: '.serv',
                     start: 'top bottom',
                     end: 'bottom top',
                     scrub: true,
                     //markers: true
                }
            });

            //ANIMAÇÃO DO 'OS'
              gsap.to('.title__t', {
                xPercent: -10,
                ease: 'none',
                scrollTrigger: {
                   trigger: '.serv',
                     start: 'top top',
                     end: 'bottom top',
                     scrub: true,
                     //markers: true
                }
            });

               //ANIMAÇÃO DO 'SERVIÇOS'
              gsap.to('.serv .stroke', {
                xPercent: 10,
                ease: 'none',
                scrollTrigger: {
                   trigger: '.serv',
                     start: 'top top',
                     end: 'bottom top',
                     scrub: true,
                     //markers: true
                }
            });

               //ANIMAÇÃO DOS SERVIÇOS EM TIPO ESCADA'
              gsap.to('.serv__item:nth-child(1)', {
                xPercent: -10,
                ease: 'none',
                scrollTrigger: {
                   trigger: '.serv',
                     start: 'top top',
                     end: 'bottom top',
                     scrub: true,
                     //markers: true
                }
            });

            gsap.to('.serv__item:nth-child(3)', {
                xPercent: 10,
                ease: 'none',
                scrollTrigger: {
                   trigger: '.serv',
                     start: 'top top',
                     end: 'bottom top',
                     scrub: true,
                     //markers: true
                }
            });

            //ANIMAÇÃO DAS IMAGENS FINAIS EM ZOOM
            gsap.to('.portfolio__item-img img', {
                scale: 1.3,
                ease: 'none',
                scrollTrigger: {
                   trigger: '.portfolio',
                     start: 'top top',
                     end: 'bottom top',
                     scrub: true,
                     //markers: true
                }
            });

            //ANIMAÇÃO DE ROTAÇÃO DA LOGO FINAL
            gsap.to('.approve__star', {
                rotate: 360,
                ease: 'none',
                scrollTrigger: {
                   trigger: 'approve',
                     start: 'top bottom',
                     end: 'bottom top',
                     scrub: true,
                    
                }
            });

//Recalcula as posições do GSAP sem precisar recarregar a página
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });

})