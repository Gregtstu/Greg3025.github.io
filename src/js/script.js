/* preloader */
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
};



/* список отзывов */
let reviews = [
    {
        image: 'img/reviewer-1.png',
        name: 'Михаил',
        position: 'Ген директор ПАО “Газпром”',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapidus leo nec ornare diam.'
    },
    {
        image: 'img/reviewer-2.png',
        name: 'Алексей',
        position: 'Зам директора ПАО “Газпром”',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat delectus amet saepe voluptatem sequi quod, eligendi culpa excepturi corporis blanditiis.'
    },
    {
        image: 'img/reviewer-3.png',
        name: 'Сергей',
        position: 'Работник ПАО “Газпром”',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nihil amet maxime sequi accusamus, voluptas impedit obcaecati deleniti quis earum!'
    },
];
let index = 0;

let stBtnLeft = document.getElementById('arrow-left');
let stBtnRight = document.getElementById('arrow-right');



/* изменение активного пункта меню */
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();

    $('.section').each((i, el) => {

        if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance + 400) {

            $('nav a div').each((i, el) => {
                if ($(el).hasClass('active')) {
                    $(el).removeClass('active');
                }
            });

            $('nav li:eq(' + i + ')').find('a div').addClass('active');
        };
    });
});

/* расчёт стоимости и сроков */
function calcSiteCost() {

    let cost = document.getElementById('price');
    let terms = document.getElementById('terms');
    let typeOfSiteValue = Number(document.getElementById('typeOfSiteValue').value);
    let designOfSiteValue = Number(document.getElementById('designOfSiteValue').value);
    let adaptabilityOfSiteValue = Number(document.getElementById('adaptabilityOfSiteValue').value);

    cost.textContent = typeOfSiteValue + designOfSiteValue + adaptabilityOfSiteValue;

    if (cost.textContent < 8000) {
        terms.textContent = '0';
    } else if (cost.textContent <= 10000) {
        terms.textContent = '3 - 5';
    } else if (cost.textContent <= 11000) {
        terms.textContent = '5 - 7';
    } else if (cost.textContent <= 16000) {
        terms.textContent = '7 - 10';
    } else if (cost.textContent >= 20000) {
        terms.textContent = '10 - 14';
    }
};

/* скролл по кнопке */
$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 60 + 'px'
    })
});

/* подсчёт значений в блоке статистики */
function statisticCountMain() {
    function statisticsCount(count, x) {

        if (x <= 10) {

            function x1() {

                if (count.textContent <= x) {

                    let int = setInterval(function () {

                        count.textContent++;

                        if (count.textContent == x) {

                            clearInterval(int);
                        }
                    }, 100);
                };
            };

            x1();
        } 
        
        else if ((10 <= x) && (x <= 51)) {

            function x1() {

                if (count.textContent <= x - 10) {

                    let int = setInterval(function () {

                        count.textContent++;

                        if (count.textContent == x - 10) {
                            x2()
                            clearInterval(int);
                        }
                    }, 30);
                };
            };

            function x2() {

                if ((x - 10 <= count.textContent) && (count.textContent <= x - 8)) {

                    let int = setInterval(function () {

                        count.textContent++;

                        if (count.textContent == x - 2) {
                            x3()
                            clearInterval(int);
                        }
                    }, 100);
                };
            };

            function x3() {

                if (x - 8 <= count.textContent) {

                    let int = setInterval(function () {

                        count.textContent++;

                        if (count.textContent == x) {
                            clearInterval(int);
                        }
                    }, 200);
                };
            };

            x1();
        } 
        
        else if ((51 <= x) && (x <= 500)) {

            function x1() {

                if (count.textContent <= x - 10) {

                    let int = setInterval(function () {

                        count.textContent++;

                        if (count.textContent >= x - 10) {
                            x2()
                            clearInterval(int);
                        }
                    }, 1);
                };
            };

            function x2() {
                if ((x - 10 <= count.textContent) && (count.textContent <= x - 2)) {

                    let int = setInterval(function () {

                        count.textContent++;

                        if (count.textContent == x - 2) {
                            x3()
                            clearInterval(int);
                        }
                    }, 100);
                };
            };

            function x3() {
                if (x - 2 <= count.textContent) {

                    let int = setInterval(function () {

                        count.textContent++;

                        if (count.textContent == x) {
                            clearInterval(int);
                            //console.log(x + ' was finished')
                        }
                    }, 200);
                };
            };

            x1();
        } 
        
        else if (501 <= x) {

            let num = 0;

            function x1() {

                if (count.textContent <= x - 100) {

                    let int = setInterval(function () {

                        count.textContent = num;
                        num += 30;

                        if (count.textContent >= x - 100) {
                            x2()
                            clearInterval(int);
                        }
                    }, 1);
                };
            };

            function x2() {

                if ((x - 100 <= count.textContent) && (count.textContent <= x - 10)) {

                    let int = setInterval(function () {

                        count.textContent = num;
                        num += 2;

                        if (count.textContent == x - 10) {
                            x3()
                            clearInterval(int);
                        }
                    }, 10);
                };
            };

            function x3() {

                if ((x - 10 <= count.textContent) && (count.textContent <= x - 3)) {

                    let int = setInterval(function () {

                        count.textContent++;

                        if (count.textContent == x - 3) {
                            x4();
                            clearInterval(int);
                        }
                    }, 50);
                };
            };

            function x4() {
                if (x - 3 <= count.textContent) {

                    let int = setInterval(function () {

                        count.textContent++;

                        if (count.textContent == x) {
                            clearInterval(int);
                        }
                    }, 150);
                };
            };

            x1();
        }
    };

    let happyClients = document.getElementById('happyClients');
    let happyClientsCount = 120;

    let hoursOfWork = document.getElementById('hoursOfWork');
    let hoursOfWorkCount = 4600;

    let ProjectsComlited = document.getElementById('ProjectsComlited');
    let ProjectsComlitedCount = 340;

    let awardsRecived = document.getElementById('awardsRecived');
    let awardsRecivedCount = 23;

    statisticsCount(happyClients, happyClientsCount);
    statisticsCount(hoursOfWork, hoursOfWorkCount);
    statisticsCount(ProjectsComlited, ProjectsComlitedCount);
    statisticsCount(awardsRecived, awardsRecivedCount);
};

/* подсчёт количиства точек исходя из количества отзывов */
function dotsCount() {
    
    let countReviews = reviews.length;
    
    for (let i = 1; i < countReviews; i++) {
        
        let dots = document.getElementById('dots');

        let dot = document.createElement('div');
        dot.classList.add('rev-dot');

        dots.appendChild(dot);
    }
};
dotsCount()

/* получение значений отзыва по индексу */
function reviewContent(index) {
    
    
    let review = document.getElementById('review');
    let name = document.getElementById('name');
    let position = document.getElementById('position');
    let reviewer = document.getElementById('reviewer-img');
    
    
    review.textContent = reviews[index]['review'];
    name.textContent = reviews[index]['name'];
    position.textContent = reviews[index]['position'];
    position.textContent = reviews[index]['position'];
    reviewer.setAttribute('src', reviews[index]['image']);
};

/* смена активной точки */
function changeDot() {
    
    let dots = document.getElementsByClassName('rev-dot');
    
    for (let i = 0; i < dots.length; i++){
        dots[i].classList.remove('rev-dot-active')
    };
    
    dots[index].classList.add('rev-dot-active')
    
}

/* функция по нажатию кнопки влево */
$(stBtnLeft).click(() => {
    
    if (index == 0){
        
        index = reviews.length - 1;
        reviewContent(index)
        changeDot()
        
    } else {
        
        index--;
        reviewContent(index)
        changeDot()
        
    }
    
})

/* функция по нажатию кнопки вправо */
$(stBtnRight).click(() => {
    
    if (index == reviews.length - 1){
        
        index = 0;
        reviewContent(index)
        changeDot()
        
    } else {
        
        index++;
        reviewContent(index)
        changeDot()
        
    }
    
})

/* модальное окно для картинок */
$('.image-link').magnificPopup({type:'image'});



calcSiteCost()

changeDot()
reviewContent(index)


/* отложеная прогрузка картинок */
let options = {threshole: [0]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.el-anim');

elements.each((i, el) => {
    observer.observe(el);
});

function onEntry(entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            
            change.target.src = change.target.dataset.src;
            
        }
    });
}

let options1 = {threshole: [0.9]};
let observer1 = new IntersectionObserver(onEntry1, options1);
elements = $('.statistics');

elements.each((i, el) => {
    observer1.observe(el);
});

function onEntry1(entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            
            setTimeout(statisticCountMain(), 5000)
            
        }
    });
}