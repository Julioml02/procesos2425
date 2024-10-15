const modelo=require('./modelo.js');
describe('El sistema', function() {
  let sistema;

  beforeEach(function() {
  sistema=new modelo.Sistema()
  });

  it('inicialmente no hay usuarios', function() {
    expect(sistema.numeroUsuarios()).toEqual(0);
  });
  it("comprobamos agregar usuario con nick", function(){
    //comprobar que no hay usuarios
    expect(sistema.numeroUsuarios()).toEqual(0);
    //agregar un usuario concreto
    sistema.agregarUsuario("Pepe");
    //comprobar que hay 1 usuario en el sistema
    expect(sistema.numeroUsuarios()).toEqual(1);
    //comprobar que el único que hay es el que acabamos de incluir
    expect(sistema.usuarioActivo("Pepe")).toEqual(true);
  });

  xit("comprobamos eliminar usuario", function(){
    //comprobar que no hay usuarios
    expect(sistema.numeroUsuarios()).toEqual(0);
    //agregamos un usuario
    sistema.agregarUsuario("Pepe");
    //comprobamos que el usuario creado esta en el sistema
    expect(sistema.numeroUsuarios()).toEqual(1);
    //eliminamos el usuario
    //comprobamos que el usuario eliminado no está en el sistema
  });
  xit("comprobar usuario activo", function(){
    //comprobar que no hay usuarios
    expect(sistema.numeroUsuarios()).toEqual(0);
    //agregamos un usuario
    sistema.agregarUsuario("Pepe");
    //comprobamos que el usuario creado esta en el sistema
    expect(sistema.numeroUsuarios()).toEqual(1);
    //comprobar un usuario que no existe
  });
  xit("comprobar el método número de usuarios", function(){
    //calcular las claves del array asociativo Object.keys(sistema.usuarios)
    //comprobamos que el valor por numeroUsuarios() es igual anterior
    
  });

});
