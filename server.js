// server.js
import express from 'express';
import { Liquid } from 'liquidjs';
import path from 'path';

const app = express();
const port = process.env.PORT || 8000;

// ====================
// MIDDLEWARE
// ====================
app.use(express.urlencoded({ extended: true }));

// static files (zorg dat /assets bestaat!)
app.use(express.static('assets'));

// ====================
// LIQUID ENGINE
// ====================
const engine = new Liquid({
  root: path.resolve('./views'),
  extname: '.liquid'
});

app.engine('liquid', engine.express());
app.set('view engine', 'liquid');

// ====================
// GET ROUTE (PRODUCTEN)
// ====================
app.get('/', async function (req, res) {
  const userId = 62;

  const params = {
    fields: "id,name,image,amount"
  };

  // filters
  if (req.query.price) {
    params["filter[amount][_between]"] = "0," + req.query.price;
  }

  if (req.query.age) {
    params["filter[age][_lte]"] = req.query.age;
  }

  if (req.query.for) {
    params["filter[for][_eq]"] = req.query.for;
  }

  if (req.query.message) {
    params["search"] = req.query.message;
  }

  params["sort"] = "id";

  try {
    // producten ophalen
    const productResponse = await fetch(
      "https://fdnd-agency.directus.app/items/milledoni_products/?" +
      new URLSearchParams(params)
    );
    const productData = await productResponse.json();

    // wishlist ophalen (voor groene knop)
    const userResponse = await fetch(
      `https://fdnd-agency.directus.app/items/milledoni_users/${userId}/?fields=liked_products.milledoni_products_id.id`
    );

    const userData = await userResponse.json();

    const likedProducts = userData.data.liked_products.map(
      item => item.milledoni_products_id.id
    );

    res.render("index.liquid", {
      products: productData.data,
      likedProducts,
      status: req.query.status // 👈 voor popup
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Fout bij laden producten");
  }
});

// ====================
// POST ROUTE (LIKE BUTTON)
// ====================
app.post('/like', async function (req, res) {
  const userId = 62;
  const productId = req.body.product_id;

  try {
    // check duplicate
    const checkResponse = await fetch(
      `https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products_1?filter[milledoni_users_id][_eq]=${userId}&filter[milledoni_products_id][_eq]=${productId}`
    );

    const checkData = await checkResponse.json();

    if (checkData.data.length > 0) {
      return res.redirect(303, '/?status=error');
    }

    // toevoegen
    await fetch(
      "https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products_1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          milledoni_users_id: userId,
          milledoni_products_id: productId,
        }),
      }
    );

    return res.redirect(303, '/?status=success');

  } catch (error) {
    console.error(error);
    return res.redirect(303, '/?status=error');
  }
});

// ====================
// GET ROUTE (WISHLIST)
// ====================
app.get('/wishlist', async function (req, res) {
  const userId = 62;

  try {
    const userResponse = await fetch(
      `https://fdnd-agency.directus.app/items/milledoni_users/${userId}/?fields=liked_products.milledoni_products_id.*`
    );

    const userData = await userResponse.json();

    const likedProducts = userData.data.liked_products.map(
      item => item.milledoni_products_id
    );

    res.render('wishlist.liquid', {
      likedProducts
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Fout bij laden wishlist");
  }
});

// ====================
// SERVER STARTEN
// ====================
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});