const STRAPI_TOKEN =
  "518b5a8f55117cff2f6c988e3d76507cb9bd5aaf65c428367e72587ae03cbdfdf73bffad26f215c602163040cadd340d9797ed7e4ee21f7688424ea8234a321e5be091a5c4038a31216415ce6043b4f449db6dc288fc2b879de69b2ca73a0c34ee17c703b0f1ded10b6398eb4c8557500caef032616d62f204e2c3936d9f9ae2";

function useStrapi() {
  async function getArticles() {
    const resp = await fetch("http://72.167.37.48:3002/api/articles", {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });
    const data = await resp.json();
    const articles = data.data;
    return articles;
  }
  async function getArticle(id) {
    const resp = await fetch(`http://72.167.37.48:3002/api/articles/${id}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });
    const data = await resp.json();
    const article = data.data;
    return article;
  }
  return { getArticles, getArticle };
}

export default useStrapi;
