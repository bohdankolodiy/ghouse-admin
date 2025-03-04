export async function GET() {
    const response = await fetch("http://localhost:9000/store/products", {
      headers: {
        "Content-Type": "application/json",
        "x-publishable-api-key": 'pk_c37fd91813273e08aadff759abd13582db90b7d42606642859f5d208e11dc270',
      },
    });
  
    if (!response.ok) {
      return Response.json({ error: "Помилка отримання продуктів" }, { status: response.status });
    }
  
    const data = await response.json();
    return Response.json(data);
  }
  