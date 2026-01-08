export async function fetchAnime(searchTerm) {
  const query = `
    query ($search: String) {
      Page(page: 1, perPage: 50) {
        media(search: $search, type: ANIME, isAdult: false) {
          id
          title {
            english
          }
          coverImage {
            large
          }
        }
      }
    }
  `;

  const response = await fetch('/graphql', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify({
      query,
      variables: { search: searchTerm },
    }),
  });

  const data = await response.json();
  return data?.data?.Page?.media;
}
