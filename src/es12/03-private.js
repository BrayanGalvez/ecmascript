//private 
// sirve para encapsular las propiedades y metodos de una clase
// para que no puedan ser accedidos desde fuera de la clase
// se usa el # para encapsular
class Message {
    #show(val) {
        console.log(val);
    }
    printMessage(text) {
        this.#show(text);
    }
}
const message = new Message();