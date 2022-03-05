let enciende;
enciende = prompt('El bombillo enciende?? (Si/No):', '');
if(enciende == 'Si'){alert('Felcidades, su bombillo está ok')
                   enciende = 'Si';}
else { alert('Revise la conexión')
        let conectado;
        conectado = prompt('El bombillo está conectado?? (Si/No):', '');
       if (conectado== 'Si'){alert('Revisar si el Bombillo está quemado');
                            quemado=prompt('El bombillo está quemado?? (Si/No):', '');
                            if (quemado=='No') {alert('Llevelo a servicio técnico');}
                                else {alert('Cambiar el bombilo');}
                                enciende = prompt('El bombillo enciende?? (Si/No):', '');
}
       }