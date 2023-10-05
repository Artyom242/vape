let type = document.getElementById('type');
let more_par = document.getElementById('more_params');

type.addEventListener('click', () => {
    more_par.classList.add('more_params')
    more_par.classList.remove('none')
}
)