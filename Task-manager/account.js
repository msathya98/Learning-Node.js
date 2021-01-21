const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
	to: 'sathyaachar062@gmail.com',
	from: 'sathyaachar062@gmail.com',
	subject: 'this is my first creation!',
	text: 'I hope this one actuallly get to you.'
}).then(() => {
	console.log("msg sent")
}).catch((error) => {
	console.log(error.response.body)
})
