const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  let producto = req.body;
  const newProduct = new Product({ ...producto });
  console.log(producto);
  console.log(`Product: ${Product}`);
  console.log(`Procuto creado > newProduct: ${newProduct}`);
  res.status(200).send(newProduct);

  try {
    const productSaved = await newProduct.save();
    console.log(productSaved);
    if (productSaved) {
      res.status(201).json(productSaved);
    } else {
      res.status(500).send("Error al guardar producto");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getProducts = async (req, res) => {
  const prodsFromDB = await Product.find();
  try {
    if (prodsFromDB) {
      res.status(201).json(prodsFromDB);
    } else {
      res.status(500).send("Error en lectura de producto");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const ProdByID = await Product.findById(id);
    if (ProdByID) {
      res.status(201).json(ProdByID);
    } else {
      res.status(500).send("Error en lectura de producto");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateProductById = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const newProdByID = await Product.findByIdAndUpdate(id, { ...body });
    console.log(newProdByID);
    if (newProdByID) {
      res.status(201).json(newProdByID);
    } else {
      res.status(500).send("Error en actualizacion de producto");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const oldProdByID = await Product.findByIdAndDelete(id);
    console.log(oldProdByID);
    if (oldProdByID) {
      res.status(201).json(oldProdByID);
    } else {
      res.status(500).send("Error al eliminar producto");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.addSupplierToProductById = async (req, res) => {
  const id = req.params.id;
  const suplierId = req.params.id;
  const suplier = req.body;

  res.status(201).json(id, suplierId, suplier);

  //     try {
  //         const ProdByID = await Product.findById(id)
  //         if (ProdByID) {
  //          res.status(201).json(ProdByID)
  //          } else {
  //          res.status(500).send('Error en lectura de producto')
  //          };
  //     } catch (error) {
  //         console.log(error);
  //     }

  //     try {
  //         const newProdByID = await Product.updateOne(id,{$push:provider})
  //         console.log(newProdByID);
  //         if (newProdByID) {
  //             res.status(201).json(newProdByID)
  //         } else {
  //             res.status(500).send('Error en actualizacion de producto')
  //         };
  //     } catch (error) {
  //         console.log(error);
  //     }

  // }
};
