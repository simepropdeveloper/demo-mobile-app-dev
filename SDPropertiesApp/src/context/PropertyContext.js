import createDataContext from './createDataContext';
import SDPropServer from '../api/SDPropServer';
import * as RootNavigation from '../../RootNavigation';

const propertyReducer = (state, action) => {
  switch (action.type) {
    case 'get_properties':
      return { ...state, properties: action.payload };
    case 'get_announcements':
      return { ...state, announcements: action.payload };
    case 'get_visitors':
      return { ...state, visitors: action.payload };
    case 'edit_visitor':
      return { ...state, visitors: editVisitorinState(state, action) };
    case 'delete_visitor':
      return { ...state, visitors: deleteVisitorinState(state, action) };
    default:
      return state;
  }
};

const editVisitorinState = (state, action) => {
  const editVisitor = state.visitors.map((visitor) => {
    return visitor.id === action.payload.id ? action.payload : visitor;
  });
  return editVisitor;
};

const deleteVisitorinState = (state, action) => {
  const deleteVisitor = state.visitors.filter((visitor) => visitor.id !== action.payload);
  return deleteVisitor;
};

const getProperties = (dispatch) => {
  return async () => {
    const response = await SDPropServer.get('/properties');
    dispatch({ type: 'get_properties', payload: response.data });
  };
};

const getAnnouncements = (dispatch) => {
  return async () => {
    const response = await SDPropServer.get('/announcements');
    dispatch({ type: 'get_announcements', payload: response.data });
  };
};

const getVisitors = (dispatch) => {
  return async () => {
    const response = await SDPropServer.get('/visitors');
    dispatch({ type: 'get_visitors', payload: response.data });
  };
};

const addVisitor = () => {
  return async (
    house,
    name,
    plateNo,
    mobileNo,
    entryType,
    entryDate,
    approvalUponArrival,
    callback
  ) => {
    await SDPropServer.post('/visitors', {
      house,
      name,
      plateNo,
      mobileNo,
      entryType,
      entryDate,
      approvalUponArrival
    });
    callback();
  };
};

const editVisitor = (dispatch) => {
  return async (id, house, name, plateNo, mobileNo, entryType, entryDate, approvalUponArrival) => {
    await SDPropServer.put(`/visitors/${id}`, {
      house,
      name,
      plateNo,
      mobileNo,
      entryType,
      entryDate,
      approvalUponArrival
    });
    dispatch({
      type: 'edit_visitor',
      payload: {
        id,
        house,
        name,
        plateNo,
        mobileNo,
        entryType,
        entryDate,
        approvalUponArrival
      }
    });
    RootNavigation.goBack();
  };
};

const deleteVisitor = (dispatch) => {
  return async (id) => {
    await SDPropServer.delete(`/visitors/${id}`);
    dispatch({ type: 'delete_visitor', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  propertyReducer,
  {
    getProperties,
    getAnnouncements,
    getVisitors,
    addVisitor,
    editVisitor,
    deleteVisitor
  },
  []
);
