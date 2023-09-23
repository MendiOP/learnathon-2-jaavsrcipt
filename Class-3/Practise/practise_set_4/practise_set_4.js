const tree = document.getElementById('tree');

tree.addEventListener('click', (e) => {
    if (e.target.classList.contains('tree')) return;

    if (e.target.tagName === 'LI') {
        const ul = e.target.querySelector('ul');
        if (ul) {
            ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
            e.target.classList.toggle('collapsed');
            e.target.classList.toggle('expanded');
        }
    }
    e.stopPropagation(); // Prevent further propagation
});