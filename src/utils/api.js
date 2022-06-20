const baseUrl = process.env.REACT_APP_BASE_URL ?? '';
const accessKey = process.env.REACT_APP_ACCESS_KEY ?? '';

const authParam = '?client_id=' + accessKey;

async function api(url, options) {
  const _url = baseUrl + url + authParam;
  const response = await fetch(_url, options);
  return await response.json();
}

api.get = async (url, options) => await api(url, { method: 'GET', ...options });
api.post = async (url, options) =>
  await api(url, { method: 'POST', ...options });
api.put = async (url, options) => await api(url, { method: 'PUT', ...options });
api.patch = async (url, options) =>
  await api(url, { method: 'PATCH', ...options });
api.delete = async (url, options) =>
  await api(url, { method: 'DELETE', ...options });

export default api;
