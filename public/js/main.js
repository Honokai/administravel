function criarPost() {
const form = new XMLHttpRequest()

const url = 'api/criarpost'

form.open("GET", url)
form.send()

form.onreadystatechange=(e)=>{
    console.log(form.responseText)
    const elemento = document.getElementById('espaco-lateral')
    elemento.innerHTML = form.responseText
}

}