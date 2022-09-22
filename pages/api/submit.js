// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  }

  const response = await fetch('http://developers.gictsystems.com/api/dummy/submit/', options)
  if(!response.ok) {
    res.status(400).json(await response.json())
    return
  }
  
  res.status(200).json(await response.json())
}
