import { default as request } from 'supertest';
import {makeApp} from './app';

const createProduct = jest.fn();

const app = makeApp({createProduct});

const validProductData = {
  name: "Macbook Pro",
  description: "Reasonably priced laptop",
  price: 1800,
  currency: "USD",
}

const invalidProductData = {
  name: "Macbook Pro",
  description: "Reasonably priced laptop",
  currency: "USD",
}

describe('POST /product', () => {

  // Innan varje it eller test i describen körs så körs beforeEach 
  beforeEach(() => {
    createProduct.mockRestore();
    // Låtsas att detta är svaret vi får från den här metoden.
    createProduct.mockResolvedValue({ name: 'MackBook Pro',
      description: 'Reasonably priced laptop',
      price: 1800,
      currency: 'USD'});
  })

  it("should return status code 200 when posting product with valid data", async () => {
    const response = await request(app).post("/product").send(validProductData);
    expect(response.statusCode).toBe(200);
  })

  it('should return status code 400 when posting product with invalid data', async () => {
    const response = await request(app).post("/product").send(invalidProductData);
    expect(response.statusCode).toBe(400);
  })

  it('should call createProduct 1 time', async () => {
    const response = await request(app).post("/product").send(validProductData);
    expect(createProduct.mock.calls.length).toBe(1)
  })


})

describe('GET /product/:id', () => {
  it('should return status code 400 if invalid MongoDB id is provided', () => {
    expect(true).toBe(false);
  })
  it('should return a product when called with a correct Id', () => {
    expect(true).toBe(false);
  })
})
