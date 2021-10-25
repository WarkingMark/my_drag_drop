const items = document.querySelectorAll('.item__img');
const placeholders_box = document.querySelectorAll('.placeholder');
let active_item = [];
items.forEach((e) => {
    e.addEventListener('dragstart', (event) => {
        event.target.classList.add('tick');
        active_item.push(e.parentNode);
        setTimeout(() => e.parentNode.classList.add('hide'), 0)
    });
    e.addEventListener('dragend', (event) => {
        event.target.classList.remove('tick', 'hide');
    });  
})

placeholders_box.forEach((e) => {
    e.addEventListener('dragover', (event) => {
        event.preventDefault()
    })
    e.addEventListener('dragenter', (event) => {
        event.target.classList.add('hovered');
    })
    e.addEventListener('dragleave', (event) => {
        event.target.classList.remove('hovered');
    })
    e.addEventListener('drop', (event) => {
        event.target.classList.remove('hovered');
        active_item[0].classList.remove('tick', 'hide');

        if(e.children.length == 0) {
            event.target.append(active_item[0]);
            active_item = [];
        } else {
            alert('Нельзя вкладывать блоки друг в друга=))')
        }
    }) 
})
