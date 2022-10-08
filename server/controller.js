let compliments = [
	{id: 1, text: "Gee, you're a smart cookie!"}, 
	{id: 2, text: "Cool shirt!"}, 
	{id: 3, text: "Your Javascript skills are stellar."}
];
let fortunes = [
	"A faithful friend is a strong defense.", 
	"A good friendship is often more important than a passionate romance.", 
	"First think of what you want to do; then do what you have to do.", 
	"A feather in the hand is better than a bird in the air.", 
	"Happiness will bring you good luck.", 
	"Listen to everyone. Ideas come from everywhere.", 
	"Good to begin well, better to end well."
];
let nextId = 4;

module.exports = {

    getCompliment: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex].text;
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

	postCompliment: (req, res) => {
		const {compliment} = req.body;
		compliments.push({
			id: nextId++,
			text: compliment
		});

		res.status(200).send(compliments[compliments.length - 1]);
	},

	updateCompliment: (req, res) => {
		const {id} = req.params;
		const {compliment} = req.body;
		
		const compToUpdate = compliments.find((comp) => comp.id === +id);
		compToUpdate.text = compliment;

		res.status(200).send(compToUpdate);
	},

	deleteCompliment: (req, res) => {
		const {id} = req.params;
		
		const updateIndex = compliments.findIndex((comp) => comp.id === +id);

		compliments.splice(updateIndex, 1);

		res.status(200).send('deleted');
	},

	getComplimentList: (req, res) => {
		res.status(200).send(compliments);
	}

}