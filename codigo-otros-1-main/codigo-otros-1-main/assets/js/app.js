const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nombre= document.querySelector('name'); //el nombre de las constantes no deberia empezar con caracteres especiales y deberia hacer referencia clara a lo que se refiere.
const blog = document.querySelector('#blog');
const direccion = document.querySelector('.location');

async function displayUser(username) {
  nombre.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  nombre.textContent = '${data.name}';
  blog.textContent = '${data.blog}';
  direccion.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
