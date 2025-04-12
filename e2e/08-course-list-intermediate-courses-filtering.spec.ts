import { test, expect } from '@playwright/test';

test('that filtering courses by "Intermediário" difficulty level shows only data related courses', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue('');
  await expect(page.getByRole('main')).toContainText('Mostrando 8 de 8 cursos');
  await page.getByLabel('Nível de dificuldade').selectOption('intermediario');
  // await page.goto('http://localhost:3000/?level=intermediario');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue(
    'intermediario',
  );
  await expect(page.getByRole('main')).toContainText('Mostrando 3 de 8 cursos');
  await expect(
    page.getByRole('link', { name: 'Categoria: Dados Nível de' }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Categoria: Design Nível de' }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Categoria: Desenvolvimento Ní' }),
  ).toBeVisible();
});
