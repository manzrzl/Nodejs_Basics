const express = require('express');
const app = express();
const fs=require("fs");



app.get('/', (request, response) => {
	fs.readFile('./home.html', 'utf8', (err, html) => { 
		
		if (err) {
			response.status(500).send('sorry,out of order')
		}
		
		response.send(html);
	
	})
	
});

app.listen(process.env.PORT || 3000, () => console.log(`App avilable on http://localhost:3000`))

