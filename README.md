
# Pre Entrega Proyecto NodeJs Talento Tech

Esta primer versión del proyecto se basa en consultar una API externa [FAKESTORE API](https://fakestoreapi.com) y mediantes comandos de consola realizar diferentes operaciones con ella. 


 


![Logo](https://media.licdn.com/dms/image/v2/D4D22AQEmMyi18MhzKg/feedshare-shrink_800/B4DZRSAB19G4As-/0/1736542527613?e=2147483647&v=beta&t=uN-k9eZeg69PE34K8e1cbyzDtphjxUMeDGsOAdV6VMU)


## Ejecutar localmente

Clonar el proyecto

```bash
  git clone https://github.com/NicoNZ12/TalentoTech-PreEntrega-nodejs.git
```

Acceder al directorio del proyecto

```bash
  cd TalentoTech-PreEntrega-nodejs
```

Ejecutar el programa

```bash
  npm start
```


## API Reference

#### Obtener todos los productos

```http
  npm start GET products
```


#### Obtener un producto por ID

```http
  npm start GET products <id>
```


#### Añadir un producto

```http
  npm start POST products <title> <price> <category>
```

#### Eliminar un producto

```http
  npm start DELETE products <id>
```
## Autor

- [Nicolás Nuñez](https://github.com/NicoNZ12)

