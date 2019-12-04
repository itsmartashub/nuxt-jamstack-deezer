const request = require("request") // mozemo koristiti i axios

const headers = {
	"Access-Control-Allow-Origin": "*"
} //! Access-Control-Allow-Origin ovo znaci koji clients mogu da traze request data, i stavili smo '*' sto znaci svi

exports.handler = (event, context, callback) => {
	const id = event.queryStringParameters['id'] //! ovaj id sto koristimo dole u TRACKS_URL dobijamo iz samog requesta jer cemo ga mi staviti tu, tj dacemo ga u URL
	const TRACKS_URL = `https://api.deezer.com/user/${id}/tracks` //! url kojim dohvatamo favs odredjenog korisnika

	request.get(TRACKS_URL, (error, response, body) => {
		if (error) {
			return callback(null, {
				statusCode: 500,
				body: "Error at server",
				headers
			})
		}

		callback(null, {
			statusCode: 200,
			body,
			headers
		})

	})

}