import { test, expect } from '@playwright/test';

test('that the different product pages load properly', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page
    .getByRole('link', {
      name: 'Categoria: Design Nível de dificuldade: Iniciante UX Design Fundamentals',
    })
    .click();
  await expect(
    page.getByRole('heading', { name: 'UX Design Fundamentals' }),
  ).toBeVisible();
  await expect(page.getByText('Aprenda os fundamentos de UX')).toBeVisible();
  await expect(page.getByText('Este curso aborda os princí')).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Introdução ao UX Design4 aulas' }),
  ).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Prototipagem e Testes6 aulas' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Learnicorn 🦄' }).click();
  await page
    .getByRole('link', {
      name: 'Categoria: Desenvolvimento Nível de dificuldade: Avançado React Avançado Domine',
    })
    .click();
  await expect(
    page.getByRole('heading', { name: 'React Avançado' }),
  ).toBeVisible();
  await expect(page.getByText('Domine conceitos avançados de')).toBeVisible();
  await expect(page.getByText('Este curso aprofunda os')).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Hooks Avançados7 aulas' }),
  ).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Gerenciamento de Estado8 aulas' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Learnicorn 🦄' }).click();
  await page
    .getByRole('link', {
      name: 'Categoria: Produto Nível de dificuldade: Iniciante Product Management 101',
    })
    .click();
  await expect(
    page.getByRole('heading', { name: 'Product Management' }),
  ).toBeVisible();
  await expect(page.getByText('Inicie sua carreira em gestão')).toBeVisible();
  await expect(page.getByText('Este curso introdutório à')).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Fundamentos de Produto5 aulas' }),
  ).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Descoberta e Validação6 aulas' }),
  ).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Métricas e Analytics4 aulas' }),
  ).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Execução e Delivery5 aulas' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Learnicorn 🦄' }).click();
  await page
    .getByRole('link', {
      name: 'Categoria: Dados Nível de dificuldade: Intermediário Data Science para Produto',
    })
    .click();
  await expect(
    page.getByRole('heading', { name: 'Data Science para Produto' }),
  ).toBeVisible();
  await expect(page.getByText('Use dados para tomar melhores')).toBeVisible();
  await expect(page.getByText('Este curso ensina como')).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Fundamentos de Análise de' }),
  ).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Métricas para Produto5 aulas' }),
  ).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Testes A/B7 aulas' }),
  ).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Modelos Preditivos8 aulas' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Todos os cursos' }).click();
  await page
    .getByRole('listitem')
    .filter({
      hasText:
        'Categoria: DesignNível de dificuldade: IntermediárioIA Generativa para',
    })
    .click();
  await expect(
    page.getByRole('heading', { name: 'IA Generativa para Designers' }),
  ).toBeVisible();
  await expect(page.getByText('Aprenda a usar IA para')).toBeVisible();
  await expect(page.getByText('Este curso explora como')).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Fundamentos de IA Generativa4' }),
  ).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Ferramentas de IA para' }),
  ).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Prompts e Direção Criativa5' }),
  ).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Integrando IA no Fluxo de' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Todos os cursos' }).click();
  await page
    .getByRole('link', {
      name: 'Categoria: Desenvolvimento Nível de dificuldade: Intermediário Full-Stack',
    })
    .click();
  await expect(
    page.getByRole('heading', { name: 'Full-Stack JavaScript' }),
  ).toBeVisible();
  await expect(page.getByText('Desenvolva aplicações')).toBeVisible();
  await expect(page.getByText('Este curso abrangente ensina')).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Front-end com React10 aulas' }),
  ).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Back-end com Node.js12 aulas' }),
  ).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Bancos de Dados8 aulas' }),
  ).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Autenticação e Segurança6' }),
  ).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Deployment e DevOps5 aulas' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Learnicorn 🦄' }).click();
  await page
    .getByRole('link', {
      name: 'Categoria: Produto Nível de dificuldade: Avançado Product Leadership Desenvolva',
    })
    .click();
  await expect(
    page.getByRole('heading', { name: 'Product Leadership' }),
  ).toBeVisible();
  await expect(page.getByText('Este curso avançado aborda os')).toBeVisible();
  await expect(page.getByText('Desenvolva habilidades de')).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Liderança e Gestão de Times7' }),
  ).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Estratégia e Visão de' }),
  ).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Relacionamento com' }),
  ).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Métricas e OKRs6 aulas' }),
  ).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Cultura de Produto4 aulas' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Learnicorn 🦄' }).click();
  await page
    .getByRole('link', {
      name: 'Categoria: Dados Nível de dificuldade: Iniciante Análise de Dados com Python',
    })
    .click();
  await expect(
    page.getByRole('heading', { name: 'Análise de Dados com Python' }),
  ).toBeVisible();
  await expect(page.getByText('Este curso ensina análise e')).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Introdução ao Python para' }),
  ).toBeVisible();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Manipulação de Dados com' }),
  ).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Visualização com Matplotlib e' }),
  ).toBeVisible();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Análise Estatística Básica5' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Learnicorn 🦄' }).click();
});
