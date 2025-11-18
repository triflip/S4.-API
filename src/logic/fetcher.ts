
export async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json() as T;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
