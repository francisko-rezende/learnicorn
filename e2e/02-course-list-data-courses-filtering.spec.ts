import { test, expect } from '@playwright/test';

test('that filtering courses by "Dados" category shows only data related courses', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Categoria').selectOption('Dados');
  // await page.goto('http://localhost:3000/?category=Dados');
  await expect(page.getByLabel('Categoria')).toHaveValue('Dados');
  await expect(page.getByRole('main')).toContainText('Mostrando 2 de 8 cursos');
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Dados Nível de dificuldade: Intermediário Data Science para Produto',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Dados Nível de dificuldade: Iniciante Análise de Dados com Python',
    }),
  ).toBeVisible();
});
