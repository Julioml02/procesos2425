const fs=require("fs");
const express = require('express');
const app = express();
const modelo = require("./servidor/modelo.js");
const PORT = process.env.PORT || 3000;

let sistema = new modelo.Sistema();


app.use(express.static(__dirname + "/"));

//------------------

app.get("/", function(request,response){
    let contenido=fs.readFileSync(__dirname+"/cliente/index.html");
    // contenido sí está definido
    response.setHeader("Content-type","text/html");
    response.send(contenido);
});


app.get("/agregarUsuario/:nick",function(request,response){
    let nick=request.params.nick;
    let res=sistema.agregarUsuario(nick); 
    response.send(res);
});


app.get("/obtenerUsuarios",function(request,response){
    let lista=[]
    for(usr in this.usuarios){
        lista.push(this.usuarios[usr])
    }
    return lista;
});

app.get("/usuarioActivo/:nick",function(request,response){
    let nick=request.params.nick;
    let res=sistema.usuarioActivo(nick);
    response.send(res);
});

app.get("/eliminarUsuario/:nick",function(request,response){
    let nick=request.params.nick;
    let res=sistema.eliminarUsuario(nick);
    response.send(res);
});

app.get("/numeroUsuarios",function(request,response){
    let num=sistema.numeroUsuarios();
    response.send(num);
});


    

//-------------------

app.listen(PORT, () => {
    console.log(`App está escuchando en el puerto ${PORT}`);
    console.log('Ctrl+C para salir');
});
