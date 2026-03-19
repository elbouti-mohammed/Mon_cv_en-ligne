 // ── Stagger delay for skill bars ──
  document.querySelectorAll('.progress-bar').forEach(function (bar, i) {
    bar.style.transition = 'width 1s ease ' + (i * 0.1) + 's';
  });


function sendEmail() {
  var name    = document.getElementById('mf-name').value.trim();
  var email   = document.getElementById('mf-email').value.trim();
  var subject = document.getElementById('mf-subject').value.trim();
  var phone   = document.getElementById('mf-phone').value.trim();
  var message = document.getElementById('mf-message').value.trim();
  var status  = document.getElementById('mf-status');
  var btn     = document.getElementById('mf-submit');
 
  status.className = 'form-status';
  status.textContent = '';
 
  if (!name || !email || !message) {
    status.className = 'form-status err';
    status.textContent = 'Veuillez remplir votre nom, email et message.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.className = 'form-status err';
    status.textContent = 'Adresse email invalide.';
    return;
  }
 
  btn.disabled = true;
  btn.textContent = 'Ouverture du client email…';
 
  var body = 'Bonjour Mohamed,\n\nJe m\'appelle ' + name +
             (phone ? ' (Tél : ' + phone + ')' : '') +
             '.\n\n' + message +
             '\n\nCordialement,\n' + name + '\n' + email;
 
  window.location.href = 'mailto:elboutimohamed04@gmail.com' +
    '?subject=' + encodeURIComponent(subject || 'Contact via CV') +
    '&body='    + encodeURIComponent(body);
 
  setTimeout(function () {
    status.className = 'form-status ok';
    status.textContent = 'Votre client email a été ouvert avec le message pré-rempli !';
    btn.disabled = false;
    btn.innerHTML = '<i class="bi bi-send me-2"></i>Envoyer le message';
  }, 1500);
}