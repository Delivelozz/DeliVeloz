const fs = require('fs');
const path = require('path');

// Ruta al archivo api.json
const apiJsonPath = path.join(__dirname, 'api.json');

// Leer el archivo api.json
const apiJson = JSON.parse(fs.readFileSync(apiJsonPath, 'utf8'));

// Modificar el objeto image de cada producto
apiJson.products.forEach(product => {
 if (typeof product.image === 'string') {
    // Si el campo image es un string, convertirlo a un objeto con jpg y png
    const imageUrl = product.image;
    const baseName = path.basename(imageUrl, '.jpg');
    product.image = {
      jpg: imageUrl,
      png: `https://example.com/images/${baseName}.png`
    };
 }
});

// Escribir el archivo api.json modificado
fs.writeFileSync(apiJsonPath, JSON.stringify(apiJson, null, 2));