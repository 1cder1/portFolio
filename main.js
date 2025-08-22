const container = document.querySelector('.page');
const imgs = container.querySelectorAll('img');

imgs.forEach(img => {
  img.style.position = 'absolute';
  img.style.left ||= '100px';
  img.style.top ||= '100px';
  img.style.cursor = 'grab';

  img.onmousedown = e => {
    e.preventDefault();
    img.style.cursor = 'grabbing';

    const containerRect = container.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();

    const shiftX = e.clientX - imgRect.left;
    const shiftY = e.clientY - imgRect.top;

    function moveAt(pageX, pageY) {
      let newLeft = pageX - containerRect.left - shiftX;
      let newTop = pageY - containerRect.top - shiftY;

      // Keep inside container
      newLeft = Math.min(Math.max(0, newLeft), container.clientWidth - img.offsetWidth);
      newTop = Math.min(Math.max(0, newTop), container.clientHeight - img.offsetHeight);

      img.style.left = newLeft + 'px';
      img.style.top = newTop + 'px';

      // If it's the welcome image, reposition welcomeContent
      if (img.classList.contains('img-welcome')) {
        positionWelcomeContent();
      }
    }

    function onMouseMove(e) {
      moveAt(e.pageX, e.pageY);
    }

    moveAt(e.pageX, e.pageY);

    document.addEventListener('mousemove', onMouseMove);

    document.onmouseup = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.onmouseup = null;
      img.style.cursor = 'grab';
    };
  };

  img.ondragstart = () => false;
});

// Keep your existing positionWelcomeContent() function and call it inside the loop for .img-welcome

function positionWelcomeContent() {
  const welcomeImg = container.querySelector('.img-welcome');
  const welcomeContent = document.querySelector('.welcome-content');
  const imgRect = welcomeImg.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const centerX = imgRect.left - containerRect.left + imgRect.width / 2;
  const centerY = imgRect.top - containerRect.top + imgRect.height / 2;

  welcomeContent.style.left = (centerX - welcomeContent.offsetWidth / 2) + 'px';
  welcomeContent.style.top = (centerY - welcomeContent.offsetHeight / 2) + 'px';
}

// Initialize welcomeContent position on load
positionWelcomeContent();
