let compliments = [
	"Gee, you're a smart cookie!", 
	"Cool shirt!", 
	"Your Javascript skills are stellar."
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

module.exports = {

    getCompliment: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    }

}