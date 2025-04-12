import { test, expect } from '@playwright/test';

test('that the enrollment button enters loading mode after click and toast renders properly', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/');
  await page
    .getByRole('link', {
      name: 'Categoria: Design Nível de dificuldade: Iniciante UX Design Fundamentals',
    })
    .click();
  await page.getByRole('button', { name: 'Matricular-se' }).click();
  await expect(
    page.getByRole('button', { name: 'Processando...' }),
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Processando...' }),
  ).toBeDisabled();
  await expect(page.getByText('Matrícula no curso "UX Design')).toBeVisible();
});
