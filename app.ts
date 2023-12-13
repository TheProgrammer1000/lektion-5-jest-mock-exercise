import express, {json} from "express";

export const makeApp = () => {
  const app = express();

  app.use(json())

  app.post('/product', async (req, res) => {

    const errors = [];
    if(!req.body.name || !req.body.description || !req.body.price || !req.body.currency || !isNaN(req.body.price) || req.body.currency.length !== 3) {
      errors.push({error: "All the fields are required with right format"});
      return res.status(400).send();
    }
    else {
      return res.status(200).send();
    }
  });

  return app;
};
