// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }


// // the following API route pages/api/user.js handles a json response:
// export default (req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify({ name: 'John Doe' }))
// }

// // To handle different HTTP methods in an API route, you can use req.method in your request handler, like so:

// export default (req, res) => {
//   if (req.method === 'POST') {
//     // Process a POST request
//   } else {
//     // Handle any other HTTP method
//   }
// }







// import Cors from 'cors'

// // Initializing the cors middleware
// const cors = Cors({
//   methods: ['GET', 'HEAD'],
// })

// // Helper method to wait for a middleware to execute before continuing
// // And to throw an error when an error happens in a middleware
// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }

//       return resolve(result)
//     })
//   })
// }

// async function handler(req, res) {
//   // Run the middleware
//   await runMiddleware(req, res, cors)

//   // Rest of the API logic
//   res.json({ message: 'Hello Everyone!' })
// }

// export default handler