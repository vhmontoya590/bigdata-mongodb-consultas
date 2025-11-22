
// =====================
// Inserción de documentos
// =====================
db.productos.insertOne({
  nombre: "Periféricos modelo 1",
  marca: "ASUS",
  categoria: "Periféricos",
  precio: 999999,
  stock: 28,
  caracteristicas: { conexion: "USB", color: "Negro" },
  valoraciones: [{ usuario: "Juan", puntuacion: 4, comentario: "Buen rendimiento" }],
  fecha_creacion: ISODate("2025-01-14T22:47:30Z")
});

// =====================
// Selección con filtros básicos
// =====================
db.productos.find({ precio: { $gt: 899000 } });         // Precio mayor a 899.000
db.productos.find({ categoria: "Consolas" });           // Productos por categoría

// =====================
// Actualización de documentos
// =====================
db.productos.updateOne(
  { nombre: "Periféricos modelo 1" },
  { $set: { stock: 35 } }
); // Ajustar inventario

// =====================
// Eliminación de documentos
// =====================
db.productos.deleteOne({ nombre: "Periféricos modelo 1" });

// =====================
// Consultas con operadores
// =====================
db.productos.find({ precio: { $gt: 3000000 } });        // Precio > 3'000.000
db.productos.find({ stock: { $gte: 5, $lte: 40 } });    // Stock entre 5 y 40
db.productos.find({ "caracteristicas.conexion": { $in: ["USB", "USB-C"] } });

// =====================
// Agregaciones
// =====================

// 1) Contar productos
db.productos.aggregate([
  { $count: "total_productos" }
]);

// 2) Promedio de precios
db.productos.aggregate([
  { $group: { _id: null, promedio_precio: { $avg: "$precio" } } }
]);

// 3) Productos por categoría
db.productos.aggregate([
  { $group: { _id: "$categoria", cantidad: { $sum: 1 } } },
  { $sort: { cantidad: -1 } }
]);

// 4) Valor total del inventario (precio * stock)
db.productos.aggregate([
  { $group: { _id: null, valor_total: { $sum: { $multiply: ["$precio", "$stock"] } } } }
]);
