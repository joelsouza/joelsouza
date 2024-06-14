import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
  const SF_URL_BASE = "https://test.salesforce.com"
  const SF_USERNAME = "sistema.integracao@elera.io"
  const SF_PASSWORD = "sistemaintegracao123456"
  const SF_CLIENT_ID = "3MVG9Vd.4h6M41ERROiKqZdKgmVX6_jIDZt6J7..RmG.lXdvpXda6agREin1tyvuKCsPn6L7_Vbbm03OQ6l1."
  const SF_CLIENT_SECRET = "8FE722BD8A51FF71353CA9B852976D7514FE3253AA7809C3392623BE90F3498C"
  const SF_SITE_URL = "https://force-force-2758--hml.sandbox.my.salesforce.com"
  const SF_SECURITY_TOKEN = "TBU2UsjCW1cG5jLGAsNqR3doU"
  const form = new FormData();
  form.append('grant_type', 'password');
  form.append('client_id', SF_CLIENT_ID);
  form.append('client_secret', SF_CLIENT_SECRET);
  form.append('username', SF_USERNAME);
  form.append('password', SF_PASSWORD + SF_SECURITY_TOKEN);
  
  const salesForceResponse = await fetch(SF_URL_BASE + "/services/oauth2/token", {
      method: "POST",
      body: form,
      cache: "no-cache",
  })

  const data = await salesForceResponse.json();
  const accessToken = data.access_token;

  try {
    const body = await request.json();
    const response = await fetch(SF_SITE_URL + "/services/apexrest/Lead/", {
      method: "POST",
      headers: {
        'Content-Type': 'Application/json',
        'Authorization': 'Bearer ' + accessToken
      },
      body: JSON.stringify(body)
    });
    const data =  await response.json();
    return NextResponse.json({
      message: 'Mensagem enviada com sucesso',
      details: data
    }, { status: 200 });
  } catch(error) {
    console.error({ error });
    return NextResponse.json({
      message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.',
      details: error
    }, { status: 500 });
  }
}