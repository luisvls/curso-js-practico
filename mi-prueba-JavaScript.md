# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. Puedes hacer trampa y saltar a la siguiente clase, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

Instrucciones para tomar esta prueba
--
- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. [Vuelve al Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que el éxito no se mide por cuánto tiempo te toma aprender, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!


Variables y operaciones
--
1. ### Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?
  - Una variable es un espacio en memoria, nos sirve para declarar un valor y después utilizarlo para ciertas operaciones.
- ¿Cuál es la diferencia entre declarar e inicializar una variable?
  - Declarar una variable:
  
    Al declarar una variable solo estamos declarando su nombre, por ejemplo:
    
    ```javascript
    var nombre;
    ```

    JavaScript lo interpreta como variable, pero le da un valor de _`undefined`_, ya que no asignamos ningún valor.

  -	Inicializar una variable:
    
    Al inicializar una variable, estamos asignando un valor a dicha variable, por ejemplo:
    
    ```javascript
    nombre = "Luis"
    ```
     
- ¿Cuál es la diferencia entre sumar números y concatenar strings?
  - Sumar números y concatenar strings son operaciones diferentes en programación, y su diferencia radica en el tipo de datos involucrados y cómo se manejan en cada caso:

    - **Sumar números en JavaScript**:
    
        En JavaScript, la suma se realiza de manera similar a otros lenguajes de programación. Puedes sumar números directamente usando el operador **`+`** .

        _Ejemplo en JavaScript_:

        ```javascript
        let resultado = 2 + 3; // resultado tendrá el valor 5
        ```
    - **Concatenar strings en JavaScript**:

        La concatenación de strings en JavaScript implica combinar cadenas de texto usando el operador **`+`** .

        _Ejemplo en JavaScript_:
        ```javascript
        let cadena = "Hola" + " mundo"; // cadena (string) tendrá el valor "Hola mundo"
        ```

        Es importante tener en cuenta que JavaScript es un lenguaje de programación con tipado dinámico, lo que significa que las operaciones pueden variar según los tipos de datos involucrados. Por ejemplo, puedes concatenar un número y una cadena, y JavaScript automáticamente convertirá el número en cadena antes de la concatenación:

        ```javascript
        let numero = 42;
        let cadena = "El número es: " + numero; // cadena tendrá el valor "El número es: 42"
        ```
        En resumen, la diferencia entre sumar números y concatenar strings en JavaScript es similar a la explicación anterior. 
        
        >- [x] En la suma, operas valores numéricos para obtener un resultado numérico, mientras que en la concatenación de strings, combinas cadenas de texto para formar una cadena más larga.
    ---

- ¿Cuál operador me permite sumar o concatenar?
  - El operador **`+`** nos permite sumar, como así tambíen concatenar. 

2. ### Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

   - Nombre ---> _*`String`*_
   - Apellido ---> _*`String`*_
   - Nombre de usuario en Platzi ---> _*`String`*_
   - Edad ---> _*`Number`*_
   - Correo electrónico ---> _*`String`*_
   - Mayor de edad ---> _*`Boolean`*_
   - Dinero ahorrado ---> _*`Number`*_
   - Deudas ---> _*`Number`*_

3. ### Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

    #### 👨‍💻 _Pasamos todo a código_:

   ```javascript
    var nombre = 'Luis Alfredo';
    var apellido = 'Suarez';
    var usuario = 'https://platzi.com/p/luisvls88/';
    var edad = 35;
    var email = 'platzistudent@gmail.com';
    var adulto = true;
    var ahorro = 60000;
    var deudas = 50000;
   ```
4. ### Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
    ```javascript
    console.log(`Mi nombre completo es ${nombre} ${apellido}`);
    ```
- Dinero real (dinero ahorrado menos deudas)
    ```javascript
    var dineroReal = ahorro - deudas
    console.log(dineroReal)
    ```

Funciones
--
1. ### Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
  - Una función es un _bloque de código_ que realiza alguna operación. Una función puede definir opcionalmente **parámetros** de entrada que permiten a los llamadores pasar **argumentos** a la función. 

    > Una función también puede _*devolver*_ un valor como salida.

- ¿Cuándo me sirve usar una función en mi código?
  - Las funciones son un elemento muy utilizado en la programación. *Empaquetan* y “`aíslan`” del resto del programa una parte de código que realiza alguna tarea específica.
  
    Son, por tanto, un **conjunto de instrucciones** que ejecutan una tarea determinada y que hemos encapsulado en un formato estándar para que nos sea muy sencillo de manipular y reutilizar.
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
  - Los **parámetros** son los `nombres` que aparecen en la definición de una función. Por su parte, los **argumentos** son los `valores` que le pasamos (y que, por tanto, recibe) una función.

2. ### Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

    ```javascript
    const name = "Luis Alfredo";
    const lastname = "Suarez";
    const completeName = name + lastname;
    const nickname = "luisvls";

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

    ```
    ---
    - [x] Muy bien, pasemos esto a código. 👨‍💻

    ```javascript
    function generarSaludo(nombre, apellido, usuario) {
        const nombreCompleto = nombre + " " + apellido;
        return "Mi nombre es " + nombreCompleto + ", pero prefiero que me digas " + usuario + ".";
    }

    const nombre = "Luis Alfredo";
    const apellido = "Suarez";
    const usuario = "luisvls";

    const saludo = generarSaludo(nombre, apellido, usuario);
    console.log(saludo);
    ```
    En esta versión de la función `generarSaludo`, los *parámetros* **nombre**, **apellido** y **usuario** se utilizan para construir el mensaje de *saludo*. 

    Luego, se llama a la función con los valores correspondientes para esos parámetros y se almacena el resultado en la variable `saludo`, que finalmente se imprime en la consola.

Condicionales
--
1. ### Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
  - Las condicionales en programas son grupos de sentencias o sentencias individuales que te permiten condicionar la decisión entre la elección de una opción y otra.

    Un ejemplo de una condición en un lenguaje natural puede ser: si utilizas Python, puedes (o no) utilizar JavaScript.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
  - JavaScript ofrece un total de cuatro instrucciones para procesar código de acuerdo con condiciones determinadas por el programador: `if`, `switch`, `for` y `while`.
- ¿Puedo combinar funciones y condicionales?
  - Sí podemos combinar funciones y condicionales. 

    Para combinar condiciones y crear condiciones complejas podemos emplear los siguientes operadores lógicos: `!` (negación), `&&` (y) y `||` (o).

2. ### Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```javascript
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```
#### Aquí tienes el equivalente del código utilizando estructuras `if`, `else if` y `else` en JavaScript:

```javascript
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("Tipo de suscripción desconocido");
}
```

Este código utiliza una serie de condiciones `if`, `else if` y un `else` para replicar el comportamiento del switch original. Cada bloque `if` verifica si `tipoDeSuscripcion` coincide con un valor específico y, en caso afirmativo, muestra el mensaje correspondiente. Si ninguno de los casos coincide, el último bloque `else` maneja el caso de un tipo de suscripción desconocido.

3. ### Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

>💡 Bonus: si ya eres un expert@ en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional.

  #### Aquí tienes la replicación del comportamiento utilizando únicamente la estructura `if`:

```javascript
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

💡 **Bonus - Replicar con Arrays y Objetos y un solo condicional**:

Puedes replicar este comportamiento utilizando un objeto que contenga los mensajes correspondientes a cada tipo de suscripción. Aquí tienes cómo hacerlo:

```javascript
const tipoDeSuscripcion = "Basic";

const mensajes = {
    "Free": "Solo puedes tomar los cursos gratis",
    "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
    "ExpertPlus": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

if (mensajes[tipoDeSuscripcion]) {
    console.log(mensajes[tipoDeSuscripcion]);
} else {
    console.log("Tipo de suscripción desconocido");
}
```

En este ejemplo, el objeto `mensajes` contiene las respuestas correspondientes a cada tipo de suscripción. 

Luego, el condicional verifica si el tipo de suscripción existe en el objeto y muestra el mensaje apropiado. Si el tipo de suscripción no se encuentra en el objeto, se muestra el mensaje *"Tipo de suscripción desconocido"*.

Ciclos
--
1. ### Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
  - Un ciclo es una estructura que permite ejecutar un bloque de código repetidamente hasta que se cumpla una condición específica.
- ¿Qué tipos de ciclos existen en JavaScript?
  - Hay dos tipos principales de ciclos: 
    -  **Ciclo For**: 
    
        Se utiliza cuando se conoce la cantidad exacta de iteraciones. Se define una variable de control que cambia en cada repetición y se establece una condición para finalizar el ciclo.

        ```javascript
        for (let i = 0; i < 5; i++) {
                console.log("Iteración:", i);
        };
        ```
    - **Ciclo While**: 

        Se repite el bloque de código mientras una condición sea verdadera. No es necesario conocer la cantidad de repeticiones de antemano.

        ```javascript
        let contador = 0;
        while (contador < 5) {
            console.log("Iteración:", contador);
            contador++;
        }
        ```

- ¿Qué es un ciclo infinito y por qué es un problema?
  -  Un ciclo infinito (♾) es un tipo de bucle en programación que se ejecuta continuamente sin llegar a una condición de finalización. 
  En otras palabras, el bloque de código dentro del ciclo se repite una y otra vez sin detenerse.

  - Esto puede ser un *problema grave* en la programación, ya que puede llevar a un consumo excesivo de recursos del sistema y hacer que el programa se quede atascado sin producir ningún resultado útil.
- ¿Puedo mezclar ciclos y condicionales?
  - Sí, definitivamente puedes mezclar ciclos y condicionales en la programación. De hecho, la combinación de ciclos (bucles) y estructuras condicionales (como declaraciones ``if``) es una práctica común y poderosa para crear programas más flexibles y capaces de manejar diferentes situaciones

2. ### Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```javascript
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
Aquí tienes los bucles `for` replicados utilizando bucles `while`:

- Primer ciclo `for` replicado con `while`:
```javascript
let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}
```

- Segundo ciclo `for` replicado con `while`:
```javascript
let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
```

En ambos casos, hemos utilizado bucles `while` para replicar el comportamiento de los ciclos `for`. 

La variable `i` se incrementa en el primer caso y se decrementa en el segundo caso dentro del bucle `while`, al igual que lo haría en el ciclo `for`.

3. ### Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

>💡 Pista: puedes usar la función prompt de JavaScript.
---
Aquí tienes un ejemplo de código en JavaScript:

```javascript
while (true) {
    const respuesta = prompt("¿Cuánto es 2 + 2?");
    
    if (respuesta === "4") {
        alert("¡Felicitaciones, respuesta correcta!");
        break; // Salir del bucle si la respuesta es correcta
    } else {
        alert("Respuesta incorrecta. ¡Inténtalo de nuevo!");
    }
}
```

Este código utiliza un bucle `while` que se ejecutará indefinidamente hasta que el usuario responda correctamente.

Se utiliza la función `prompt` para solicitar la respuesta del usuario. Si la respuesta es "4", se muestra un mensaje de felicitaciones y se usa `break` para salir del bucle.

Si la respuesta es incorrecta, se muestra un mensaje de error y el bucle continúa pidiendo una respuesta nuevamente.

Listas
--
1. ### Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
  - **Array**: Un array es una estructura de datos en la que puedes almacenar varios elementos en una única variable. Los elementos están indexados por números enteros, lo que permite acceder a ellos de manera ordenada.
- ¿Qué es un objeto?
  - **Objeto**: Un objeto es una estructura de datos que almacena pares clave-valor, donde cada clave es única y se utiliza para acceder a su respectivo valor. Los objetos permiten organizar y almacenar información de manera más estructurada.
- ¿Cuándo es mejor usar objetos o arrays?
  - **Uso de Objetos o Arrays**: Se utilizan arrays cuando se necesita una colección de elementos del mismo tipo y se accede a ellos principalmente por índice. Los objetos son ideales cuando se requiere asociar valores a claves descriptivas y se accede a los datos por esas claves.
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
  - **Mezcla de Arrays y Objetos**: Sí, puedes mezclar arrays con objetos. Por ejemplo, puedes tener un array que contenga objetos como elementos. También puedes tener propiedades de objeto que contengan arrays. Esto puede ser útil para modelar estructuras de datos más complejas y jerárquicas.

2. ### Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

Aquí tienes un ejemplo de una función en JavaScript que recibe cualquier array como parámetro e imprime su primer elemento:

```javascript
function imprimirPrimerElemento(miArray) {
    if (miArray.length > 0) {
        const primerElemento = miArray[0];
        console.log("El primer elemento es:", primerElemento);
    } else {
        console.log("El array está vacío.");
    }
}

// Ejemplos de uso
const array1 = [10, 20, 30, 40, 50];
const array2 = ["Manzana", "Banana", "Cereza"];
const array3 = [];

imprimirPrimerElemento(array1);
imprimirPrimerElemento(array2);
imprimirPrimerElemento(array3);
```

Esta función `imprimirPrimerElemento` toma un array como parámetro, verifica si tiene elementos usando `miArray.length > 0` y, si es cierto, imprime el primer elemento con `miArray[0]`. 

Si el array está vacío, muestra un mensaje correspondiente.

3. ### Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

Aquí tienes una función en JavaScript que recibe un array como parámetro y luego imprime todos sus elementos uno por uno:

```javascript
function imprimirElementos(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// Ejemplo de uso:
const miArray = [1, 2, 3, 4, 5];
imprimirElementos(miArray);
```

Esta función recorre cada elemento del array y lo imprime uno por uno en la consola. Puedes probarla con diferentes arrays pasándolos como argumento a la función `imprimirElementos`.

4. ### Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

Aquí tienes una función en JavaScript que recibe un objeto como parámetro y luego imprime todos sus elementos uno por uno de una manera simple:

```javascript
function imprimirElementosDeObjeto(objeto) {
    for (let clave in objeto) {
        console.log(clave + ": " + objeto[clave]);
    }
}

// Ejemplo de uso:
const miObjeto = {
    nombre: "Luis",
    edad: 35,
    ciudad: "Buenos Aires"
};

imprimirElementosDeObjeto(miObjeto);
```

Esta función utiliza un bucle `for...in` para recorrer las claves (propiedades) del objeto y luego imprime cada clave junto con su valor en la consola. Puedes probarlo con diferentes objetos pasándolos como argumento a la función `imprimirElementosDeObjeto`.

¿Cómo te fue? 🏆
--
**¡Me fue bastante bien!** 

He creado este "comentario", es casí un tutorial, en base a lo que fuimos aprendiendo en cursos anteriores y demás artículos que han proporcionado los estudiantes mismos.

Quiero aclarar que para explicar de forma más detallada algunas funciones y demás cosas, he utilizado diversas fuentes, además de pasar todo por un corrector ortográfico.


> 👀 *Aun así, soy un ser humano y puede haber algo mal, ¡coméntenlo por favor!*

Aunque voy agarrando el gusto a esto de programar y le meto muchas ganas al estudio. No puedo atribuirme todo el código que les comparto, algo así como 65/35 de todo lo que ven lo pase a código yo mismo. Para esta altura del curso, me siento conforme con lo aprendido.

La otra parte de la información y redacción es de `blogs`, `San Google`, `foros nerds`, `IA`, etc.

Si bien llegué a los mismos resultados en todas las preguntas del test, algunas funciones que he utilizado daban un par de vueltas por encima de lo necesario.

Me resultaba algo incomodo pasarles algo así, por ende, me tomé el trabajo de realizar este mini tutorial con código más simplificado y eficiente.

Si te ha gustado este trabajo, dale un like en Platzi y al repo. Así puede ser de utilidad para otros.

---
Ahora bien, sigamos aprendiendo. Animos, hay que esforzarse para llegar lejos. 💪