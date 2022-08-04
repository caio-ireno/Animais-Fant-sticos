function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo')

    if(tabMenu.length && tabContent.length){
        function activeTab(index){
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) =>{
            itemMenu.addEventListener('click', ()=> {
                activeTab(index)
            });
        });
    }
}

initTabNav();

function initaccordion(){
    const accordionItemList = document.querySelectorAll('.js-accordion dt')
    if(accordionItemList.length){
        accordionItemList[0].classList.add('ativo')
        accordionItemList[0].nextElementSibling.classList.add('ativo')

        function activeAccordion(){
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')

        }

        accordionItemList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }  
}

initaccordion();

function initScrollSuave(){
    const linkInterno=document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        const topo = section.offsetTop;
        console.log(topo)
        window.scrollTo({
            top:topo,
            behavior: 'smooth',
        })


    }

    linkInterno.forEach((link) =>{
        link.addEventListener('click', scrollToSection);

    })
}

initScrollSuave();