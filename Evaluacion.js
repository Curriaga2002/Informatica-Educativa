var correctas=0;
var incorrectas=0;
var sinResp=[];
var evalua={
    "preg":"¿Ques es las Informática?",
    "opc1":"Es una Ciencia",
    "opc2":"Ciencia que estudia la Computación",
    "opc3":"Es el procesamiento electrónico de datos",
    "opc4":"Ciencia que estudia los Sistemas de información Inteligentes",
    "respCorrecta":"opc4",
    "respEst":null,
}
var  myArrayPreg=[
    {
        "preg":"1. ¿En qué lugar se ejecuta generalmente el código JavaScript?",
        "opc1":" A. Cliente (en el propio navegador de internet). ",
        "opc2":"B.	Servidor.",
        "opc3":"C.	En la casa.",
        "opc4":"D.	En el solucionador de problemas.",
        "respCorrecta":"opc1",
        "respEst":null,
    },
    {
        "preg":"2.	¿Cuáles de estas son marcas para la inserción del código JavaScript en las páginas HTML?",
        "opc1":"A.	< JavaScript _Code > y < /javascript_code >",
        "opc2":"B.	< script > y < /script >",
        "opc3":"C.	<? script > < script? >",
        "opc4":"D.	<? Script ¿> < script? ¿ >",
        "respCorrecta":"opc2",
        "respEst":null, 
    },
    {
        "preg":"3.	La llamada al código JavaScript debe colocarse en:",
        "opc1":"A.	La sección Body de la página",
        "opc2":"B.	Antes de la etiqueta HTML",
        "opc3":"C.	Puede colocarse en la sección Head o en Body",
        "opc4":"D.	La selección Head de la pagina",
        "respCorrecta":"opc3",
        "respEst":null, 
    },
    {
        "preg":"4.	En JavaScript, para darle el nombre a una variable, objeto o función, debemos tener en cuenta que:",
        "opc1":"A.	No se pueden usar mayúsculas",
        "opc2":"B.	JavaScript no distingue entre mayúsculas y minúsculas",
        "opc3":"C.	JavaScript diferencia entre mayúsculas y minúsculas",
        "respCorrecta":"opc3",
        "respEst":null, 
    },
    {
        "preg":"5.	¿Cuál es la instrucción usada para devolver un valor en una función de JavaScript?",
        "opc1":"A.	Send",
        "opc2":"B.	Return",
        "opc3":"C.	Value",
        "respCorrecta":"opc2",
        "respEst":null, 
    },
    {
        "preg":"6.	Para terminar las instrucciones en JavaScript se utiliza:",
        "opc1":"A.	Un punto y coma",
        "opc2":"B.	Un punto y coma o un salto de línea",
        "opc3":"C.	La sentencia End.",
        "respCorrecta":"opc2",
        "respEst":null, 
    },
    {
        "preg":"7.	¿Cuál de estas instrucciones está correctamente escrita en JavaScript?",
        "opc1":"A.	if (a==0) alert (a);",
        "opc2":"B.	if (a=0) print a;",
        "opc3":"C.	if (a==0) {print [a]}",
        "respCorrecta":"opc1",
        "respEst":null, 
    },
    {
        "preg":"8.	Para concatenar cadenas de caracteres en JavaScript se usa el carácter:",
        "opc1":"A.	& (ampersand)",
        "opc2":"B.	+ (más)",
        "opc3":"C.	. (punto)",
        "respCorrecta":"opc2",
        "respEst":null, 
    },
    {
        "preg":"9.	¿Es posible hacer que se ejecute un formulario por JavaScript?",
        "opc1":"A.	No, esa función sólo puede realizarse mediante código PHP, y se ha de realizar por tanto en el servidor.",
        "opc2":"B.	Sí, de hecho, los formularios se crean con código JavaScript, por lo que es el propio JavaScript el que los ejecuta.",
        "opc3":"C.	Sí, por ejemplo, basta con pasarle a una función JavaScript el identificador del formulario, y aplicarle el comando “submit” para ejecutar ese formulario.",
        "respCorrecta":"opc3",
        "respEst":null, 
    },
    {
        "preg":"10.	¿Todo el código JavaScript debe estar por fuerza dentro del archivo? HTML de la página web?",
        "opc1":"A.	Sí, porque si no, no se podría ejecutar en el navegador",
        "opc2":"B.	No, es posible incluir código JavaScript en ficheros de extensión .js y hacer un “include” en la sección HEAD de la página HTML",
        "opc3":"C.	Sí, por ejemplo, basta con pasarle a una función JavaScript el identificador del formulario, y aplicarle el comando “submit” para ejecutar ese formulario.",
        "respCorrecta":"opc2",
        "respEst":null, 
    },

];
visualizarPreguntas();

function visualizarPreguntas(){
    let resultado;
    for(i in myArrayPreg){
        resultado =JSON.parse(JSON.stringify( myArrayPreg[i]));
        myArrayPreg[i]=resultado;
    }
   
    var txt_respuestas="";
            for(i in myArrayPreg ){
                txt_respuestas +=myArrayPreg[i].preg +'<br>';
                for(j in myArrayPreg[i] ){
                    if(myArrayPreg[i][j]!=myArrayPreg[i].preg && myArrayPreg[i][j]!=myArrayPreg[i].respCorrecta &&  myArrayPreg[i][j]!=myArrayPreg[i].respEst){
                        txt_respuestas += '<input type="radio" name="p'+i+'"  value="'+j+'" onclick ="guardaResp(value,name)"><label>'+myArrayPreg[i][j]+'</label><br>';
                    }
                }
                txt_respuestas +='<br>'
            }
            document.getElementById("respuestas").innerHTML = txt_respuestas;
            console.log(myArrayPreg);
}

function guardaResp(resp,pos){
    pos = pos.slice(1); // se elimina el pprimer caracter del sting almacenado en pos osea la letra p    pos=parseInt(pos);
    if(myArrayPreg[pos].respEst !=null){
        if(myArrayPreg[pos].respEst== myArrayPreg[pos].respCorrecta){
            correctas--;
        }
        else{
            incorrectas--;
        }
    }
    myArrayPreg[pos].respEst=resp;
    let resultado =JSON.parse(JSON.stringify( myArrayPreg[pos]));
    myArrayPreg[pos]=resultado;

    if(myArrayPreg[pos].respCorrecta==resp){
        correctas++;
    }
    else{
        incorrectas++;
    }
   
}
function verRes(){
    if(respodioTodas()){ // se pregunta si respondioTodas() es verdadero
        document.getElementById('res').innerHTML='<h3></h3>'+'Correctas: '+correctas+'  '+'Incorrectas: '+incorrectas+'</h3>';
    }
    else{
        alert('Debe Dar Respueta a la Pregunta: '+sinResp);
        sinResp=[];
    }
   
}

function respodioTodas(){
    for(i in myArrayPreg){
        if(myArrayPreg[i].respEst==null){
            sinResp.push(i);
        }
    }
    if(sinResp.length==0){
        return true;
    }
    else{
        return false;
    }
       
}








