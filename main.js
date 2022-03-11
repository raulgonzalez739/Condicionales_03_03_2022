let enciende, conectado;

// if (enciende == 'Si') {
//     alert('Felcidades, su bombillo está ok');
// }
// else {
enciende = prompt('El bombillo enciende?? (Si/No):', '');
while (enciende=='No') {
    alert('Comprobar conexión')
    conectado = prompt('Esta conectado?? (Si/No):','');
    if (conectado=='No') {
        enciende = prompt('El bombillo enciende?? (Si/No):', '');            
    }
    else{
        alert('Comprobar Bombillo');
        quemado= prompt('Esta quemado?? (Si/No):','');
        if(quemado == "No"){
            alert('LLevar a servicio');
            enciende = '.';
        }else{
            alert('Cambiar Bombillo');
            enciende = prompt('El bombillo enciende?? (Si/No):', '');
        } 
    }
}
if(enciende != "."){
    alert('Felcidades, su bombillo está ok');
}

    // do {
    //     alert('Comprobar conexión');
    //     conectado = prompt('Esta conectado?? (Si/No):','');
    //     if (conectado == 'Si') {
    //         alert('Comprobar Bombillo');
    //         quemado = prompt('El bombillo está quemado??:','');
    //     }
    //     else{
    //         alert('Conectar');
            
    //         do {
    //             enciende = prompt('El bombillo enciende?? (Si/No):', '');
    //         } while (conectado=='No');
            
    //     }
    // } while (enciende=='No');
// }