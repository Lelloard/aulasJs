const axios = require("axios");


const url = "https://api-sigaa.herokuapp.com/api/v1/clients"

function getUser() {
    axios.get(url)
        .then(response => {
            console.log(response)

        })
        .catch(error => console.log(error))

}
getUser()
