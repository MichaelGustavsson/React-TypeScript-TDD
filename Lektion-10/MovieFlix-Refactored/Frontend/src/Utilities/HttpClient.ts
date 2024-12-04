export async function get<T>(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Det gick inte att hämta data via url: ${url}`);
  }

  const data = (await response.json()) as unknown;

  return data as T;
}
