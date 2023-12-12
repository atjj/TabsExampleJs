const tabContents = document.querySelectorAll('.tab_content'),
      tabs = document.querySelector('.tabs'),
      tabItems = document.querySelector('.tab_items'),
      tabItemsLists = tabItems.querySelectorAll('li')
      




tabContents.forEach(item =>{
    item.classList.add('hide')
    item.classList.remove('show')
})


tabContents[0].classList.remove('hide');
tabContents[0].classList.add('show');
tabItemsLists[0].classList.add('active');

tabs.addEventListener('click',(e)=>{

    if(e.target && e.target.classList.contains('tab_item')){

/*         tabItemsLists.forEach(item=>{
        })
     */
        tabItemsLists.forEach((item,i) =>{
            item.classList.remove('active')

            if(e.target == item){  
    
                tabContents.forEach(item =>{
                    item.classList.add('hide')
                    item.classList.remove('show')
                })
                
    
                tabContents[i].classList.remove('hide');
                tabContents[i].classList.add('show')
                e.target.classList.add('active')
            }
        })
    }
})
