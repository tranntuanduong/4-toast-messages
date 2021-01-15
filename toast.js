    function toast({
        title, 
        message, 
        type,
        icon
    }) {
    // add toast
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.4s, fadeOut linear 1s 4s forwards`;
        toast.innerHTML = `
            <i class="toast__icon ${icon}"></i>
            <div class="toast__content">
                <p class="content__heading">${title}</p>
                <p class="content__text">${message}</p>
            </div>
            <i class="toast__close ti-close"></i>
        `;
        main.appendChild(toast);

        // remove toast auto
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, 5100);

        //remove toast when clicked
        toast.onclick = function(event) {
            console.log(event.target)
            if (event.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }
    }
}
