// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// API directory sets up routes that are only applied to the server. Useful since code here wont increase client-side JS bundle. 
// Use this dir for API calls / back end

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
