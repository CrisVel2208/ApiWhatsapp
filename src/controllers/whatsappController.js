
const verifyToken = (req, res) => {

    try { 
        var accessToken = "CIVM123456";
        var token = req.query["hub.verify_token"];
        var challenge = req.body["hub.challenge"];


        if (challenge != null && token != null && token == accessToken) {
            res.send(challenge);
        } else {
            res.status(400).send();
        }

    } catch (error) {
        res.status(400).send();
    }
}

const recivedMessages = (req, res) => {
    res.send("Hola desde verifyToken");
}

module.exports = {
    verifyToken,
    recivedMessages
}