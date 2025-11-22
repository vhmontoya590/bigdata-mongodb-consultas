# bigdata-mongodb-consultas
Consultas de MongoDB para la tienda “Catálogo de Productos”.
# Consultas de MongoDB — Catálogo de Productos (UNAD)

Repositorio con las consultas utilizadas en la actividad de Big Data para la tienda en línea “Catálogo de Productos”. Incluye operaciones CRUD, filtros con operadores y agregaciones para análisis de inventario, precios y valoraciones.

## Requisitos
- MongoDB Shell o MongoDB Compass
- Base de datos `tienda` y colección `productos`

## Campos del documento `productos`
- _id (ObjectId)
- nombre (String)
- marca (String)
- categoria (String)
- precio (Number)
- stock (Number)
- caracteristicas (Object, ej. { conexion: "USB" })
- valoraciones (Array)
- fecha_creacion (Date)

## Uso rápido
1. Selecciona la base de datos:
   ```js
   use tienda
