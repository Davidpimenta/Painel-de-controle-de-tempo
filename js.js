var active_info = document.querySelectorAll('.information')
var lisactive = []
var activated = []
active_info.forEach((e, index , array) => {
    e.addEventListener('click', function active(){
        if(activated.length >= 1){
            array[activated[0]].style.backgroundColor = 'var(--Darkblue)'
            activated = []
        }

        e.style.backgroundColor = 'hsl(237, 31%, 33%)'
        activated.push(index)
        
    })
})

document.getElementById('radio2').checked = true
