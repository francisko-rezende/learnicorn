import { test, expect } from '@playwright/test';

test('that the different category/difficulty level combinations show the info about the appropriate courses', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByLabel('Categoria')).toHaveValue('');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue('');
  await expect(page.getByRole('main')).toContainText('Mostrando 8 de 8 cursos');
  await page.getByLabel('Categoria').selectOption('Dados');
  // await page.goto('http://localhost:3000/?category=Dados');
  await page.getByLabel('Nível de dificuldade').selectOption('iniciante');
  // await page.goto('http://localhost:3000/?category=Dados&level=iniciante');
  await expect(page.getByLabel('Categoria')).toHaveValue('Dados');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue(
    'iniciante',
  );
  await expect(
    page.getByRole('link', { name: 'Categoria: Dados Nível de' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Limpar filtros' }).click();
  await page.getByLabel('Categoria').selectOption('Dados');
  // await page.goto('http://localhost:3000/?category=Dados');
  await page.getByLabel('Nível de dificuldade').selectOption('intermediario');
  // await page.goto('http://localhost:3000/?category=Dados&level=intermediario');
  await expect(page.getByLabel('Categoria')).toHaveValue('Dados');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue(
    'intermediario',
  );
  await expect(page.getByRole('main')).toContainText('Mostrando 1 de 8 cursos');
  await expect(
    page.getByRole('link', { name: 'Categoria: Dados Nível de' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Limpar filtros' }).click();
  await page.getByLabel('Categoria').selectOption('Dados');
  // await page.goto('http://localhost:3000/?category=Dados');
  await page.getByLabel('Nível de dificuldade').selectOption('avancado');
  // await page.goto('http://localhost:3000/?category=Dados&level=avancado');
  await expect(page.getByLabel('Categoria')).toHaveValue('Dados');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue('avancado');
  await expect(page.getByRole('main')).toContainText('Mostrando 0 de 8 cursos');
  await expect(page.getByRole('main')).toContainText(
    'Nenhum curso cumpre os critérios listados',
  );
  await page.getByRole('button', { name: 'Limpar filtros' }).click();
  await page.getByLabel('Categoria').selectOption('Desenvolvimento');
  // await page.goto('http://localhost:3000/?category=Desenvolvimento');
  await page.getByLabel('Nível de dificuldade').selectOption('iniciante');
  // await page.goto('http://localhost:3000/?category=Desenvolvimento&level=iniciante');
  await expect(page.getByLabel('Categoria')).toHaveValue('Desenvolvimento');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue(
    'iniciante',
  );
  await expect(page.getByRole('main')).toContainText('Mostrando 0 de 8 cursos');
  // await expect(page.getByRole('main')).toContainText('Nenhum curso cumpre os critérios listados');
  await page.getByRole('button', { name: 'Limpar filtros' }).click();
  await page.getByLabel('Categoria').selectOption('Desenvolvimento');
  // await page.goto('http://localhost:3000/?category=Desenvolvimento');
  await page.getByLabel('Nível de dificuldade').selectOption('intermediario');
  // await page.goto('http://localhost:3000/?category=Desenvolvimento&level=intermediario');
  await expect(page.getByLabel('Categoria')).toHaveValue('Desenvolvimento');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue(
    'intermediario',
  );
  await expect(page.getByRole('main')).toContainText('Mostrando 1 de 8 cursos');
  await expect(
    page.getByRole('link', { name: 'Categoria: Desenvolvimento Ní' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Limpar filtros' }).click();
  await page.getByLabel('Categoria').selectOption('Desenvolvimento');
  // await page.goto('http://localhost:3000/?category=Desenvolvimento');
  await page.getByLabel('Nível de dificuldade').selectOption('avancado');
  // await page.goto('http://localhost:3000/?category=Desenvolvimento&level=avancado');
  await expect(page.getByLabel('Categoria')).toHaveValue('Desenvolvimento');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue('avancado');
  await expect(page.getByRole('main')).toContainText('Mostrando 1 de 8 cursos');
  await expect(
    page.getByRole('link', { name: 'Categoria: Desenvolvimento Ní' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Limpar filtros' }).click();
  await page.getByLabel('Categoria').selectOption('Design');
  // await page.goto('http://localhost:3000/?category=Design');
  await page.getByLabel('Nível de dificuldade').selectOption('iniciante');
  // await page.goto('http://localhost:3000/?category=Design&level=iniciante');
  await expect(page.getByLabel('Categoria')).toHaveValue('Design');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue(
    'iniciante',
  );
  await expect(page.getByRole('main')).toContainText('Mostrando 1 de 8 cursos');
  await expect(
    page.getByRole('link', { name: 'Categoria: Design Nível de' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Limpar filtros' }).click();
  await page.getByLabel('Categoria').selectOption('Design');
  // await page.goto('http://localhost:3000/?category=Design');
  await page.getByLabel('Nível de dificuldade').selectOption('avancado');
  // await page.goto('http://localhost:3000/?category=Design&level=avancado');
  await expect(page.getByLabel('Categoria')).toHaveValue('Design');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue('avancado');
  await expect(page.getByRole('main')).toContainText('Mostrando 0 de 8 cursos');
  await expect(page.getByRole('main')).toContainText(
    'Nenhum curso cumpre os critérios listados',
  );
  await page.getByRole('button', { name: 'Limpar filtros' }).click();
  await page.getByLabel('Categoria').selectOption('Produto');
  // await page.goto('http://localhost:3000/?category=Produto');
  await page.getByLabel('Nível de dificuldade').selectOption('iniciante');
  // await page.goto('http://localhost:3000/?category=Produto&level=iniciante');
  await expect(page.getByLabel('Categoria')).toHaveValue('Produto');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue(
    'iniciante',
  );
  await expect(page.getByRole('main')).toContainText('Mostrando 1 de 8 cursos');
  await expect(
    page.getByRole('link', { name: 'Categoria: Produto Nível de' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Limpar filtros' }).click();
  await page.getByLabel('Categoria').selectOption('Produto');
  // await page.goto('http://localhost:3000/?category=Produto');
  await page.getByLabel('Nível de dificuldade').selectOption('intermediario');
  // await page.goto('http://localhost:3000/?category=Produto&level=intermediario');
  await expect(page.getByLabel('Categoria')).toHaveValue('Produto');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue(
    'intermediario',
  );
  await expect(page.getByRole('main')).toContainText('Mostrando 0 de 8 cursos');
  await expect(page.getByRole('main')).toContainText(
    'Nenhum curso cumpre os critérios listados',
  );
  await page.getByRole('button', { name: 'Limpar filtros' }).click();
  await page.getByLabel('Categoria').selectOption('Produto');
  // await page.goto('http://localhost:3000/?category=Produto');
  await page.getByLabel('Nível de dificuldade').selectOption('avancado');
  // await page.goto('http://localhost:3000/?category=Produto&level=avancado');
  await expect(page.getByLabel('Categoria')).toHaveValue('Produto');
  await expect(page.getByLabel('Nível de dificuldade')).toHaveValue('avancado');
  await expect(page.getByRole('main')).toContainText('Mostrando 1 de 8 cursos');
  await expect(
    page.getByRole('link', { name: 'Categoria: Produto Nível de' }),
  ).toBeVisible();
});
