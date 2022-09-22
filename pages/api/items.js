// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ALDJAK23423JKSLAJAF23423J23SAD3',
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch('http://developers.gictsystems.com/api/dummy/items/', options)
  
  res.status(200).json(await response.json())
}
