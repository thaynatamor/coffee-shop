# ☕ Coffee Shop

### Uma experiência visual para uma cafeteria fictícia

**Projeto desenvolvido para o TCC do curso técnico em Informática**  
**Autoria e desenvolvimento: Thayná Tamor**  
HTML · CSS · JavaScript · Interface responsiva

[Conheça a proposta](#sobre-o-projeto) · [Veja a implementação](#como-o-projeto-foi-construído) · [Execute localmente](#como-executar) · [Conheça os aprendizados](#aprendizados)

## Sobre o projeto

Desenvolvi o Coffee Shop para o Trabalho de Conclusão de Curso (TCC) do meu curso técnico em Informática. O projeto apresenta uma cafeteria fictícia e reúne conhecimentos aplicados durante minha formação.

A versão disponibilizada neste repositório preserva a interface do projeto e foi organizada como uma demonstração pública, com página inicial e formulário de contato demonstrativo.

O código disponível reúne estrutura em HTML, estilização com CSS e interações em JavaScript. Após o desenvolvimento acadêmico, a interface recebeu uma revisão de navegação, organização e adaptação para telas menores.

## Contexto acadêmico e versão preservada

| Aspecto | Informação |
| --- | --- |
| Finalidade original | Trabalho de Conclusão de Curso |
| Formação | Curso técnico em Informática |
| Autora | Thayná Tamor |
| Tema | Apresentação de uma cafeteria fictícia |
| Versão pública atual | Demonstração da interface preservada e revisada |

A implementação original de cadastro/login e a estrutura completa do banco não estão disponíveis nos arquivos preservados. Por isso, esta versão não representa o sistema completo apresentado no TCC e não oferece esses recursos. Sua reconstrução não faz parte desta revisão.

**Responsável pelo desenvolvimento e pela evolução do projeto: Thayná Tamor.** Recursos de terceiros são identificados na seção de créditos.

## Prévia visual

### Página inicial

![Página inicial do Coffee Shop — versão original](assets/home.png)

### Página de contato

![Página de contato do Coffee Shop — versão original](assets/contato.png)

As capturas registram a versão original. A revisão atual inclui ajustes no menu, nos textos, no formulário e na adaptação para celular.

## Implementação da interface disponível

| Parte do projeto | Implementação | Conhecimento aplicado |
| --- | --- | --- |
| Página inicial | Cabeçalho, navegação, apresentação do produto e chamada para contato | Estrutura HTML e hierarquia de conteúdo |
| Identidade da interface | Fundo escuro, detalhes em dourado, tipografia e imagem de destaque | Composição visual e estilização com CSS |
| Organização do layout | Distribuição do texto e da imagem com Grid; alinhamentos com Flexbox | Posicionamento e organização de componentes |
| Adaptação de telas | Regras de CSS com media queries | Ajustes de layout conforme a largura disponível |
| Navegação mobile | Abertura e fechamento do menu com JavaScript | Manipulação do DOM, eventos e classes |
| Contato demonstrativo | Campos de nome, e-mail e mensagem | Formulários e validação nativa do navegador |

## Como o projeto foi construído

### 1. Estrutura das páginas

A página principal organiza a apresentação da cafeteria, a imagem do produto e os caminhos de navegação. A página de contato fica em uma pasta própria, com estilos e comportamento separados.

Os arquivos HTML fazem referência aos estilos, aos scripts e às imagens por caminhos relativos. Isso permite abrir o projeto em outra pasta ou hospedagem sem depender do caminho do meu computador.

### 2. Estilização e responsividade

O CSS utiliza variáveis para cores e tamanhos, facilitando a manutenção da identidade visual. Grid e Flexbox organizam os elementos; media queries ajustam a navegação, o conteúdo e a imagem em diferentes larguras.

A revisão substitui a largura fixa do formulário por um limite que respeita o espaço disponível na tela. Os estilos de foco ajudam a identificar o elemento selecionado pelo teclado.

### 3. Interações com JavaScript

O script da página inicial controla o menu mobile. A classe visual de abertura é sincronizada com o atributo `aria-expanded`, que informa o estado do botão às tecnologias assistivas.

O menu fecha ao escolher um link ou pressionar Escape. Ao fechar com Escape, o foco retorna ao botão do menu.

Na página de contato, o script intercepta o envio com `preventDefault()`, apresenta uma mensagem explicando a demonstração e limpa os campos. Os dados não são enviados nem persistidos pelo código da aplicação.

### 4. Movimento e acessibilidade

A interface mantém efeitos visuais e oferece regras para respeitar a preferência de movimento reduzido. O formulário possui rótulos associados aos campos e uma região de status para anunciar o resultado da interação.

Esses recursos são melhorias de acessibilidade; não representam uma certificação ou auditoria completa.

## Tecnologias e responsabilidades

| Tecnologia | Utilização |
| --- | --- |
| HTML5 | Estrutura, navegação, imagens e formulário |
| CSS3 | Cores, tipografia, layout e adaptação de telas |
| JavaScript | Eventos, menu mobile e feedback do formulário |
| Google Fonts | Fontes utilizadas na apresentação |
| Boxicons e Remix Icon | Bibliotecas de ícones referenciadas no projeto |
| AOS | Animações de entrada na página inicial |

O projeto não utiliza React nem exige instalação de dependências com npm. Fontes e bibliotecas carregadas por CDN precisam de conexão com a internet.

## Melhorias posteriores ao TCC

| Situação anterior | Ajuste realizado |
| --- | --- |
| Links apontavam para arquivos do computador ou localhost | Navegação com caminhos relativos |
| HTML procurava o script em uma pasta inexistente | Referência corrigida para o arquivo disponível |
| Nomes de classes divergiam entre HTML e CSS | Padronização dos seletores utilizados |
| O formulário tinha largura fixa | Largura adaptada ao espaço disponível |
| O envio do formulário não tinha comportamento definido | Demonstração explícita, sem transmissão dos campos |
| Documentação mencionava recursos não implementados | README alinhado ao escopo atual |

O servidor Node de exemplo e a consulta SQL isolada não integram a versão demonstrativa atual.

## Escopo da demonstração

O Coffee Shop é um projeto de frontend, com produtos e preços ilustrativos. A versão atual não oferece cadastro, autenticação, banco de dados, pedidos ou pagamentos. O formulário não envia mensagens reais.

Não são incluídos dados de clientes, contas de acesso ou configurações de banco neste material.

## Como executar

1. Baixe o repositório em **Code → Download ZIP** e extraia os arquivos. Se utilizar Git:

```bash
git clone https://github.com/thaynatamor/coffee-shop.git
cd coffee-shop
```

2. Abra `index.html` no navegador.
3. Para trabalhar com atualização automática, utilize opcionalmente um servidor estático, como o Live Server no VS Code.

## Organização dos arquivos

| Caminho | Responsabilidade |
| --- | --- |
| `index.html` | Conteúdo da página inicial |
| `style.css` | Layout, identidade visual e responsividade |
| `script.js` | Controle do menu mobile |
| `contato/index.html` | Formulário demonstrativo |
| `contato/style.css` | Estilos da página de contato |
| `contato/script.js` | Feedback local do formulário |
| `img/` | Recursos visuais utilizados nas páginas |
| `assets/` | Capturas para apresentação no GitHub |

## Aprendizados

O desenvolvimento do Coffee Shop integrou meu TCC no curso técnico em Informática e representa uma etapa da minha formação prática. Na interface preservada, é possível observar a relação entre estrutura HTML, apresentação visual e comportamento da página.

A revisão posterior também evidencia a importância de manter os caminhos dos arquivos corretos, organizar os seletores de CSS e descrever com clareza o que a aplicação faz.

O repositório representa minha evolução em desenvolvimento web. Novas funcionalidades podem ser incorporadas futuramente, mas não são apresentadas aqui como recursos concluídos.

## Créditos e referências

**Desenvolvimento e manutenção: Thayná Tamor.**

Bibliotecas, fontes e imagens de terceiros pertencem aos respectivos titulares. O crédito de desenvolvimento se refere à implementação e à manutenção do projeto, sem atribuir a mim a autoria desses recursos.

A origem das imagens e de possíveis referências de layout ou tutorial não foi confirmada nesta revisão. Esses créditos devem ser complementados quando identificados.

O campo de licença ISC já existente no `package.json` foi preservado; a autorização de uso de imagens de terceiros depende das condições de seus titulares.
