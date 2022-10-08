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
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const addCompliment = (e) => {
    e.preventDefault();
    //axios post complimentIn.innerText
}

const updateCompliment = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const newMessage = prompt('What would you like the new message to be?')
    //axios put update message of 
}

const deleteCompliment = (e) => {
    e.preventDefault();
    const id = e.target.id;
    //axios delete id
}

const getComplimentList = () => {
    //axios get compliments()
}

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
complimentSmt.addEventListener('click', addCompliment);