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
    card.appendChild(addDiv('close','x'));
    card.appendChild(addDiv('name',name));
    card.appendChild(addDiv('phone',phone));
    return card;
}
const container = document.querySelector('.container');

container.addEventListener('click',function(e){
    if(e.target.className == 'add-contact'){
        const name = prompt('Contact Name : ');
        const pattern = /^0+[0-9]{11}$/;
        const phone = prompt('Contact Number : ');
        phone.match(pattern) ? 
        e.target.parentNode.appendChild(addCard(name,phone)) : 
        alert('please enter a valid number');
    }
    if(e.target.className == 'close'){
        const firstName = e.target.nextElementSibling.innerText.split(' ')[0];
        const confirmation = confirm(`Delete ${firstName} from contacts?`);
        if(confirmation === true){
            e.target.parentNode.style.display = 'none';
        }
    }
    e.preventDefault();
});