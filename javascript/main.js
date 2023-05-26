async function buscaEndereco(cep){
    const mensagemErro = document.querySelector('.erro')
    try{
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let consultaCEPConvertida = await consultaCEP.json()

    if(consultaCEPConvertida.erro){
        throw Error('CEP não existe!')
    }

    const logradouro = document.getElementById('endereco')

    const bairro = document.getElementById('bairro')
    
    const cidade = document.getElementById('cidade')
    
    const estado = document.getElementById('estado')

    logradouro.value = consultaCEPConvertida.logradouro
    bairro.value = consultaCEPConvertida.bairro
    cidade.value = consultaCEPConvertida.localidade
    estado.value = consultaCEPConvertida.uf

    return consultaCEPConvertida
    } 
    catch(erro){
        console.log(erro)
        mensagemErro.innerHTML = `<p style="color:red">CEP Invalido, Tente Novamente</p>`
    }
}

const campoCep = document.getElementById('cep')

campoCep.addEventListener('focusout', () => {
    buscaEndereco(campoCep.value)
})


