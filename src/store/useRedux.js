import { useDispatch, useSelector } from 'react-redux';

const useRedux = (key) => {
  const value = useSelector((state) => state[key]);

  const dispatch = useDispatch();

  const setRedux = (value) => {
    let action = {};
    action[key] = value;
    action.type = key;
    dispatch(action);
  };
  return [value, setRedux];
};

export default useRedux;
