# Ferramentas do Professor

Este é um projeto pessoal desenvolvido para centralizar as ferramentas que foram criadas ao longo do tempo após atuar como professor de Ensino Médio Técnico na Rede Estadual. A ideia é compartilhar com outros professores soluções práticas que ajudam no dia a dia escolar, reduzindo tarefas repetitivas e tornando a rotina mais eficiente.

## Visão geral

Este repositório reúne um site estático com uma página inicial e páginas dedicadas a diferentes recursos voltados ao cotidiano escolar. A proposta é reunir, em um único lugar, ferramentas úteis para organização, planejamento e apoio administrativo da prática docente, com foco em simplicidade, acessibilidade e uso real na sala de aula.

O site está publicado em: https://ferramentas-do-professor.onrender.com/

> As ferramentas não possuem nenhum vínculo oficial com a Secretaria da Educação ou com qualquer órgão governamental.

## Ferramentas disponíveis

### 1. Scripts para o dia a dia

Códigos para navegador usando Tampermonkey, com melhorias de navegação e automações simples em plataformas e sistemas usados na rotina escolar.

### 2. Pendências de atividades

Ferramenta para acompanhar atividades pendentes e facilitar a conferência do que ainda precisa ser revisado.

### 3. Planejamento de aula

Recurso para apoiar o processo de organização e estruturação do planejamento docente.

## Estrutura do projeto

```text
.
├── assets/
│   └── icons/
├── docs/
│   ├── atividades/
│   ├── planejamento/
│   └── tampermonkey/
├── ferramentas/
│   ├── atividades.html
│   ├── planejamento.html
│   └── tampermonkey.html
├── detalhes.css
├── index.html
├── README.md
├── script.js
├── style.css
└── .git/
```

## Como executar localmente

Como o projeto é um site estático, não há etapa de build nem dependências externas para instalação.

### Opção 1: abrir diretamente no navegador

- Abra o arquivo `index.html` em qualquer navegador moderno.

### Opção 2: rodar um servidor local

No diretório raiz do projeto, execute:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Acessibilidade com ajustes de contraste e tamanho de fonte

## Observações

- O projeto foi desenvolvido para uso educacional e prático.
- As ferramentas são independentes e podem ser adaptadas conforme a necessidade da escola ou do professor.
- O conteúdo foi pensado para ser simples, rápido de usar e fácil de manter.

## Licença

Este projeto está licenciado sob a licença MIT.

A licença MIT permite uso, cópia, modificação, fusão, publicação, distribuição, sublicenciamento e/ou venda de cópias do software, desde que a licença e o aviso de copyright sejam incluídos em todas as cópias ou partes substanciais do software.

Para mais detalhes, consulte o arquivo LICENSE ou a própria licença MIT original.

## Contato

- LinkedIn: https://www.linkedin.com/in/lucas-palma-stabile
- E-mail: lucasstabile@professor.educacao.sp.gov.br
