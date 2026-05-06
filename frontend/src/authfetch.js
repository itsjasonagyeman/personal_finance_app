import { getAuth } from 'firebase/auth';

export async function authFetch(url, options = {}) {
  const token = await getAuth().currentUser.getIdToken();
  return fetch(url, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...options.headers,
    }
  });
}