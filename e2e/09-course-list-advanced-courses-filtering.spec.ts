import { test, expect } from '@playwright/test';

test('that filtering courses by "Avançado" difficulty level shows only advanced courses', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue('');
  await expect(page.getByRole('main')).toContainText('Mostrando 8 de 8 cursos');
  await page.getByLabel('Nível de dificuldade').selectOption('avancado');
  // await page.goto('http://localhost:3000/?level=avancado');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue('avancado');
  await expect(page.getByRole('main')).toContainText('Mostrando 2 de 8 cursos');
  await expect(
    page.getByRole('link', { name: 'Categoria: Desenvolvimento Ní' }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Categoria: Produto Nível de' }),
  ).toBeVisible();
});
