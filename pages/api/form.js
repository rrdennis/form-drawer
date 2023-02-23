export default function FormHandler(request, response) {
  const body = request.body;

  console.log('body: ', body);

  if (!body.firstName || !body.lastName || !body.email) {
    return response.status(400).json({ 
      data: 'First name, last name, and/or email not found'
    });
  }

  response.status(200).json({ 
    data: `${body.firstName} ${body.lastName} ${body.email}`
  });
}
