// @ts-check
import { test, expect } from '@playwright/test';

const CAT_PREFIX_IMAGE_URL = 'https://thecatapi.com/'
const LOCALHOST_URL = 'http:localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')
  //const image = await page.getByRole('img')

  const textContent = await text.textContent()
  //const imageSrc = await image.getAttribute('src')

  expect(textContent?.length).toBeGreaterThan(1)
  //expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()

  // Verifica que el canvas esté presente
  const canvas = await page.$('canvas');
  expect(canvas).not.toBeNull();

  // Toma una captura de pantalla del canvas
  const screenshot = await canvas.screenshot();

  // Puedes hacer verificaciones más detalladas sobre el canvas
  // Por ejemplo, comparar la captura de pantalla con una imagen de referencia
  expect(screenshot).toMatchSnapshot('canvas-snapshot.png');
});
