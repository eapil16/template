'use strict';
document.addEventListener('DOMContentLoaded', () => {
    $('.menu-toggle-cont').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('menu-toggle-cont_active')) { 
            $(this).addClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideDown(300); 
            $('body').addClass('hidd'); 
        } else { 
            $(this).removeClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideUp(300);
            $('body').removeClass('hidd');
        } 
    });
  
    $('.phones-button').click(function (e) {
        $(this).toggleClass('active');
        $('.header-top__phones_block').slideToggle();
        $('.header-top__schedule_block').hide();
        $('.schedule-button').removeClass('active');
    });

    $('.schedule-button').click(function (e) {
        $(this).toggleClass('active');
        $('.header-top__schedule_block').slideToggle();
        $('.header-top__phones_block').hide();
        $('.phones-button').removeClass('active');
    });    
    
    document.querySelector('body').addEventListener('click', e =>{
        if (e.target.closest('.in-button')) {
            e.preventDefault();
            e.target.closest('.actions').classList.add('active');
        }
        if (e.target.closest('.add-to-favorite')) {
            e.preventDefault();
            e.target.closest('.add-to-favorite').classList.toggle('active');
        }   
        if (!e.target.closest('#catalog') && !e.target.closest('.submenu')) {
            $('#catalog').removeClass('selected');
            $('.submenu').fadeOut();
        }     
    });

    const mainSlider = new Swiper(".main-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".main-swiper-next",
            prevEl: ".main-swiper-prev",
        },
        pagination: {
            el: ".main-slider-pagination",
            clickable: true,
        }, 
    });

    const prodSlider = new Swiper(".slider-product", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
        autoHeight: true,
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        }
    });
    
    $('#catalog').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('selected');
        $('.submenu').slideToggle();
        $('body').toggleClass('hidd');
    });

    $('#search').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('selected');
        $('.header-search').slideToggle();
    });

    $('#close-search').click(function (e) {
        e.preventDefault();
        $('#search').removeClass('selected');
        $('.header-search').slideToggle();
    });

    const categoriesSlider = new Swiper(".slider-categories", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 10,
        speed: 800,
        navigation: {
            nextEl: ".categories-next",
            prevEl: ".categories-prev",
        },
        pagination: {
            el: ".swiper-pagination-categories",
            type: "progressbar",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
        }
    });

    const weddingSlider = new Swiper(".slider-wedding", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 10,
        speed: 800,
        navigation: {
            nextEl: ".wedding-next",
            prevEl: ".wedding-prev",
        },
        pagination: {
            el: ".swiper-pagination-wedding",
            type: "progressbar",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
        }
    });
    
    $('.mobile-menu__button').click(function (e) {
        e.preventDefault();
        $('.mobile-block').slideToggle();
    });

    $('.filter-button ').click(function (e) {
        e.preventDefault();
        $('.favorites-hidden').toggleClass('show');
        $('body').toggleClass('body-hidd');
    });

    $('.favorites-hidden__close').click(function (e) {
        e.preventDefault();
        $('.favorites-hidden').toggleClass('show');
        $('body').toggleClass('body-hidd');
    });

    $('#one-click').click(function (e) {
        e.preventDefault();
        $('.on-click-content').toggleClass('show');
        $('body').toggleClass('body-hidd');
    });

    $('.on-click-content_close').click(function (e) {
        e.preventDefault();
        $('.on-click-content').toggleClass('show');
        $('body').toggleClass('body-hidd');
    });

    
    $('#basket').click(function (e) {
        e.preventDefault();
        $('.basket-block').toggleClass('show');
        $('body').toggleClass('body-hidd');
    });

    $('.basket-block_close').click(function (e) {
        e.preventDefault();
        $('.basket-block').toggleClass('show');
        $('body').toggleClass('body-hidd');
    });

	$('select').styler({
		selectSearch: true,
	});
   
    $("#phone").mask("+9 (999) 999 - 99 - 99");

    if (document.querySelector('.price-block ')) {
        var stepsSlider = document.getElementById('steps-slider');
        var input0 = document.getElementById('input-with-keypress-0');
        var input1 = document.getElementById('input-with-keypress-1');
        var inputs = [input0, input1];
    
        noUiSlider.create(stepsSlider, {
            start: [20, 80],
            connect: true,
            step: 10,
            range: {
                'min': [0],
                '10%': [10, 10],
                '50%': [80, 50],
                '80%': 150,
                'max': 200
            }
            
        });
    
        stepsSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = Math.round(values[handle]);
        });
    }

    if(document.querySelector('.filter-scroll')) {
        const scroollInModal= new PerfectScrollbar('.filter-scroll', {
          wheelSpeed: 1.75,
          wheelPropagation: true,
        });
    }

    const registrationOrder = document.querySelector('.cart-block__content'),
    individualBlock = document.getElementById('individual-block'),
    entitylBlock = document.getElementById('entity-block');	
    
    if (registrationOrder) {
        document.querySelector('body').addEventListener('click' , (event) => {
            if(event.target.closest('.individual')) {
                console.log(1)
                individualBlock.classList.add('registration-block');
                individualBlock.classList.remove('registration-none');
                entitylBlock.classList.add('registration-none');
            }
            if(event.target.closest('.entity')) {
                entitylBlock.classList.add('registration-block');
                entitylBlock.classList.remove('registration-none');
                individualBlock.classList.add('registration-none');
            }
        });
    }

    $(document).on('click', '.btn.decrease', function(){
        const $field = $(this).siblings('input');
        $field.val(parseInt($field.val()) + 1);
        $field.trigger('change');
    })

    $(document).on('click', '.btn.increase', function(){
        const $field = $(this).siblings('input');
        if ($field.val() - 1 >= 1) {
            $field.val($field.val() - 1);
        }
        $field.trigger('change');
    })

    const basketSlider = new Swiper(".slider-basket", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 10,
        speed: 800,
        navigation: {
            nextEl: ".basket-next",
            prevEl: ".basket-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
    });

    //14 07

    $( function() {
        $( "#datepicker" ).datepicker({
            altFormat: "yy-mm-dd",
        });
    } );

    $(function(){
        let inputFile = $('#myInput');
        let button = $('#myButton');
        let filesContainer = $('#myFiles');
        let files = [];
        
        inputFile.change(function() {
          let newFiles = []; 
          for(let index = 0; index < inputFile[0].files.length; index++) {
            let file = inputFile[0].files[index];
            newFiles.push(file);
            files.push(file);
          }
          
          newFiles.forEach(file => {
            let fileElement = $(`<p>${file.name}</p>`);
            fileElement.data('fileData', file);
            filesContainer.append(fileElement);
            

            fileElement.click(function(event) {
              let fileElement = $(event.target);
              let indexToRemove = files.indexOf(fileElement.data('fileData'));
              fileElement.remove();
              files.splice(indexToRemove, 1);

              const blocks = document.querySelectorAll('#myFiles p')
              console.log('blocks', blocks)
              if (blocks.length === 0) {
                document.querySelector('#myFiles').classList.remove('show');
              }
            });
          });
          document.querySelector('#myFiles').classList.add('show');
        });
        
        button.click(function() {
          inputFile.click();
        });
      });

});