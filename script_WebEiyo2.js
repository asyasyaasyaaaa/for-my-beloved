const toggleBtn = document.getElementById('toggleBtn');
  const lovePanel = document.getElementById('lovePanel');
  const percentageEl = document.getElementById('percentage');
  const incrementBtn = document.getElementById('incrementBtn');

  let percentage = 0;

  toggleBtn.addEventListener('click', () => {
    if (lovePanel.style.display === 'block') {
      lovePanel.style.display = 'none';
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      lovePanel.style.display = 'block';
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });

  incrementBtn.addEventListener('click', () => {
    if (percentage < 100) {
      percentage++;
      percentageEl.textContent = percentage + '%';
      if (percentage === 100) {
        incrementBtn.disabled = true;
      }
    }
  });