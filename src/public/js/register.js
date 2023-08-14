const form = document.getElementById('registerForm');

form.addEventListener('submit',e=>{
    e.preventDefault();
    console.log("enviando")
    const data = new FormData(form);
    const obj = {};
    data.forEach((value,key)=>obj[key]=value);
    fetch('/api/sessions/register',{
        method:'POST',
        body: JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(result=>result.json()).then(json=>{
        /***
         * como la consulta que estas haciendo es por fetch, debes manejar la redireccion en el front
         * ya que la api te estaba devolviendo el html de la pagina de login, pero no la redireccionaba
         */
        console.log(json);
        if(json.status === 'success'){
            window.location.href = '/login';
        }
    });
})