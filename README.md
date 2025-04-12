# Tera Code Challenge --- Francisko

## Instruções para executar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/francisko-rezende/learnicorn.git
   cd learnicorn
   ```

1. **Instale as dependências Certifique-se de ter o Node.js (utilizei a versão 20.17.0) instalado. Em seguida, execute:**
   ```bash
   npm install
   ```
2. **Execute o projeto rodando os seguintes comandos:**
   ```bash
   npm run dev // roda em modo de desenvolvimento

   npm run build && npm run start // builda e roda o projeto em modo de produção
   ```

2. **Acesse o projeto usando o navegador de sua preferência (mas no chrome/chromium tem surpresa hein) usando a porta indicada no terminal, o endereço padrão é `http://localhost:3000` :**


Também fiz testes unitários e E2E. Os unitários rodam com `npm run vitest:watch` e os E2E com `npx playwright test`, mas acredito que pros testes E2E funcionarem precisa setar os navegadores. Sugiro conferir os passos [aqui](https://playwright.dev/). Ah, e os testes E2E assumem que o app vai estar rodando em `http://localhost:3000`

---

## **Escolhas técnicas e justificativas**

As tecnologias obrigatórias foram as seguintes:

- Next.js (v15+, App router)
- React Server Components
- Server Actions
- Tailwind CSS (v4+)
- Uma library de state management à sua escolha

Não vou comentar muito sobre elas porque bem, são obrigatórias.

A única que acho válido mencionar foi a lib de gerenciamento de estados.

### **Zustand e Nuqs (gerenciamento de estado)**

Aqui eu fiquei na dúvida entre [nuqs](https://nuqs.47ng.com/) e [zustand](https://zustand.docs.pmnd.rs/getting-started/introduction).
Acho que o desafio posto é um prato cheio pra nuqs já que ela permite controlar o estado via *query params* de se maneira super simples (além de ser bem performática também) o que facilita inclusive o compartilhamento do estado por URL. Porém contudo todavia entretanto, ela não é bem uma lib de gerenciamento de estado (pelo menos não no senso mais tradicional), daí fiquei meio preocupado de eu não cumprir o requisito do desafio e fiz uma versão com zustand também. Acho Zustand legal, mais enxuta do que me lembro de alternativas como Redux e entregando performance na mesma linha então acho que resolve bem o problema aqui. Apesar disso, acho a nuqs ainda mais enxuta, [aqui o commit trocando zustand por nuqs caso vc queira comparar as duas implementações](https://github.com/francisko-rezende/learnicorn/commit/9136c5e79c1f3529f8552715d888e0966a9dc3df).
Mas então foi isso, fiz duas versões. A versão com  [nuqs tá nessa branch](https://github.com/francisko-rezende/learnicorn/tree/feature/with-nuqs) e a com [zustand tá nessa](https://github.com/francisko-rezende/learnicorn/tree/feature/with-zustand). Se dependesse só de mim ia de nuqs.

Aqui um deploy da versão com nuqs: https://learnicorn.vercel.app/

### **Lefthook (pre-push hook)**

Utilizei o Lefthook para configurar um pre-push hook que roda um build antes do push, se o build falhar o push não rola. Já quebrei dev uma vez com um PR que não buildava, depois disso sempre uso esse hook.

### **Vitest (testes unitários)**

Melhor dos dois mundos: API igual do Jest (pelo menos até onde usei) só que muito mais rápido e moderno (com suporte a es modules, da última vez que usei jest não tinha, não sei isso mudou). Não vejo alternativa melhor pra testes unitários

### **Playwright (testes E2E)**

Pelo que vi tanto Cypress quanto Playwright são boas escolhas pra testes E2E, daí fui de Playwright porque tava querendo ver como funciona e não me arrependi. Tem uma extensão que faz codegen dos testes usando as ações que executamos no navegador que é mão na roda. O uso dos testes E2E trouxe muita tranquilidade na hora de ficar trocando a lib de gerenciamento de estados, é ótimo refatorar o código e pegar problemas ali nos testes.

### **ESLint + Prettier (formatação e linting)**

O arroz com feijão da qualidade de código, não dá pra ficar sem. Além do que já vem no Next, configurei o plugin do tailwind pra rolar ordenação automática das classes e evitar problemas de precedência no CSS.

### **tailwind-variants + tailwind-merge (componentização)**

Alguns componentes como as tags de dificuldade e categoria dos cursos são ótimos candidatos pra utlização de variantes, daí usei tailwind-variants aqui por ser um pouquinho mais familiar com ele do que com CVA. Também usei tailwind merge pra implementar escape hatches (no caso foi uma só, no botão de matricula pra manter ele com tamanho fixo quando rola loading)/ter a possibilidade estilizar um componente de maneira diferente sem ter que criar uma variante nova.

No mais é isso. Me diverti bastante com o projeto :)