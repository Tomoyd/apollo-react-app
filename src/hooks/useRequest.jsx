import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useRequest = (service, param = {}, config = { suspense: true }) => {
  const cacheData = useSelector((state) => state[service.name]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  if (cacheData && config.isCache) {
    setData(data);
  } else if (isLoading && config.suspense) {
    throw Promise.resolve(null);
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const serviceData = await service(param);
      setIsLoading(false);
      dispatch({
        type: service.name,
        value: serviceData,
      });
    };
    fetchData();
    return () => {};
  }, []);

  return [data];
};

export default useRequest;
