import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrentUserLoader from './CurrentUserLoader'
import UserInfo from './UserInfo'
import UserLoader from './UserLoader'
import ResourceLoader from './ResourceLoader'
import ProductInfo from './ProductInfo'
import DataSource from './DataSource'
import axios from 'axios'

function App() {

  const getServerData = async (url) => {
    const response = await axios.get(url);
    return response.data;
  }

  const getLocalStorageData = (key) => {
    return localStorage.getItem(key) ? localStorage.getItem(key) : 'No message found';
  }

  const Text = ({message}) => <h1>{message}</h1>

  return (
    <>
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}
      {/* <UserLoader userId="2">
        <UserInfo />
      </UserLoader> */}
      {/* <ResourceLoader resourceName='user' resourceUrl={`/users/2`}>
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceName='product' resourceUrl={`/products/2`}>
        <ProductInfo />
      </ResourceLoader> */}
      <DataSource getDataFunc={() => getServerData('/users/2')} resourceName='user'>
        <UserInfo />
      </DataSource>
      <DataSource getDataFunc={() => getLocalStorageData('message')} resourceName='message'>
        <Text />
      </DataSource>
    </>
  )
}

export default App
