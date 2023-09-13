const hubspotToken = 'pat-na1-27eadb04-07a8-4a9f-9d81-a3faf7082c42'
// const hubspotToken = 'pat-na1-0fb17b16-40bc-439a-9073-54142cda2ffd'
const tagsIds = {
  articles: "134535323253",
};

function useHubspot() {
  return { getBlogsPostsByTag };
}
async function getArticles() {
  const res = await getBlogsPostsByTag("articles");
  return res;
}
async function getArticle(id) {
  const res = await getBlogPostById(id);
  return res;
}

export { useHubspot, getBlogsPostsByTag, getArticles, getArticle };

async function getBlogPostById(id) {
  const res = await fetch(`https://butfor.co/hubspot-proxy/cms/v3/blogs/posts/${id}`, {
    headers: {
      authorization: `Bearer ${hubspotToken}`,
    },
  });
  const blogPost = await res.json();
  return blogPost;
}
async function getBlogsPostsByTag(tag) {
  const res = await fetch(
    `https://butfor.co/hubspot-proxy/cms/v3/blogs/posts?tagId__in=${tagsIds[tag]}`,
    {
      headers: {
        authorization: `Bearer ${hubspotToken}`,
      },
    }
  );
  const blogs = await res.json();
  return blogs;
}
