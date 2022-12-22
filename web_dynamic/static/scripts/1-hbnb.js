window.onload = function (){
    const checkbox = document.querySelector('#checkbox')
    checkbox.addEventListener('interesting changes', function() {
        let check_list = [];
        if (checkbox.checked) {
            check_list.appendChild(amenities.id);
        } else if (!checkbox.checked) {
            check_list.removeChild(amenities.id);
        }
    });
}
console.log(checkbox)