const Url = "https://jsonplaceholder.typicode.com/users";
async function getapi(url) {
  const response = await fetch(Url);

  var data = await response.json();
  console.log(data);
  show(data);
}

function show(data) {
  let tab = `<tr>
		<th class="text-center">Id</th>
		<th class="text-center">Name</th>
		<th class="text-center">Email</th>
		</tr>`;



  for (let r of data) {
    tab += `<tr>
	
  <td>${r.id}</td>
	<td>${r.name}</td>
	<td>${r.email}</td>
		
</tr>`;
  }

  document.getElementById("employees").innerHTML = tab;
}

getapi(Url);