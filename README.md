# Consultas MongoDB
Repositorio con consultas para la tienda Catálogo de Productos.
# Consultas de MongoDB — Catálogo de Productos (UNAD)

Este repositorio contiene las consultas realizadas en el marco de la actividad de Big Data para la tienda en línea “Catálogo de Productos”. Se documentan operaciones CRUD, filtros con operadores y agregaciones para análisis de inventario, precios y valoraciones.

## Requisitos
- MongoDB Shell o MongoDB Compass
- Base de datos `tienda` con colección `productos`

## Estructura de los documentos
- `_id`: ObjectId
- `nombre`: String
- `marca`: String
- `categoria`: String
- `precio`: Number
- `stock`: Number
- `caracteristicas`: Object (ej. `{ conexion: "USB" }`)
- `valoraciones`: Array
- `fecha_creacion`: Date

## Cómo usar
1. Abre MongoDB Shell o Compass.
2. Selecciona la base de datos:
   ```js
   use tienda