import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../services/FirebaseConfig";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  const saveProduct = async (event) => {
    event.preventDefault(); // Evita el envío del formulario y la recarga de la página

    await addDoc(collection(db, "Articulos"), {
      name: name,
      price: price,
      description: description,
      img: img,
      category: category,
      stock: stock,
    });
    console.log(name, stock);

    // Limpia los campos después de guardar el producto
    setName("");
    setPrice("");
    setDescription("");
    setImg("");
    setCategory("");
    setStock("");
  };

  return (
    <>
      <form>
        <label>Nombre</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <label>Precio</label>
        <input type="text" value={price} onChange={(event) => setPrice(event.target.value)} />
        <label>Imagen</label>
        <input type="text" value={img} onChange={(event) => setImg(event.target.value)} />
        <label>Descripcion</label>
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        <label>Categoria</label>
        <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
        <label>Stock</label>
        <input type="text" value={stock} onChange={(event) => setStock(event.target.value)} />
        <button onClick={(event) => saveProduct(event)}>Guardar producto</button>
      </form>
    </>
  );
}
