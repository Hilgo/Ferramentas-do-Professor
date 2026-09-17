const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');

const root = document.documentElement;
const savedFontSize = Number(localStorage.getItem('font-size-adjustment')) || 0;
const savedContrast = localStorage.getItem('high-contrast') === 'true';

const siteFooter = document.querySelector('footer');
if (siteFooter) {
  siteFooter.className = 'site-footer';
  siteFooter.setAttribute('aria-label', 'Contato');
  siteFooter.innerHTML = `
    <div><a class="brand" href="${location.pathname.includes('/ferramentas/') ? '../index.html' : '#inicio'}"><span class="brand-mark" aria-hidden="true">✦</span><span>Ferramentas<br><strong>do Professor</strong></span></a><p>Projetos abertos para apoiar quem ensina.</p></div>
    <div><p class="footer-title">PERFIS</p><div class="footer-links"><a href="https://github.com/Hilgo/" target="_blank" rel="noopener">GitHub ↗</a><a href="https://www.linkedin.com/in/lucas-palma-stabile" target="_blank" rel="noopener">LinkedIn ↗</a></div></div>
    <div><p class="footer-title">CONTATO</p><div class="footer-links"><a href="mailto:lucasstabile@professor.educacao.sp.gov.br">lucasstabile@professor.educacao.sp.gov.br</a></div></div>`;

  const footerStyle = document.createElement('style');
  footerStyle.textContent = `.site-footer{max-width:none;background:var(--ink);color:var(--cream);padding:55px max(32px,calc((100% - 1136px)/2));display:grid;grid-template-columns:1.1fr .9fr .9fr;gap:35px;align-items:start}.site-footer .brand,.site-footer a{color:var(--cream)}.site-footer .brand-mark{background:var(--orange)}.site-footer p{margin:12px 0 0;color:#b8cdc6;font-size:14px;line-height:1.5}.footer-title{margin:0 0 13px!important;color:#b8cdc6!important;font-size:11px!important;font-weight:700;letter-spacing:.13em}.footer-links{display:grid;gap:11px}.footer-links a{font-size:14px;font-weight:600;text-decoration:none;word-break:break-word}.footer-links a:hover{text-decoration:underline}@media(max-width:720px){.site-footer{padding:45px 24px;grid-template-columns:1fr;gap:28px}}`;
  document.head.append(footerStyle);
}

const bulkUrlTip = document.querySelector('.tip');
if (bulkUrlTip) {
  bulkUrlTip.innerHTML = '<strong>Dica:</strong> para abrir muitos links de uma vez em abas separadas, você pode usar a extensão <a href="https://microsoftedge.microsoft.com/addons/detail/bulk-url-opener/lfegemeopehmdopgogkofgchjflkhjlb" target="_blank" rel="noopener">Bulk URL Opener ↗</a> no Microsoft Edge.';
  const tipStyle = document.createElement('style');
  tipStyle.textContent = '.tip + .button{margin-top:16px}.tip a{color:var(--ink);font-weight:700}';
  document.head.append(tipStyle);
}

const hostedToolPage = document.title.includes('Pendências de atividades') || document.title.includes('Planejamento de aula');
if (hostedToolPage) {
  const toolBox = document.querySelector('.detail-box');
  toolBox?.insertAdjacentHTML('afterend', `
    <aside class="hosting-notice" aria-label="Aviso sobre o carregamento">
      <strong>Um aviso rápido sobre o carregamento</strong>
      <p>Esta ferramenta é hospedada gratuitamente no Render. Quando ela fica algum tempo sem receber acessos, pode levar um pouco mais de tempo para abrir na próxima vez. Se isso acontecer, aguarde alguns instantes e mantenha a página aberta — depois de carregar, os próximos acessos costumam ser mais rápidos.</p>
    </aside>`);
  document.querySelector('.hosting-notice')?.insertAdjacentHTML('afterend', `
    <section class="login-guide" aria-labelledby="login-title">
      <p class="eyebrow">UMA ETAPA DE SEGURANÇA</p>
      <h2 id="login-title">Por que preciso entrar com o Google?</h2>
      <p>O login ajuda a evitar usos abusivos e mantém a ferramenta disponível para quem precisa dela. É apenas uma etapa de segurança: não há cobrança e não é necessário criar uma conta nova.</p>
      <p>Para acessar, use a conta Google fornecida pela escola, com final <strong>@prof.educacao.gov.sp.br</strong>.</p>
      <ol><li><span>1</span><div><strong>Clique em “Entrar com o Google”</strong><p>O navegador abrirá a página segura de login do Google.</p></div></li><li><span>2</span><div><strong>Escolha sua conta da escola</strong><p>Selecione ou informe o e-mail institucional que termina em @prof.educacao.gov.sp.br.</p></div></li><li><span>3</span><div><strong>Confirme e volte para a ferramenta</strong><p>Depois da confirmação, você será direcionado de volta e poderá usar o site normalmente.</p></div></li></ol>
    </section>`);
  const hostingStyle = document.createElement('style');
  hostingStyle.textContent = '.hosting-notice{margin-top:24px;padding:20px 22px;background:#fff1d0;border-left:4px solid var(--yellow)}.hosting-notice strong{font-size:16px}.hosting-notice p{margin:8px 0 0;line-height:1.55;color:var(--ink)}.login-guide{margin-top:45px;padding:30px;background:#d8ebe2}.login-guide h2{font:700 30px/1.08 Fraunces,serif;letter-spacing:-.04em;margin:0 0 13px}.login-guide>p:not(.eyebrow){line-height:1.55;margin:10px 0}.login-guide ol{list-style:none;padding:0;margin:23px 0 0;display:grid;gap:12px}.login-guide li{display:flex;gap:14px;padding-top:13px;border-top:1px solid #bcd4ca}.login-guide li>span{display:grid;place-items:center;flex:0 0 27px;height:27px;border-radius:50%;background:var(--orange);color:#fff;font-size:12px;font-weight:700}.login-guide li strong{font-size:15px}.login-guide li p{margin:4px 0 0;line-height:1.45}';
  document.head.append(hostingStyle);
}

const tampermonkeyGuide = document.querySelector('.install-guide');
if (tampermonkeyGuide) {
  tampermonkeyGuide.insertAdjacentHTML('afterend', `
    <section class="script-status" aria-labelledby="status-title">
      <div><p class="eyebrow">CONFIRMAÇÃO</p><h2 id="status-title">Como saber se o código está funcionando?</h2><p>Quando um código é identificado na página atual, o ícone do Tampermonkey exibe uma notificação vermelha com um número. Isso indica que há um código para ser executado naquela página e que ele foi carregado.</p><p>Se essa notificação não aparecer, o código não foi carregado. Primeiro, recarregue a página do navegador. Se o problema continuar, entre em contato pelo <a href="mailto:lucasstabile@professor.educacao.sp.gov.br">e-mail</a>.</p></div>
      <figure class="width-auto"><img src="../assets/Script%20Identificado.png" alt="Ícone do Tampermonkey com uma notificação vermelha de número um, indicando que um código foi identificado na página"><figcaption>A notificação vermelha indica que há um código identificado na página.</figcaption></figure>
    </section>`);
  const statusStyle = document.createElement('style');
  statusStyle.textContent = '.script-status{margin-top:48px;padding:30px;background:#d8ebe2;display:grid;grid-template-columns:1fr 190px;gap:30px;align-items:center}.script-status h2{font:700 29px/1.08 Fraunces,serif;letter-spacing:-.04em;margin:0 0 13px}.script-status p{line-height:1.55;margin:10px 0}.script-status a{color:var(--ink);font-weight:700}.script-status .permission-images{display:block;margin:0}.script-status figure{margin:0;text-align:center}.script-status img{width:100%;height:auto;max-height:180px;object-fit:contain;background:var(--paper);padding:20px}.script-status figcaption{font-size:12px;line-height:1.35;color:var(--muted);margin-top:8px}@media(max-width:600px){.script-status{grid-template-columns:1fr}.script-status .permission-images{max-width:210px;margin:auto}} .script-status .width-auto img {width:auto !important}';
  document.head.append(statusStyle);
}

const createAccessibilityControls = () => {
  const controls = document.createElement('div');
  controls.className = 'accessibility-controls';
  controls.setAttribute('aria-label', 'Opções de acessibilidade');
  controls.innerHTML = '<button type="button" data-font="decrease" aria-label="Diminuir tamanho do texto">A−</button><button type="button" data-font="increase" aria-label="Aumentar tamanho do texto">A+</button><button type="button" data-contrast aria-pressed="false">Alto contraste</button>';
  return controls;
};

let controls = document.querySelector('.accessibility-controls');
if (!controls) {
  controls = createAccessibilityControls();
  document.querySelector('.topbar')?.append(controls);
}

const applyPreferences = () => {
  applyFontSize(savedFontSize);
  document.body.classList.toggle('high-contrast', savedContrast);
  controls?.querySelector('[data-contrast]')?.setAttribute('aria-pressed', String(savedContrast));
};

const textElements = [...document.querySelectorAll('h1, h2, h3, h4, p, a, button, li, figcaption, span, strong, b')];

const applyFontSize = (adjustment) => {
  const scale = 1 + (adjustment * 0.1);
  textElements.forEach((element) => {
    if (!element.dataset.baseFontSize) {
      element.dataset.baseFontSize = getComputedStyle(element).fontSize;
    }
    element.style.fontSize = `${parseFloat(element.dataset.baseFontSize) * scale}px`;
  });
};

applyPreferences();

controls?.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.font) {
    const currentSize = Number(localStorage.getItem('font-size-adjustment')) || 0;
    const nextSize = Math.max(-2, Math.min(6, currentSize + (button.dataset.font === 'increase' ? 1 : -1)));
    localStorage.setItem('font-size-adjustment', String(nextSize));
    applyFontSize(nextSize);
  }
  if (button.hasAttribute('data-contrast')) {
    const nextContrast = !document.body.classList.contains('high-contrast');
    localStorage.setItem('high-contrast', String(nextContrast));
    document.body.classList.toggle('high-contrast', nextContrast);
    button.setAttribute('aria-pressed', String(nextContrast));
  }
});

document.querySelectorAll('.permission-images img').forEach((image) => {
  image.classList.add('zoomable-image');
  image.setAttribute('tabindex', '0');
  image.setAttribute('role', 'button');
  image.setAttribute('aria-label', `Ampliar imagem: ${image.alt}`);
  const openImageDialog = () => {
    const dialog = document.createElement('dialog');
    dialog.className = 'image-dialog';
    dialog.innerHTML = `<button class="image-dialog-close" aria-label="Fechar imagem ampliada">×</button><img src="${image.src}" alt="${image.alt}">`;
    document.body.append(dialog);
    dialog.showModal();
    dialog.querySelector('.image-dialog-close').focus();
    dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.remove(); });
    dialog.querySelector('.image-dialog-close').addEventListener('click', () => dialog.remove());
  };
  image.addEventListener('click', openImageDialog);
  image.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openImageDialog(); } });
});

menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
