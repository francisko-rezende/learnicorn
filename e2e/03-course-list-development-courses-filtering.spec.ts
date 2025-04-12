import { test, expect } from '@playwright/test';

test('that filtering courses by "Desenvolvimento" category shows only data related courses', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Categoria').selectOption('Desenvolvimento');
  // await page.goto('http://localhost:3000/?category=Desenvolvimento');
  await expect(page.getByLabel('Categoria')).toHaveValue('Desenvolvimento');
  await expect(page.getByRole('main')).toContainText('Mostrando 2 de 8 cursos');
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Desenvolvimento Nível de dificuldade: Avançado React Avançado Domine',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: 'Categoria: Desenvolvimento Nível de dificuldade: Intermediário Full-Stack',
    }),
  ).toBeVisible();
});
