const textElement = document.querySelector('.text');

textElement.addEventListener('click', function (e) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${e.clientX - 10}px`; // 调整星星位置
    star.style.top = `${e.clientY - 10}px`;
    document.body.appendChild(star);

    // 设置动画结束后删除星星
    star.addEventListener('animationend', function () {
        star.remove();
    });
});
