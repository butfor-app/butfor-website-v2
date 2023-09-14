// const hubspotToken = 'pat-na1-27eadb04-07a8-4a9f-9d81-a3faf7082c42'
const hubspotToken = "pat-na1-5a0dc0de-82ce-4eff-9acd-fc1c5a992b48";

function useHubspot() {
  return {};
}
async function getArticles() {
  const res = await getTableRows("articles");
  return res;
}
async function getArticle(id) {
  const res = await getTableRowById("articles", id);
  return res;
}
async function getWebinars() {
  const res = await getTableRows("webinars");
  return res;
}
async function getWebinar(id) {
  const res = await getTableRowById("webinars", id);
  return res;
}
async function getTableRowById(tableName, id) {
  const res = await fetch(
    `https://butfor.co/hubspot-proxy/cms/v3/hubdb/tables/${tableName}/rows/${id}`,
    {
      headers: {
        authorization: `Bearer ${hubspotToken}`,
      },
    }
  );
  const row = await res.json();
  return row;
}
async function getTableRows(tableName) {
  const res = await fetch(
    `https://butfor.co/hubspot-proxy/cms/v3/hubdb/tables/${tableName}/rows`,
    {
      headers: {
        authorization: `Bearer ${hubspotToken}`,
      },
    }
  );
  const rows = await res.json();
  return rows;
}
export { useHubspot, getArticles, getArticle, getWebinars, getWebinar };
