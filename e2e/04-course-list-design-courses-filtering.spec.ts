import { test, expect } from '@playwright/test';

test('that filtering courses by "Desenvolvimento" category shows only data related courses', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Categoria').selectOption('Design');
  // await page.goto('http://localhost:3000/?category=Design');
  await expect(page.getByLabel('Categoria')).toHaveValue('Design');
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Design Nível de dificuldade: Iniciante UX Design Fundamentals',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Design Nível de dificuldade: Intermediário IA Generativa para',
    }),
  ).toBeVisible();
});
