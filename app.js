const express = require('express');
const app = express();
const axios = require('axios')


app.set('view engine', 'ejs');


class DogFacts {
    static fetchData(req, res) {
        //render the app.ejs file on calling the route
        res.render('app');
    }
}

const getData = (_, res) => {
    const factsArr = [];
    axios.get('https://cat-fact.herokuapp.com/facts')
        .then(resp => {
            console.log(resp.data)
            resp.data.map(item => {
                factsArr.push(item.text)
            });
            console.log(factsArr)
            res.send(factsArr);

        })
        .catch(err => console.log(err))

}
module.exports = {
    app,
    getData
}
// DogFacts;





app.get("/", DogFacts.fetchData);
app.post("/get", getData);