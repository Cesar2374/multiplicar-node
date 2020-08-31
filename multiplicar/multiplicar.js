// Requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite=10) => {
    return new Promise((resolve, reject) => {

        console.log('======================='.green)
        console.log(`Tabla de ${base}`.green)
        console.log('======================='.green)
        if(!Number(base)){
            reject(`La base introducida '${base}' no es un numero`);
            return;
        }
        if(!Number(limite)){
            reject(`El limite introducido ${limite} no es un numero`);
            return;
        }

        let data = '';
        for(let i = 0; i <= limite; i++){
            data += `${base} * ${i} = ${base*i}\n`
        }

        resolve(data)
    })
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido \'${base}\' no es un numero`);
            return;
        }
        
        let data = '';
        
        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(`Numero no valido`)
            else    
                resolve(`tabla-${base}-al-${limite}.txt`);

            // console.log(`El archivo tabla-${base}.txt ha sido creado`);
          });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
