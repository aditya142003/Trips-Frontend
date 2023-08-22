const GetFetch = async (methods, dataurl) => {
  const rawResponse = await fetch(dataurl, {
    credentials: "include",
    method: methods,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await rawResponse.json();
  return data;
};

const PostFetch = async (methods, dataurl, Info) => {
  const rawResponse = await fetch(dataurl, {
    credentials: "include",
    method: methods,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Info),
  });
  const data = await rawResponse.json();
  return data;
};

export { GetFetch, PostFetch };
// useEffect(() => {
//   fetchData();
// }, [dataurl]);
