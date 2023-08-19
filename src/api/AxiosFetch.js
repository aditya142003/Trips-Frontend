import axios from "axios";

const AxiosFetch = async (methods, dataurl) => {
  let data = {};
  let fetchError = null;

  await axios({
    method: methods,
    url: dataurl,
  })
    .then((dataRec) => {
      data = dataRec;
    })
    .catch((err) => {
      fetchError = err;
    });
  return data;
};

// useEffect(() => {
//   fetchData();
// }, [dataurl]);

export default AxiosFetch;
