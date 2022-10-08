var navul = document.querySelectorAll('.cntli');
console.log(111111111111111111111);
console.log(navul);
navul.forEach((item,index) => {
    item.addEventListener('click', function(){
        navul.forEach((item,index) => {
            item.className='uli cntli';
        });
        item.className='longli cntli';
    })
});