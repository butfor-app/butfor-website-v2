const STRAPI_TOKEN =
  "518b5a8f55117cff2f6c988e3d76507cb9bd5aaf65c428367e72587ae03cbdfdf73bffad26f215c602163040cadd340d9797ed7e4ee21f7688424ea8234a321e5be091a5c4038a31216415ce6043b4f449db6dc288fc2b879de69b2ca73a0c34ee17c703b0f1ded10b6398eb4c8557500caef032616d62f204e2c3936d9f9ae2";
const STRAPI_BASE_URL = "https://butfor.co/strapi";
const STRAPI_API_BASE_URL = "https://butfor.co/strapi/api";

const STRAPI_HEADERS = {
  Authorization: `Bearer ${STRAPI_TOKEN}`,
};

function useStrapi() {
  function getImageUrl(img) {
    return STRAPI_BASE_URL + img;
  }

  async function getArticles() {
    const resp = await fetch(
      STRAPI_API_BASE_URL + "/articles?populate[0]=thumbnail",
      {
        headers: {
          ...STRAPI_HEADERS,
        },
      }
    );
    const data = await resp.json();
    const articles = data.data;
    return articles;
  }
  async function getArticle(id) {
    const resp = await fetch(STRAPI_API_BASE_URL + `/articles/${id}`, {
      headers: {
        ...STRAPI_HEADERS,
      },
    });
    const data = await resp.json();
    const article = data.data;
    return article;
  }

  async function getWebinars() {
    const resp = await fetch(
      STRAPI_API_BASE_URL + "/webinars?populate[0]=thumbnail",
      {
        headers: {
          ...STRAPI_HEADERS,
        },
      }
    );
    const data = await resp.json();
    const webinars = data.data;
    return webinars;
  }

  async function getWebinar(webinarId) {
    const resp = await fetch(
      STRAPI_API_BASE_URL + "/webinars/" + webinarId + "?populate[0]=thumbnail",
      {
        headers: {
          ...STRAPI_HEADERS,
        },
      }
    );
    const data = await resp.json();
    const webinar = data.data;
    return webinar;
  }
  return { getImageUrl, getArticles, getArticle, getWebinars, getWebinar };
}

export default useStrapi;
