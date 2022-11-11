//const api_url = "<heroku_app_url>"
const api_url = "https://thustlers.herokuapp.com/users"

function loadData(records = []) {
	var table_data = "";
	for(let i=0; i<records.length; i++) {
		table_data += `<tr>`;
		table_data += `<td>${records[i].id}</td>`;
		table_data += `<td>${records[i].movie_name}</td>`;
		table_data += `<td>${records[i].quantity}</td>`;
		table_data += `<td>${records[i].date}</td>`;
		table_data += `<td>${records[i].show_time}</td>`;
        table_data += `<td>${records[i].seats}</td>`;
        table_data += `<td>${records[i].amount}</td>`;
		//table_data += `<td>`;
 		//table_data += `<a href="edit.html?id=${records[i]._id}"><button class="btn btn-primary">Edit</button></a>`;
 		//table_data += '&nbsp;&nbsp;';
 		//table_data += `<button class="btn btn-danger" onclick=deleteData('${records[i]._id}')>Delete</button>`;
		//table_data += `</td>`;
		table_data += `</tr>`;
	}
	//console.log(table_data);
	document.getElementById("tbody").innerHTML = table_data;
}

function getData() {
	fetch(api_url)
	.then((response) => response.json())
	.then((data) => { 
		console.table(data); 
		loadData(data);
	});
}


function getDataById(id) {
	fetch(`${api_url}/${id}`)
	.then((response) => response.json())
	.then((data) => { 
	
		console.log(data);
		document.getElementById("id").value = data._id;
		document.getElementById("movie_name").value = data.movie_name;
		document.getElementById("quantity").value = data.quantity;
		document.getElementById("date").value = data.date;
		document.getElementById("show_time").value = data.show_time;
                document.getElementById("seats").value = data.seats;
                document.getElementById("amount").value = data.amount;
        })

	}



function postData() {
	var movie_name = document.getElementById("movie_name").value;
	var quantity = document.getElementById("quantity").value;
	var date = document.getElementById("date").value;
	var show_time = document.getElementById("show_time").value;
        var seats = document.getElementById("seats").value;
        var amount = document.getElementById("amount").value;


	
	data = {movie_name: movie_name, quantity: quantity, date: date, show_time: show_time, seats: seats, amount: amount};
	
	fetch(api_url, {
		method: "POST",
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((response) => response.json())
	.then((data) => { 
		console.log(data); 
		window.location.href = "index.html";
	})
}	


function putData() {
	
	var _id = document.getElementById("id").value;
	var movie_name = document.getElementById("movie_name").value;
	var quantity = document.getElementById("quantity").value;
	var date = document.getElementById("date").value;
	var show_time = document.getElementById("show_time").value;
   	var seats = document.getElementById("seats").value;
   	var amount = document.getElementById("amount").value;

	
	data = {_id: _id, movie_name: movie_name, quantity: quantity, date: date, show_time: show_time, seats: seats, amount: amount};
	
	fetch(api_url, {
		method: "PUT",
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((response) => response.json())
	.then((data) => { 
		console.table(data);
		window.location.href = "index.html";
	})
}


function deleteData(id) {
	user_input = confirm("Are you sure you want to delete this record?");
	if(user_input) {
		fetch(api_url, {
			method: "DELETE",
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({"_id": id})
		})
		.then((response) => response.json())
		.then((data) => { 
			console.log(data); 
			window.location.reload();
		})
	}
}
