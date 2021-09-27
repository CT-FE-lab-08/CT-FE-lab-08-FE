const URL = 'https://still-journey-26608.herokuapp.com/api/v1/alchemy-cry-lab';

export async function getAllEntries() {
  const res = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials': true 
    },
  })
    .then((res) => res.json());

  return res.reverse();
}

export async function getEntryById(id) {
  const res = await fetch(`${URL}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials': true 
    },
  })
    .then((res) => res.json());
  return res;
}

export async function postEntry(name, eventResponse, note) {
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials': true 
    },
    body: JSON.stringify({ name, event: eventResponse, note }),
  })
    .then((res) => res.json());
  return res;
}

export async function updateEntry(id, entry) {
  const res = await fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials': true 
    },
    body: JSON.stringify(entry),
  })
    .then((res) => res.json());
  return res;
}

export async function deleteEntry(id) {
  const res = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials': true 
    },
  })
    .then((res) => res.json());
  return res;
}
