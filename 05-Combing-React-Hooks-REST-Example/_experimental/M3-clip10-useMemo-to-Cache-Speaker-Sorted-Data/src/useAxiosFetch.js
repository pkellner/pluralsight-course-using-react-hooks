/*
When talking about this, make sure to talk about why not making each a separate state.

Reason is because you you don't want them changing one at a time because then you have to worry
about state downstream being affected one at a time.  no such thing as a transaction where you can group a bunch of
setState's together. But, you can make an object and set that at the same time and ahieve the same result
 */

import { useEffect, useState } from "react";
import axios from "axios";

const useAxiosFetch = (
  url,
  method,
  data,
  timeout,
  emptyDataReturn,
  withCredentials,
  toggleForceUpdate
) => {
  const initAxiosResult = {
    isLoading: true,
    hasErrored: false,
    errorMessage: null,
    data: emptyDataReturn,
    forceUpdate: true
  };

  const [axiosResult, setAxiosResult] = useState(initAxiosResult);
  const [forceUpdate, setForceUpdate] = useState(false);

  toggleForceUpdate = () => {
    console.log(`initAxiosResult.toggleForceUpdate called ${forceUpdate}`);
    setForceUpdate(!forceUpdate);
  };

  //https://stackoverflow.com/questions/53059059/react-hooks-making-an-ajax-request

  useEffect(() => {
    console.log("useAxiosFetch:useEffect");

    let mounted = true;
    let source = axios.CancelToken.source();
    axios({
      method,
      url,
      withCredentials,
      cancelToken: source.token,
      timeout: timeout
    })
      .then(a => {
        if (mounted) {
          setAxiosResult({
            isLoading: false,
            hasErrored: false,
            errorMessage: null,
            data: a.data
          });
        }
      })
      .catch(function(e) {
        if (mounted) {
          setAxiosResult({
            isLoading: false,
            hasErrored: true,
            errorMessage: e.message,
            data: emptyDataReturn
          });
        }
      });
    return function() {
      mounted = false;
      source.cancel("Cancelling in cleanup");
    };
  }, [forceUpdate]);
  return axiosResult;
};

export default useAxiosFetch;
