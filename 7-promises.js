const doworkPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		//resolve([1,1,1])
		reject("things went wrong")
	}, 2000)
})

doworkPromise.then((result) => {
	console.log("sucesss", result)
}).catch((error) => {
	console.log("error", error)
})
