import './App.css';
import { nestedObject } from './nestedObject';
import printProps from './printProps';
import RecursivComponent from './RecursivComponent';
import UserInfo from './UserInfo';
import UserInfoForm from './UserInfoForm';
import withEditableResource from './withEditableResource';
import withEditableUser from './withEditableUser';
import withUser from './withUser';

// const UserInfoWrapped = printProps(UserInfo)
// const UserInfoWithLoader = withUser(UserInfo, '2');
// const EditableUserInfoForm = withEditableUser(UserInfoForm, '2');

const EditableUserInfoForm = withEditableResource(UserInfoForm, '/users/2', 'user');
function App() {

  return (
    <>
      {/* <UserInfoWrapped a={1} b="Hello" c={{name: "Vivke koyani"}} /> */}
      {/* <UserInfoWithLoader /> */}
      <EditableUserInfoForm />
      <RecursivComponent data={nestedObject} />
    </>
  )
}

export default App
