const addDiv = function(cls,value=''){
    const div = document.createElement('div');
    div.classList = cls;
    div.innerHTML = value;
    return div;
}
const addCard = function(name,phone){
    const card = addDiv('card');
    const icon = name.split('');
    card.appendChild(addDiv('photo',icon[0]));
    card.appendChild(addDiv('name',name));
    card.appendChild(addDiv('phone',phone));
    card.appendChild(addDiv('close','x'));
    return card;
}
const container = document.querySelector('.container');

container.addEventListener('click',function(e){
    if(e.target.className == 'add-contact'){
        const name = prompt('Contact Name : ');
        const pattern = /^0+[0-9]{11}$/;
        const phone = prompt('Contact Number : ');
        if(phone.match(pattern)){
            e.target.parentNode.appendChild(addCard(name,phone));
        } else {
            alert('please enter a valid number');
        }
    }
    if(e.target.className == 'close'){
        e.target.parentNode.style.display = 'none';
    }
    e.preventDefault();
});