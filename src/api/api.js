export async function fetchAnime(searchTerm) {
  const query = `
    query ($search: String) {
      Page(page: 1, perPage: 50) {
        media(
          search: $search
          isAdult: false
        ) {
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

  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        search: searchTerm,
      },
    }),
  });

  const data = await response.json();

  console.log(data);

  return data?.data?.Page?.media;
}
