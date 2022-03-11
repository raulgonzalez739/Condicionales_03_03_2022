alert('Vamos a determinar si el estudiante pasa con 3 notas')
let n1;
let n2;
let n3;
n1=new Number(prompt('Ingrese el valor de la nota n1:',''));
n2=new Number(prompt('Ingrese el valor de la nota n2:',''));
n3=new Number(prompt('Ingrese el valor de la nota n3:',''));
prom=(n1+n2+n3)/3;

if (prom>=7) {
    alert(`El estudiente es promocionado \n
    su nota es: ${prom}`);    
}else{
    if (prom>=4) {
        alert(`El estudiante es regular \n
        su nota es: ${prom}`);
    }else{
        alert(`El estudiante es reprobado \n
        su nota es: ${prom}`);
    }
}