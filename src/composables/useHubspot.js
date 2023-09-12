const tagsIds = {
  articles: "134535323253",
};

export function useHubspot() {
  const getBlogsPostsByTag = async (tag) => {
    const res = await fetch(
      `https://butfor.co/hubspot-proxy/cms/v3/blogs/posts?tagId__in=${tagsIds[tag]}`,
      {
        headers: {
          authorization: `Bearer pat-na1-27eadb04-07a8-4a9f-9d81-a3faf7082c42`,
        },
      }
    );
    const blogs = await res.json();
    return blogs;
  };

  return { getBlogsPostsByTag };
}
