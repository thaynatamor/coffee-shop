// Mantém o estado visual e o estado acessível do menu sincronizados.
const menu = document.querySelector('#menu-icon');
const navigation = document.querySelector('#primary-navigation');

if (menu && navigation) {
    const setMenuOpen = (open) => {
        navigation.classList.toggle('open', open);
        menu.setAttribute('aria-expanded', String(open));
        menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        menu.firstElementChild.textContent = open ? '×' : '☰';
    };
    menu.addEventListener('click', () => setMenuOpen(menu.getAttribute('aria-expanded') !== 'true'));
    navigation.addEventListener('click', (event) => {
        if (event.target.closest('a')) setMenuOpen(false);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            menu.focus();
        }
    });
    window.matchMedia('(min-width: 951px)').addEventListener('change', (event) => {
        if (event.matches) setMenuOpen(false);
    });
}
