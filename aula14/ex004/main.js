function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       res.innerHTML = 'Impossivel de contar!'
    }else{
      
        let i = Number(ini.value)     //permirir que i receba um numero qulquer sendo o numero digitado no ini.value
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = `Contando: `
        if(p <=0 ){
        window.alert('passo invalido')
        }
        //contagem crescente
        if(i<f){  // se i maior que f
            for(let c = i; c<=f; c += p)  //para permitir que c = i; c<=i;c += p 
            res.innerHTML += `${c}`
            //contagem decrescente
        }else{
            for(let c = i;c >= f; c -= p){
                res.innerHTML += `${c}`
            }
        }
    }
}