export const fetchData = async (
  resource: string,
  options: RequestInit = {},
  searchParams: Record<string, any> = {}
) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  let url = `${baseUrl}/${resource}`;

  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  });

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  const fetchHeaders = {
    ...options?.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...fetchHeaders,
      },
    });

    if (!response?.ok) {
      throw new Error(`Ошибка запроса: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};

/*
    const users = await fetchData("users", {}, { page: 2, limit: 10 });
    результат: запрос уйдёт на
    https://your-api.com/users?page=2&limit=10
*/