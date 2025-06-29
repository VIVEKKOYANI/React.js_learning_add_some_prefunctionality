import React, { useEffect, useState } from 'react'
import axios from 'axios';

const capitalize = str => str?.charAt(0)?.toUpperCase() + str?.slice(1);

const withEditableResource = (Component, responsePath, responseName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(responsePath);
        setData(response.data);
        setOriginalData(response.data);
      })()
    }, [])

    const onChange = changes => {
      setData({ ...data, ...changes });
    }

    const onSave = async () => {
      const response = await axios.post(responsePath, { [responseName]: data });
      setData(response.data);
      setOriginalData(response.data);
    }

    const onReset = () => {
      setData(originalData);
    }

    const resourceProps = {
      [responseName]: data,
      [`onChange${capitalize(responseName)}`]: onChange,
      [`onSave${capitalize(responseName)}`]: onSave,
      [`onReset${capitalize(responseName)}`]: onReset,
    }

    return <Component {...props} {...resourceProps} />
  }
}

export default withEditableResource