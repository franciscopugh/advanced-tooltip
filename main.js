let timer;

const coordinates = () => {
    const icon = document.querySelector('#icon');
    const tooltip = document.querySelector('#tooltip');

    const x = icon.offsetLeft;
    const y = icon.offsetTop;
    const tooltip_width = tooltip.clientWidth;
    const tooltip_height = tooltip.clientHeight;

    const left = x - (tooltip_width / 2) + 15;
    const above = y - (tooltip_height) - 20;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${above}px`;
};

window.addEventListener('load', () => coordinates());
window.addEventListener('resize', () => coordinates());

icon.addEventListener('mouseenter', () => {
	tooltip.classList.add('active');
	coordinates();
});

icon.addEventListener('mouseleave', () => {
	timer = setTimeout(() => {
		tooltip.classList.remove('active');
	}, 500);
});

tooltip.addEventListener('mouseenter', () => clearTimeout(timer));
tooltip.addEventListener('mouseleave', () => tooltip.classList.remove('active'));
