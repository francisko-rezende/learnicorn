import { test, expect } from '@playwright/test';

test('that the course list page loads properly with all 8 courses', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/');
  await expect(
    page.getByRole('heading', { name: 'Nossos cursos' }),
  ).toBeVisible();
  await expect(page.getByLabel('Categoria')).toHaveValue('');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue('');
  await expect(page.getByRole('main')).toContainText('Mostrando 8 de 8 cursos');
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Design Nível de dificuldade: Iniciante UX Design Fundamentals',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Desenvolvimento Nível de dificuldade: Avançado React Avançado Domine',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Produto Nível de dificuldade: Iniciante Product Management 101',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Dados Nível de dificuldade: Intermediário Data Science para Produto',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Design Nível de dificuldade: Intermediário IA Generativa para',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Desenvolvimento Nível de dificuldade: Intermediário Full-Stack',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Produto Nível de dificuldade: Avançado Product Leadership Desenvolva',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Dados Nível de dificuldade: Iniciante Análise de Dados com Python',
    }),
  ).toBeVisible();
});
