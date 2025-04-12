import { test, expect } from '@playwright/test';

test('that filtering courses by "Desenvolvimento" category shows only data related courses', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Categoria').selectOption('Produto');
  // await page.goto('http://localhost:3000/?category=Produto');
  await expect(page.getByLabel('Categoria')).toHaveValue('Produto');
  await expect(page.getByRole('main')).toContainText('Mostrando 2 de 8 cursos');
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Produto Nível de dificuldade: Iniciante Product Management 101',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Produto Nível de dificuldade: Avançado Product Leadership Desenvolva',
    }),
  ).toBeVisible();
});
