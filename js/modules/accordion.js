export default function initaccordion(){
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

