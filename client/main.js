const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const complimentOut = document.getElementById("complimentOutput");
const fortuneOut = document.getElementById("fortuneOutput");
const complimentIn = document.getElementById("complimentInput");
const complimentSmt = document.getElementById("complimentSubmit");
const complimentContainer = document.getElementById("complimentList");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            complimentOut.innerText = data;
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            fortuneOut.innerText = data;
    });
};

const addCompliment = (e) => {
    e.preventDefault();
    const body = {compliment: complimentIn.value};
	complimentIn.value = '';
    axios.post("http://localhost:4000/api/compliment/", body)
		.then((res) => {
			getComplimentList();
		})
		.catch((res) => {
			alert('Something went wrong.');
	});
}

const updateCompliment = (e) => {
    e.preventDefault();
    const id = e.target.parentElement.id;
    const body = {
		compliment: prompt('What would you like the new message to be?')
	};
    
	axios.put(`http://localhost:4000/api/compliment/${id}`, body)
		.then((res) => {
			getComplimentList();
		})
		.catch((res) => {
			console.log(res)
			alert('Something went wrong.');
	});
}

const deleteCompliment = (e) => {
    e.preventDefault();
    const id = e.target.parentElement.id;

    axios.delete(`http://localhost:4000/api/compliment/${id}`)
		.then((res) => {
			getComplimentList();
		})
		.catch((res) => {
			alert('Something went wrong.');
	});
}

const createCompliment = (comp) => {
	let card = document.createElement('div');
	const text = document.createElement('p');
	const edt = document.createElement('button');
	const del = document.createElement('button');
	card.id = comp.id

	text.innerText = comp.text;
	edt.innerText = 'edit';
	del.innerText = 'delete';
	edt.addEventListener('click', updateCompliment);
	del.addEventListener('click', deleteCompliment);

	card.appendChild(text);
	card.appendChild(edt);
	card.appendChild(del);

	return card;
}

const getComplimentList = () => {
    axios.get("http://localhost:4000/api/complimentList/")
        .then(res => {
            const compList = res.data;
			complimentContainer.innerHTML = ``;
			compList.forEach((element) => {
				complimentContainer.appendChild(createCompliment(element));
			});
    });
}

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
complimentSmt.addEventListener('click', addCompliment);

getComplimentList();