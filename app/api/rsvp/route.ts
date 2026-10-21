export async function POST(
  request: Request
) {

  try {

    const body =
      await request.text();

    const params =
      new URLSearchParams(body);

    const nombre =
      params.get("nombre") || "";

    const respuesta =
      params.get("respuesta") || "";


    return Response.json({
      ok: true,
      demo: true,
      nombre,
      respuesta,
    });

  }
  catch {

    return Response.json(
      {
        ok: false,
      },
      {
        status: 500,
      }
    );

  }

}