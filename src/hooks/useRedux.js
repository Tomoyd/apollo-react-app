import { useDispatch, useSelector } from 'react-redux';

const useReduxData = (key) => {
  const thisValue = useSelector((state) => state[key]);
  const dispatch = useDispatch();

  const setReduxData = (value) => {
    let action = {
      value,
      type: key,
    };
    dispatch(action);
  };

  return [thisValue, setReduxData];
};

export default useReduxData;
