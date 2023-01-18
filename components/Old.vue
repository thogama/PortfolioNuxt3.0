<template>
    <html>
    <head>
        <meta charset='utf-8'>
        
    
        <title>Alan G.</title>
        <!-- UNICONS-->
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
        <script src="https://code.iconify.design/2/2.2.1/iconify.min.js"/>
    
        <!-- SWIPER CSS-->
        <link rel="stylesheet" href="">
        
        <!--CSS-->
        
    
    
        <meta name='viewport' content='width=device-width, initial-scale=1'>
    </head>
    <body>
     <!--HEADER-->
     <header class="header" id="header">
         <nav class="nav conteiner">
             <a href="" class="nav__logo">Alan Gama</a>
    
             <div class="nav__menu"  id="nav-menu" ref="nav_menu">
                 <ul class="nav__list grid">
                     <li class="nav__item">
                          <a href="#home" class="nav__link">
                             <i class="uil uil-estate nav__icon"></i> Home
                          </a>
                    </li>
                     <li class="nav__item">
                        <a href="#about" class="nav__link">
                            <i class="uil uil-user"></i> About 
                        </a>
                    </li>
                     <li class="nav__item">
                        <a href="#skills" class="nav__link">
                            <i class="uil uil-file-download-alt nav__icon"></i> Skills
                        </a>
                    </li>
                     <li class="nav__item">
                        <a href="#services" class="nav__link">
                            <i class="uil uil-briefcase nav__icon"></i> Services
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#portolio" class="nav__link">
                            <i class="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                   </li>
                   <li class="nav__item">
                    <a href="#contact" class="nav__link">
                        <i class="uil uil-at nav__icon"></i> Contact me
                    </a>
                    </li>                 
                 </ul>
                 <i class="uil uil-sign-out-alt nav__close" id="nav-close" ref="nav_close"></i>
             </div>
    
             <div class="nav__btns">
                 <div class="nav__toggle" id="nav-toggle" ref="nav_toggle">
                    <i class="uil uil-apps"></i>
                 </div>
             </div>
         </nav> 
     </header>
    
     <!--MAIN-->
     <main class="main">
        <section class="home section" id="home">
            <div class="home__container container grid">
                <div class="home___content grid">
                    <div class="home__social">
                        <a href="https://linkedin.com/in/alan-gama-devs" class="home__social-icon">
                            <i class="uil uil-linkedin"></i>
                        </a>
                        <a href="https://github.com/thogama" class="home__social-icon">
                            <i class="uil uil-github"></i>
                        </a>
                        <a href="https://www.upwork.com/freelancers/~01c65b24230c0622b6" class="home__social-icon">
                            <span class="iconify" data-icon="simple-icons:upwork"></span>
                        </a>
                    </div>
    
                    <div class="home__img">
                        <svg  class="home__blob"  viewBox="0 0 400 487" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
                            <mask id="mask0" mask-type="alpha">
                             <path  d="M389,328Q380,416,287.5,426Q195,436,121.5,
                              384Q48,332,44,238Q40,144,119.5,102.5Q199,61,284.5,
                              69Q370,77,384,158.5Q398,240,389,328Z" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path  d="M389,328Q380,416,287.5,426Q195,436,121.5,
                                 384Q48,332,44,238Q40,144,119.5,102.5Q199,61,284.5,
                                 69Q370,77,384,158.5Q398,240,389,328Z" />
    
                                <image  class="home__blob-img"  x="-15" y="35" xlink:href="./images/IA-59 (1).jpg"/>
                            </g>
                        </svg>
                    </div>
    
                    <div class="home__data">
                        <h1 class="home__title">Hello, I' am Alan</h1>
                        <h3 class="home__subtitle">Full time devolper</h3>
                        <p class="home__description">Computer science bachelor 
                                                    in progress and focused developer to optimizate as well as create new features for Front/Back ends.</p>
                        <a href="#contact" class="button button--flex">
                            Mail me <i class="uil uil-envelope-edit button__icon"></i> 
                        </a>
                    </div>
    
                </div>
    
                <div class="home__scroll">
                    <a href="#about" class="home__scroll-button button--flex">
                        <i class="uil uil-mouse-alt"></i>
                        <span class="home__scroll-name">Scroll down</span>
                        <i class="uil uil-arrow-circle-down"></i>
                    </a>
                </div>
            </div>
        </section>
    
        <!--==============ABOut====================-->
        <section class="about section" id="about">
            <h2 class="section__title">About me</h2>
            <span class="section__subtitle">
                My introduction
            </span>
            <div class="about__container container grid">
                <img src="./images/foto-perfil.png" class="about__img">
                <div class="about__data">
                    <p class="about__description">
                        Introducing myself as a entry full stack devolvper that can solve any needed task
                    </p>
                    <div class="about__info">
                        <div>
                            <span class="about__info-title">30h/week</span>
                            <span class="about__info-name">Hours <br> availability</span>
                        </div>
                        <div>
                            <span class="about__info-title">English</span>
                            <span class="about__info-name"> talk</span>
                        </div>
                        <div>
                            <span class="about__info-title">Varied skills</span>
                            <span class="about__info-name"> in programming<br> and computing</span>
                        </div>
                    </div>
                    <div class="about__buttons">
                        <!--curriculo-->
                        <a download href="" class="button button--flex">
                        Download my CV<i class="uil uil-file-download button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="skills section" id="skills">
            <h2 class="section__title"> Skills</h2>
                <span class="section__subtitle">My technical abilities</span>
    
                <div class="skills__container container grid">
                    
                        <!--skill 1-->
                        <div class="skills__content ">
                            <div class="skills__header">
                                <i class="uil uil-arrow skills__icon"></i>
                            
                                <div>
                                    <h1 class="skills__title">Frontend devolper</h1>
                                </div>
                            </div>
                            <div class="skills__list grid">
    
    
                                <div class="skills__data">
                                    <div class="skills__titles">
                                        <h3 class="skills__name">HTML</h3>
                                        <span class="skills__number">80%</span>
                                    </div>
                                    <div class="skills__bar">
                                        <span class="skills__percentage skills__html"></span>
                                    </div>
                                </div>
                                
                                <div class="skills__data">
                                    <div class="skills__titles">
                                        <h3 class="skills__name">CSS</h3>
                                        <span class="skills__number">75%</span>
                                    </div>
                                    <div class="skills__bar">
                                        <span class="skills__percentage skills__css"></span>
                                    </div>
                                </div>
    
                                <div class="skills__data">
                                    <div class="skills__titles">
                                        <h3 class="skills__name">
                                            Javascript
                                        </h3>
                                        <span class="skills__number">
                                            80%
                                        </span>
                                    </div>
                                        <div class="skills__bar">
                                            <span class="skills__percentage skills__js"></span>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        
                        <!--skill 2-->
                        <div class="skills__content ">
                            <div class="skills__header">
                                <i class="uil uil-servers skills__icon"></i>
    
                                <div>
                                    <h1 class="skills__title">Backend devolper</h1>
                                </div>
                            </div>
                            
                            <div class="skills__list grid">
                                <div class="skills__data">
                                    <div class="skills__titles">
                                        <h3 class="skills__name">Node</h3>
                                        <span class="skills__number">75%</span>
                                    </div>
                                        <div class="skills__bar">
                                            <span class="skills__percentage skills__node"></span>
                                        
                                        </div>
                                    </div>
                                
    
                                <div class="skills__data">
                                    <div class="skills__titles">
                                        <h3 class="skills__name">Prisma ORM</h3>
                                        <span class="skills__number">70%</span>
                                    </div>
                                        <div class="skills__bar">
                                            <span class="skills__percentage skills__prisma"></span>
                                        </div>
                                    </div>
                                
                                <div class="skills__data">
                                    <div class="skills__titles">
                                        <h3 class="skills__name">Python</h3>
                                        <span class="skills__number">65%</span>
                                    </div>
                                        <div class="skills__bar">
                                            <span class="skills__percentage skills__python"></span>
                                        </div>
                                    </div>
                                
                                <div class="skills__data">
                                    <div class="skills__titles">
                                        <h3 class="skills__name">C++</h3>
                                        <span class="skills__number">65%</span>
                                    </div>
                                        <div class="skills__bar">
                                            <span class="skills__percentage skills__cplus"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                
        </section>
    
    
        <!--===================Qualification=-======================-->
        <section class="qualification section">
            <h2 class="section__title">Qualification</h2>
            <span class="section__subtitle">My journey</span>
            <div class="qualification__container conteiner">
                <div class="qualification__tabs">
                    <div class="qualification__button button--flex">
                        <i class="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div class="qualification__button button--flex">
                        <i class="uil uil-suitcase-alt qualification__icon"></i>
                        Work
                    </div>
                </div>
                        
    
                <div class="qualitificaton__sections">
                    <!--==Qualification 1-->
                    <div class="qualification__content">
                        <!--Qualy 1-->
                        <div class="qualification__data" data-content-id="education">
                            <div>
                                <h3 class="qualification__title">Computer science</h3>
                                <span class="qualification__subtitle">Federal University of Sergipe</span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calender"></i>
                                    2020 - until 2025
    
                                </div>
                            </div>
                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                            </div>
                        </div>
                        <!--Qualy 2-->
                        <div class="qualification__data" data-content-id="education">
                            <div></div>
    
                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                                
                            </div>
                            
                            
                            <div>
                                
                                <h3 class="qualification__title">Fullstack freelancer</h3>
                                <span class="qualification__subtitle">Upwork</span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calender"></i>
                                    2021 - now
    
                                </div>
                                
                            </div>
                            
                         
                        </div>
                            <!--Qualys ned-->
                        <div class="qualification__data" data-content-id="education">
                            <div></div>
                                
                            <span class="qualification__rounder"></span>
                        </div>
                                
                                
                    </div>
                </div>
            </div>
        </section>
        <!--SERVICES-->
        <section class="services section" id="services">
            <h2 class="section__title">Services</h2>
            <span class="section__subtitle">What I offer</span>
    
            <div class="services__container container grid">
                <!--Service 1-->
                <div class="services__content">
                     <div>
                        <i class="uil uil-window-grid services__icon"></i>
                        <h3 class="services__title">Frontend <br> Devolper</h3>
                     </div>
                     <span  class="button button--flex button--small button--link services__button">
                        
                        See more
                        
                         <i class="uil uil-arrow-up-right button_icon"></i>
                     </span >
                     <div class="services__modal">
                         <div class="services__modal-content">
                             <h4 class="services__modal-title">  Frontend <br> Devolper </h4>
                             <i class="uil uil-arrow-left services__modal-close"></i>
                             <ul class="services__modal-services grid">
                                <li class="services__modal-service">
                                    <i class="uil uil-check-square services__modal-icon"></i>
                                    <p>I devolp user interface</p>
                                </li>
                                <li class="services__modal-service">
                                    <i class="uil uil-check-square services__modal-icon"></i>
                                    <p>I create interactions and animations </p>
                                </li>
                                <li class="services__modal-service">
                                    <i class="uil uil-check-square services__modal-icon"></i>
                                    <p>Insert your company logo</p>
                                </li>
                             </ul>
                         </div>
                     </div>
                </div>
                <div class="services__content">
                     <div>
                        <i class="uil uil-cloud-database-tree services__icon" ></i>
                        <h3 class="services__title">Backend<br> Devolper</h3>
                     </div>
                     <span class="button button--flex button--small button--link services__button">
                        
                        See more
                        
                         <i class="uil uil-arrow-up-right button_icon"></i>
                     </span >
                     <div class="services__modal">
                         <div class="services__modal-content">
                             <h4 class="services__modal-title">  Backend <br> Devolper </h4>
                             <i class="uil uil-arrow-left services__modal-close"></i>
                             <ul class="services__modal-services grid">
                                <li class="services__modal-service">
                                    <i class="uil uil-check-square services__modal-icon"></i>
                                    <p>I create APIs and consume it</p>
                                </li>
                                <li class="services__modal-service">
                                    <i class="uil uil-check-square services__modal-icon"></i>
                                    <p>I integrate your company's database with server and page</p>
                                </li>
                                <li class="services__modal-service">
                                    <i class="uil uil-check-square services__modal-icon"></i>
                                    <p>Help to solve issues</p>
                                </li>
                             </ul>
                         </div>
                     </div>
                </div>
            </div>
        </section>
     </main>
     <!--FOOTER-->
     <!--SCROLL TOP-->
     <!--SWIPER JS-->
    </body>
     
    </html>
    </template>
    
    
    <script>
    
    export default {
      mounted() {
        
            /* ==================== MENU SHOW Y HIDDEN ============== */
        const navMenu = this.$refs.nav_menu
        
    
        const  navToggle = this.$refs.nav_toggle
        const navClose = this.$refs.nav_close
    
    
        /*SHOW */
    
        if(navToggle){
            navToggle.addEventListener("click",()=>{
                
                navMenu.classList.add("show-menu")
            })
            
        } 
    
        if(navClose){
            navClose.addEventListener("click",()=>{
                navMenu.classList.remove("show-menu")
            })
        }
    
        /* Remove menu mobile */ 
    
        const modalViews = document.querySelectorAll(".services__modal")
        const modalBtns = document.querySelectorAll(".services__button")
        const modalCloses = document.querySelectorAll(".services__modal-close")
    
        let modal = function(modalClick){
            modalViews[modalClick].classList.add("active-modal")
        }
    
        modalBtns.forEach((modalBtn, i) => {
            modalBtn.addEventListener("click", ()=>{
                modal(i)
            })
        })
    
        modalCloses.forEach((modalClose) =>{
            modalClose.addEventListener("click",()=>{
                modalViews.forEach((modalView) =>{
                    modalView.classList.remove("active-modal")
                })
            })
        })
            
        }
    }
    </script>
    
    
    <style>
    /*================= Google Fonts =====================*/
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    
    
    
    /*================= Variable CSS =====================*/
    
    :root{
       --header-height: 3rem;
       
       /*================= Colors =====================*/
    
       --hue-color: 30;
    
       /*=================HSL color mode=====================*/
    
       --first-color: hsl(var(--hue-color), 83%, 50%);
       --first-color-second:  hsl(var(--hue-color), 83%, 50%);
       --first-color-alt: hsl(var(--hue-color), 70%, 38%);
       --first-color-lighter: hsl(var(--hue-color), 95%, 85%);
       --title-color:  hsl(var(--hue-color), 15%, 35%);
       
       --text-color-light: hsl(var(--hue-color), 15%, 25%);
       --input-color: hsl(var(--hue-color), 80%, 95%);
       --body-color: hsl(var(--hue-color), 75%, 100%);
       --conteiner-color: #FFF;
    
       /*=================Font =====================*/
       --body-font: 'Poppins', sans-serif;;
    
       --big-font-size: 2rem;
       --h1-font-size: 1.5rem;
       --h2-font-size:1.25rem;
       --h3-font-size:1.125rem;
       --normal-font-size:0.938rem;
       --small-font-size:0.813rem;
       --smaller-font-size:.75rem;
    
    
       /*=================Font weight =====================*/
       --font-medium:500;
       --font-semi-bold:600;
    
    
       /*=============Margenes Bottom =============*/
    
       --mb-0-25:0.25rem;
       --mb-0-5:0.5rem;
       --mb-0-75: .75rem;
       --mb-1:1rem;
    
       --mb-1-5:1.5rem;
       --mb-2:2rem;
       --mb-2-5: 2.5rem;
       --mb-3:3rem;
    
    
       /*============Z index ================*/
    
       --z-tooltip:10;
       --z-fixed:100;
       --z-modal:1000;
        
    
    }
    
       /*====== Font large screens ========*/
       @media screen and (min-width:968px) {
           :root{
            --big-font-size: 3rem;
            --h1-font-size: 2.25rem;
            --h2-font-size:1.5rem;
            --h3-font-size:1.25rem;
            --normal-font-size:1rem;
            --small-font-size:0.875rem;
            --smaller-font-size:0.813rem;
           }
           
       }
    
       /*===== Variables Dark Theme =====*/
       /*===== Button dark/light =====*/
    
    
    
    
       /*============ BASE =============*/
       *{ 
           box-sizing:border-box;
           padding:0;
           margin:2px;
        }
        html{
           scroll-behavior: smooth;
          
    
        }
    
        body{
            margin: 0 0 var(--header-height) 0;
            font-family: var(--body-font);
            font-size: var(--normal-font-size);
            background-color: var(--body-color);
            color: var(--text-color);
        }
    
        h1,h2,h3,h4{
            color:var(--title-color);
            font-weight: var(--font-semi-bold);
    
        }
    
        ul{
            list-style: none;
        }
    
        a{
            text-decoration: none;
        }
    
        img{
            max-width: 100%;
            height: auto;
        }
    
    
        /*=========================== REUSE CSS ==================== */
    
        .section{
            padding:2rem 0 4rem;
    
        }
    
        .section__title{
            font-size: var(--h1-font-size);
    
        }
        .section__subtitle{
            display: block;
            font-size: var(--small-font-size);
            margin-bottom:var(--mb-3);
            
        }
        .section__title{
            text-align: center;
        }
        .section__subtitle{
            text-align: center;
        }
     
        /*=========================== LAYOUT ==================== */
        .conteiner{
            max-width: 768px;
            margin-left: var(--mb-1-5);
            margin-right: var(--mb-1-5);
        }
    
        .grid{
            display: grid;
            gap: 1.5rem;
        }
    
        .header{
            width: 100%;
            position: fixed;
            bottom: 0;
            left:0;
            z-index: var(--z-fixed);
            background-color: var(--body-color);
        }
    
        /*=========================== NAV==================== */
        .nav{
            max-width: 968px;
            height: var(--header-height);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    
        .nav__logo{
            color: var(--title-color);
            font-weight: var(--font-medium);
        }
        .nav__toggle{
            color: var(--title-color);
            font-weight: var(--font-medium);
        }
        .nav__logo:hover{
            color: var(--first-color);
    
        }
    
        .nav__toggle{
            font-size: 1.1rem;
            cursor:pointer;
        }
    
        .nav__toggle:hover{
            color:var(--first-color);
        }
    
        @media screen and (max-width: 767px) {
            .nav__menu{
                position: fixed;
                bottom: -100%;
                left: 0;
                width: 100%;
                background-color: var(--body-color);
                padding: 2rem 1.5 4rem;
                box-shadow: 0 -1px 4px rgba(0,0,0,.15);
                border-radius: 1.5rem 1.5rem 0 0;
                transition: 0.3s;
            }
            
        }
        .nav.list{
            grid-template-columns: repeat(3,1fr);
            gap: 2rem;
        }
        .nav__link{
            display: flex ;
            flex-direction: column;
            align-items: center;
            font-size: var(--small-font-size);
            color:var(--title-color);
            font-weight: var(--font-medium);
        }
        .nav__link:hover{
            color: var(--first-color);
        }
    
        .nav__icon{
            font-size: 1.2rem;
        }
    
        .nav__close{
            position: absolute;
            right: 1.3rem;
            bottom: 0.5rem;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--first-color);
        }
    
        .nav__close:hover{
            color: var(--first-color-alt);
        } 
    
        /* show menu */
        .show-menu{
            bottom: 1vh;
        }
    
    
    /* =============== HOME ============== */
    .home__container{
        gap: 1rem;
    }
    .home__content{
        grid-template-columns: 0.5fr 3fr;
        padding-top: 3.5rem;
        align-items: center;
    }
    .home__social{
        display: grid;
        grid-template-columns: max-content;
        row-gap: 1rem;
    }
    .home__social-icon{
        font-size: 1.25rem;
        color:  var(--first-color);
    }
    
    .home__social-icon:hover{
        color: var(--first-color-alt);
    }
    
    
    .home__blob{
        width: 200px;
        fill: var(--first-color);
    }
    .home__blob-img{
       width: 120%;
    }
    
    .home__data{
        
        grid-column: 1/3;
       
    }
    .home__title{
        font-size:(var(--big-font-size))
    }
    .home__subtitle{
        font-size:(var(--h3-font-size));
        color: var(--text-color);
        font-weight:var(--font-medium);
        margin-bottom:var(--mb-0-75)
    
    }
    .home__description{
        margin-bottom:var(--mb-2);
    }
    
    
    
    .home__scroll-button{
        color:var(--first-color);
        transition: 0.3s;
    }
    
    .home__scroll-button:hover{
        transform: translateY(0.25rem);
        
    
        
    }
    .home__scroll-mouse{
        font-size: 10rem;
    }
    
    .home__scroll-name{
        font-size: var(--small-font-size);
        color: var(--title-color);
        font-weight: var(--font-medium);
        margin-right:var(--mb-0-25);
    }
    .home__scroll-arrow{
        font-size:1.25rem;
    }
    
    /*======== BUTTONS ===== */
    .button{
        display: inline-block;
        background-color: var(--first-color);
        color: #FFF;
        padding: 1rem;
        border-radius: 0.5rem;
        font-weight: var(--font-medium);
    }
    .button:hover{
        background-color:var(--first-color-alt);
        margin-left: var(--mb-0-5);
        transition: 0.3s;
    }
    .button__icon{
        font-size: 1.25rem;
        margin-left: var(--mb-0-5);
    }
    .button--flex{
        display: inline-flex;
        align-items: center;
    } 
    .button--small{
        padding: .75rem;
    
    }
    .button--link{
        padding: 0;
        background-color: transparent;
        color: var(--first-color);
    }
    .button--link:hover{
        background-color: transparent;
        color: var(--first-color-alt);
    }
    /*======== ABOUT ===== */
    @keyframes slidein {
      from {
        
      }
    
      to {
        transform: rotateZ(15deg);
      }
    }
    .about__img{
        width: 200px;
        border-radius:7rem;
        justify-self: center;
       
    }
    .about__img:hover{
        animation: slidein 0.3s alternate infinite;
    }
    .about__description{
         text-align: center;
         margin-bottom: var(--mb-2-5);
    }
    .about__info{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: var(--mb-2-5);
    }
    
    .about__info-title{
        font-size: var(--h2-font-size);
        font-weight: var(--font-semi-bold);
    }
    .about__info-name{
        font-size: var(--smaller-font-size);
    
    }
    .about__info-title{
        display: block;
        text-align: center;
    }
    .about__info-name{
        display: block;
        text-align: center;
    }
    
    .about__buttons{
        display: flex;
        justify-content: center;
    }
    
    /* =-==== SKills ===*/
    
    .skills__container{
        row-gap: 0;
    }
    
    .skills__header{
        display: flex;
        align-items: center;
        margin-bottom: var(--mb-2-5);
    }
    
    .skills__icon{
        font-size: 2rem;
        color: var(--first-color);
    }
    .skills__arrow{
        font-size: 2rem;
        color: var(--first-color);
    }
    
    .skills__icon{
        margin-right: var(--mb-0-75);
    }
    
    .skills__title{
        font-size: var(--h3-font-size);
    }
    .skills__subtitle{
        font-size: var(--small-font-size);
        color: var(--text-color-light);
    }
    .skills__arrow{
        margin-left: auto;
        transition: 0.4s;
    }
    
    .skills__titles{
        display: flex;
        justify-content: space-between;
        margin-bottom:var(--mb-0-5) ;
    }
    .skills__name{
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
    }
    
    .skills__bar,
    .skills_percentage{
        height: 5px;
        border-radius: 0.25rem;
    }
    
    .skills__bar{
        background-color: var(--first-color-lighter);
    }
    .skills__percentage{
        display:block;
        background-color:var(--first-color);
        height: 0.25rem;
        
    
    }
    .skills__html{
        width: 80%;
        
    }
    .skills__css{
        width: 75%;
        
    }
    .skills__js{
        width: 80%;
        
    }
    .skills__node{
        width: 75%;
        
    }
    .skills__prisma{
        width: 70%;
        
    }
    .skills__python{
        width: 65%;
        
    }
    .skills__cplus{
        width: 65%;
        
    }
    /*=== Qualt +== */
    
    .qualification__tabs{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: var(--mb-2);
    }
    
    .qualification__button{
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
        cursor: pointer;
    }
    
    .qualification__button:hover{
        color: var(--first-color)
    }
    .qualification__icon{
        font-size: 1.8rem;
        margin-right: var(--mb-0-25);
    }
    
    .qualification__data{
        display: grid;
        grid-template-columns: 1fr max-content 1fr;
        column-gap:1.5rem;
    }
    
    .qualification__title{
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
    }
    .qualification__subtitle{
        display: inline-block;
        font-size: var(--small-font-size);
        margin-bottom: var(--mb-1);
    }
    .qualification__calendar{
        font-size: var(--smaller-font-size);
        color:var(--text-color-light)
    }
    .qualification__rounder{
        display: inline-block;
        width: 13px;
        height: 13px;
        background-color: var(--first-color);
        border-radius:50%;
    }
    
    .qualification__line{
        display: block;
        width: 1px;
        height: 100%;
        background-color: var(--first-color);
        transform: translate(6px,-10px);
    }
    
    /* ====== SERVIES ====*/
    
    .services__container{
        gap:1.5rem;
        grid-template-columns: repeat(2,1fr);
    }
    
    .services__content{
        position: relative;
        background-color: var(--conteiner-color);
        padding: 3.5rem 0.5rem 1.25rem 1.5rem;
        border-radius: .25rem;
        box-shadow: 0 2px 4px rgba(0,0,0,.15);
        transition: 0.3s;
    }
    
    .services__content:hover{
        box-shadow: 0 4px 8px rgba(0,0,0,.15); 
    }
    
    .services__icon{
        display: block;
        font-size: 1.5rem;
        color: var(--first-color);
        margin-bottom: var(--mb-1);
    }
    .services__title{
        font-size: var(--h3-font-size) ;
        margin-bottom: var(--mb-1);
        font-weight: var(--font-medium);
    }
    
    .services__button{
        cursor: pointer;
        font-size: var(--small-font-size);
    }
    
    .services__button:hover{
        transform: translateX( 0.25rem);
    }
    
    .services__modal{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.5);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        z-index:var(--z-modal);
        opacity: 0;
        visibility: hidden;
        transition: .3s;
    }
    
    .services__modal-content{
        position: relative;
        background-color: var(--conteiner-color);
        padding: 1.5rem;
        border-radius: 0.5rem;
    }
    
    .services__model-services{
        row-gap: 1rem;
    }
    
    .services__modal-service{
        display: flex;
    }
    
    .services__modal-title{
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-1-5);
    }
    
    .services__modal-close{
        position: absolute;
        top:1rem;
        right: 1rem;
        font: 1.5rem;
        color: var(--first-color);
        cursor: pointer;
    }
    
    .services__modal-icon{
        color: var(--first-color);
        margin-right: var(--mb-0-25);
    }
    
    .active-modal{
        opacity: 1;
        visibility: visible ;
    }
    
    /* G devices */
    @media screen and (min-width:1024px){
        .nav__menu{
            position: fixed;
            bottom: -100%;
            left: 0;
            width: 100%;
            background-color: var(--body-color);
            padding: 2rem 1.5 4rem;
            box-shadow: 0 -1px 4px rgba(0,0,0,.15);
            border-radius: 1.5rem 1.5rem 0 0;
            transition: 0.3s;
        }
        .header,
        .main,
        .footer__container{
            padding: 0;
        }
        .home__blob{
            width: 30rem;
        }
        .home__social{
            display: flex;
            flex-direction: column;
            
            align-items: flex-end;
            transform: translateY(15rem);
        }
        section.qualification{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .nav{
            height: (var(--header-height)+1.5rem);
            column-gap: 1rem;
        }
        .nav__icon,
        .nav__close,
        .nav__toggle{
            display: block;
    
        }
        .nav.list{
            display: flex;
            column-gap: 2rem;
        }
        .nav__menu{
            margin-left: auto;
            
        }
        .show-menu{
            bottom: 1vh;
        }
       
    }
    </style>