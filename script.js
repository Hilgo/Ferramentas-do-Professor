const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');

const toolCards = document.querySelectorAll('.tool-card');
toolCards.forEach((card) => {
  const link = card.querySelector('a');
  if (!link) return;

  const goToLink = (event) => {
    if (event && event.target.closest('a')) return;
    window.location.href = link.href;
  };

  card.addEventListener('click', goToLink);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      goToLink(event);
    }
  });
});

const root = document.documentElement;
const savedFontSize = Number(localStorage.getItem('font-size-adjustment')) || 0;
const savedContrast = localStorage.getItem('high-contrast') === 'true';

const siteFooter = document.querySelector('footer');
if (siteFooter) {
  siteFooter.className = 'site-footer';
  siteFooter.setAttribute('aria-label', 'Contato');
  siteFooter.innerHTML = `
    <div><a class="brand" href="${location.pathname.includes('/ferramentas/') ? '../index.html' : '#inicio'}"><img class="brand-mark" src="${location.pathname.includes('/ferramentas/') ? '../assets/icons/Icone Ferramentas do Professor.png' : 'assets/icons/Icone Ferramentas do Professor.png'}" alt="" aria-hidden="true"><span>Ferramentas<br><strong>do Professor</strong></span></a><p>Projetos abertos para apoiar quem ensina.</p><a class="footer-support-link" href="#pix-support">☕ Apoiar o projeto</a></div>
    <div><p class="footer-title">PERFIS</p><div class="footer-links"><a href="https://github.com/Hilgo/" target="_blank" rel="noopener">GitHub ↗</a><a href="https://www.linkedin.com/in/lucas-palma-stabile" target="_blank" rel="noopener">LinkedIn ↗</a></div></div>
    <div><p class="footer-title">CONTATO</p><div class="footer-links"><a href="mailto:lucasstabile@professor.educacao.sp.gov.br">lucasstabile@professor.educacao.sp.gov.br</a></div></div>`;

  const footerStyle = document.createElement('style');
  footerStyle.textContent = `.site-footer{max-width:none;background:var(--ink);color:var(--cream);padding:55px max(32px,calc((100% - 1136px)/2));display:grid;grid-template-columns:1.1fr .9fr .9fr;gap:35px;align-items:start}.site-footer .brand,.site-footer a{color:var(--cream)}.site-footer .brand-mark{background:var(--cream);padding:2px;border-radius:12px;width:35px;height:35px;object-fit:cover}.site-footer p{margin:12px 0 0;color:#b8cdc6;font-size:14px;line-height:1.5}.footer-support-link{position:fixed;left:24px;bottom:24px;z-index:20;display:inline-flex;align-items:center;padding:9px 13px;border:1px solid rgba(25,58,59,.2);border-radius:999px;background:var(--paper);color:var(--ink)!important;font-size:13px!important;font-style:normal;font-weight:700;text-decoration:none!important;box-shadow:0 10px 24px rgba(25,58,59,.14);opacity:0;visibility:hidden;pointer-events:none;transform:translateY(8px);transition:opacity .2s ease,visibility .2s ease,transform .2s ease,box-shadow .2s ease}.footer-support-link.is-visible{opacity:1;visibility:visible;pointer-events:auto;transform:translateY(0)}.footer-support-link:hover,.footer-support-link:focus-visible{color:var(--ink)!important;box-shadow:0 14px 28px rgba(25,58,59,.2);transform:translateY(-2px)}.footer-title{margin:0 0 13px!important;color:#b8cdc6!important;font-size:11px!important;font-weight:700;letter-spacing:.13em}.footer-links{display:grid;gap:11px}.footer-links a{font-size:14px;font-weight:600;text-decoration:none;word-break:break-word}.footer-links a:hover{text-decoration:underline}.pix-dialog{width:min(92vw,460px);padding:0;border:0;background:var(--paper);color:var(--ink);box-shadow:0 20px 70px rgba(0,0,0,.28)}.pix-dialog::backdrop{background:rgba(18,38,34,.72)}.pix-dialog-content{padding:32px}.pix-dialog h2{font:700 30px/1.08 Fraunces,serif;letter-spacing:-.04em;margin:0 0 12px}.pix-dialog-content>p:not(.eyebrow){line-height:1.5;margin:0 0 18px}.pix-dialog-close{position:absolute;top:12px;right:14px;border:0;background:transparent;color:var(--ink);font-size:28px;line-height:1;cursor:pointer}.pix-qr-code{display:block;width:180px;height:180px;object-fit:contain;margin:0 auto 18px;border:10px solid #fff}.pix-dialog label{display:block;margin-bottom:6px;font-size:12px;font-weight:700}.pix-dialog textarea{display:block;width:100%;min-height:86px;resize:none;padding:10px;border:1px solid #c9d8d1;border-radius:8px;background:#fff;color:var(--ink);font:12px/1.45 monospace;box-sizing:border-box}.pix-copy-button{margin-top:12px;padding:10px 14px;border:0;border-radius:10px;background:var(--orange);color:#fff;font-size:13px;font-weight:700;cursor:pointer;transition:transform .2s ease,filter .2s ease}.pix-copy-button:hover,.pix-copy-button:focus-visible{transform:translateY(-1px);filter:brightness(1.05)}@media(max-width:720px){.site-footer{padding:45px 24px;padding-bottom: 80px;grid-template-columns:1fr;gap:28px}}@media(max-width:600px){.footer-support-link{left:20px;bottom:20px}}`;
  document.head.append(footerStyle);
  const supportLinkStyle = document.createElement('style');
  supportLinkStyle.textContent = '.footer-support-link{padding:11px 16px;background:#e9b949;border-color:rgba(25,58,59,.3);font-size:14px!important;box-shadow:0 12px 26px rgba(25,58,59,.18);transition:transform .2s ease,box-shadow .2s ease,background-color .2s ease}.footer-support-link:hover,.footer-support-link:focus-visible{background:#f1c75f;box-shadow:0 16px 30px rgba(25,58,59,.24);transform:translateY(-3px)}.footer-support-link.is-visible{animation:support-link-in .45s cubic-bezier(.22,1,.36,1) both}@keyframes support-link-in{from{opacity:0;transform:translate(-10px,12px) scale(.94)}to{opacity:1;transform:translate(0,0) scale(1)}}';
  document.head.append(supportLinkStyle);
  const footerContrastStyle = document.createElement('style');
  footerContrastStyle.textContent = '.high-contrast .site-footer p,.high-contrast .site-footer .footer-title{color:#fff!important}.high-contrast .footer-support-link{background:var(--yellow);color:var(--ink)!important;border-color:#000}.high-contrast .footer-support-link:hover,.high-contrast .footer-support-link:focus-visible{background:#fff000}';
  document.head.append(footerContrastStyle);

  const pixValue = '00020126580014br.gov.bcb.pix0136539d8032-917a-420f-8a4c-b3a62b8fc23152040000530398654045.005802BR5901N6001C62230519FerramentaProfessor63044EC7';
  const assetPrefix = location.pathname.includes('/ferramentas/') ? '../' : '';
  const pixLink = document.querySelector('.footer-support-link');
  pixLink?.addEventListener('click', (event) => {
    event.preventDefault();
    const dialog = document.createElement('dialog');
    dialog.className = 'pix-dialog';
    dialog.innerHTML = `<button type="button" class="pix-dialog-close" aria-label="Fechar janela Pix">×</button><div class="pix-dialog-content"><p class="eyebrow">APOIO OPCIONAL</p><h2>Valeu por apoiar o projeto!</h2><p>Se essas ferramentas ajudaram no seu dia a dia, você pode contribuir com um cafézinho de R$ 5.</p><img class="pix-qr-code" src="${assetPrefix}assets/qrcode-pix.png" alt="QR code para fazer um Pix de 5 reais"><label for="pix-code">Pix copia e cola</label><textarea id="pix-code" readonly>${pixValue}</textarea><button type="button" class="pix-copy-button">Copiar chave Pix</button></div>`;
    document.body.append(dialog);
    dialog.showModal();
    textElements.push(...dialog.querySelectorAll('h2, p, label, textarea, button'));
    applyFontSize(Number(localStorage.getItem('font-size-adjustment')) || 0);
    dialog.querySelector('.pix-dialog-close').focus();

    const closeDialog = () => dialog.remove();
    dialog.addEventListener('click', (dialogEvent) => { if (dialogEvent.target === dialog) closeDialog(); });
    dialog.querySelector('.pix-dialog-close').addEventListener('click', closeDialog);

    const copyPixButton = dialog.querySelector('.pix-copy-button');
    copyPixButton.addEventListener('click', async () => {

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(pixValue);
        } else {
          const codeField = dialog.querySelector('#pix-code');
          codeField.select();
          document.execCommand('copy');
        }

        copyPixButton.textContent = 'Chave copiada!';
        copyPixButton.disabled = true;

        window.setTimeout(() => {
          copyPixButton.textContent = 'Copiar chave Pix';
          copyPixButton.disabled = false;
        }, 1800);
      } catch (error) {
        copyPixButton.textContent = 'Não foi possível copiar';
      }
    });
  });
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

const backToTools = document.querySelector('.back');
const isHomePage = !location.pathname.includes('/ferramentas/');
const floatingSupportLink = document.querySelector('.footer-support-link');
if (backToTools || isHomePage) {
  const backToTop = document.createElement('button');
  backToTop.type = 'button';
  backToTop.className = `back-to-top${isHomePage ? ' home' : ''}`;
  backToTop.setAttribute('aria-label', 'Voltar ao início da página');
  backToTop.innerHTML = '↑';
  document.body.append(backToTop);

  const topButtonStyle = document.createElement('style');
  topButtonStyle.textContent = '.back-to-top{position:fixed;right:24px;bottom:78px;z-index:20;display:grid;place-items:center;width:42px;height:42px;border:1px solid rgba(255,255,255,.18);border-radius:50%;background:var(--orange);color:#fff;font-size:22px;line-height:1;cursor:pointer;box-shadow:0 12px 26px rgba(25,58,59,.2);opacity:0;visibility:hidden;pointer-events:none;transform:translateY(8px);transition:opacity .2s ease,visibility .2s ease,transform .2s ease,filter .2s ease}.back-to-top.home{bottom:24px}.back-to-top.is-visible{opacity:1;visibility:visible;pointer-events:auto;transform:translateY(0)}.back-to-top:hover,.back-to-top:focus-visible{filter:brightness(1.08);transform:translateY(-2px)}@media(max-width:600px){.back-to-top{right:20px;bottom:76px}.back-to-top.home{bottom:20px}}';
  document.head.append(topButtonStyle);

  const updateTopButton = () => {
    const isScrolled = window.scrollY > 240;
    backToTop.classList.toggle('is-visible', isScrolled);
    floatingSupportLink?.classList.toggle('is-visible', isScrolled);
  };

  window.addEventListener('scroll', updateTopButton, { passive: true });
  updateTopButton();
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
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
