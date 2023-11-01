const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

type ExtractVariables<T> = T extends { variables: object }
  ? T['variables']
  : never;

export async function fetchData<T>({
  query,
  headers,
  variables,
  cache,
  tags,
}: {
  query: string;
  headers?: HeadersInit;
  variables?: ExtractVariables<T>;
  cache?: RequestCache;
  tags?: string[];
}): Promise<{ status: number; body: T } | never> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags } }),
    });

    const body = await response.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: response.status,
      body,
    };
  } catch (e) {
    throw {
      error: e,
      query,
    };
  }
}
