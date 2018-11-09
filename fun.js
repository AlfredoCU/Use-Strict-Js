// Código en modo no estricto.
name = "Alfredo"; // Variable no declarada, pero sin modo estricto ejecución exitosa.
fun();

function fun() {
    // Código en modo estricto.
    "use strict";
    // lastName = "Urbano"; ERROR variable no declarada (definido).
    var lastName = "Urbano"; // Variable declarada ejecución exitosa.
}

// Código en modo no estricto
nickName = "Ferillo";

