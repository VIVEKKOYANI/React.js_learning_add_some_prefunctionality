import React, { Children, useState } from 'react'

const UnControlledOnBoardingFlow = ({ children, onFinish }) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    const updateData = {
      ...onboardingData,
      ...stepData
    }

    console.log(updateData);

    if(nextIndex < children.length){
      setCurrentIndex(nextIndex)
    }else{
      onFinish(updateData);
    }
    setOnboardingData(updateData);
    // setCurrentIndex(currentIndex + 1);
  }

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild
}

export default UnControlledOnBoardingFlow