alert('Vamos a determinar el mayor de 3 numeros')
let n1;
let n2;
let n3;
n1=new Number(prompt('Ingrese en valor n1:',''));
n2=new Number(prompt('Ingrese en valor n2:',''));
n3=new Number(prompt('Ingrese en valor n3:',''));
if ((n1>=n2) && (n1>=n3)) {
    alert(`El numero mayor es: ${n1}`); 
    if (n2>=n3) {
        alert(`El numero medio es: ${n2} \n
        El numero menor es: ${n3}`);
    }else{
        alert(`El numero medio es: ${n3} \n
        El numero menor es: ${n2}`);
    }
}else{
    if (n2>=n3) {
        alert(`El numero mayor es: ${n2}`); 
        if (n1>=n3) {
        alert(`El numero medio es: ${n1} \n
        El numero menor es: ${n2}`);
        }else{
        alert(`El numero medio es: ${n3} \n
        El numero menor es: ${n1}`);
        }                
    }else{
        alert(`El numero mayor es: ${n3}`); 
    if (n2>=n1) {
        alert(`El numero medio es: ${n2} \n
        El numero menor es: ${n1}`);
    }else{
        alert(`El numero medio es: ${n1} \n
        El numero menor es: ${n2}`);
    }
    }
}