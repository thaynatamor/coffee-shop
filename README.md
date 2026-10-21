# ☕ Coffee Shop

**Projeto de estudos de interface web · HTML, CSS e JavaScript**

Uma cafeteria fictícia utilizada para praticar estruturação de páginas, composição visual e navegação responsiva. O visual utiliza tons escuros e detalhes em café e dourado.

**Desenvolvimento e manutenção: Thayná Tamor.**

## Prévia

![Página inicial — registro da versão original](assets/home.png)

![Página de contato — registro da versão original](assets/contato.png)

As imagens acima registram a versão original; a revisão atual corrige navegação, acessibilidade e adaptação para telas menores.

## Recursos disponíveis

- Página inicial com apresentação visual de um produto ilustrativo.
- Seção explicando a proposta do projeto.
- Navegação responsiva com menu para dispositivos móveis.
- Página de contato demonstrativa com validação nativa do navegador.
- Feedback explícito de que o formulário não envia nem armazena mensagens.
- Estilos de foco e respeito à preferência de movimento reduzido.

## Escopo

Este projeto é um exercício de frontend. Não possui cadastro, login, banco de dados, processamento de pedidos ou pagamentos. Produtos e valores são fictícios.

## Tecnologias

HTML5, CSS3 e JavaScript. A apresentação original também utiliza Google Fonts, Boxicons, Remix Icon e AOS por CDN. Esses recursos externos precisam de conexão com a internet.

## Executar localmente

1. Baixe o repositório em **Code → Download ZIP** e extraia os arquivos; ou clone com Git:

```bash
git clone https://github.com/thaynatamor/coffee-shop.git
cd coffee-shop
```

2. Abra `index.html` no navegador. Não é necessário instalar pacotes com npm.
3. Opcionalmente, use um servidor estático, como a extensão Live Server do VS Code.

## Organização

| Caminho | Conteúdo |
| --- | --- |
| `index.html` | Página inicial |
| `style.css` | Estilos e adaptação da página inicial |
| `script.js` | Comportamento do menu |
| `contato/` | Página, estilos e script do formulário demonstrativo |
| `img/` | Imagens utilizadas no site |
| `assets/` | Imagens de apresentação do repositório |

## Revisão técnica

Foram corrigidos caminhos locais, referência ao script do menu, divergências de nomes de classes e largura do formulário. O formulário demonstrativo impede o envio padrão e não utiliza armazenamento local.

O servidor Node de exemplo e a consulta SQL isolada foram retirados desta versão por não integrarem a experiência publicada.

## Aprendizados e evolução

O projeto registra uma etapa de aprendizagem em desenvolvimento web. A revisão trabalha principalmente navegação, semântica, formulários e organização de arquivos. Uma evolução possível é criar um cardápio com dados fictícios, como funcionalidade futura.

## Créditos

Bibliotecas, fontes e imagens de terceiros seguem as condições de seus titulares. Antes de redistribuir os recursos visuais, verifique sua origem e permissões. Se a implementação original partiu de um tutorial ou referência, registre aqui o crédito correspondente; a origem das imagens não foi confirmada nesta revisão.

O campo de licença ISC já existia no `package.json` e foi preservado. Ele não confirma direitos de redistribuição de imagens de terceiros.
