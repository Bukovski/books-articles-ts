import React, { useContext, useEffect } from "react";
import { Error } from "../components/error"
import { Loader } from "../components/loader";


export const withDataReady = (ContextName, methodsProps) => (View) => (props) => {
  const context = useContext(ContextName);
  const { getLoadData, getData, error, loading } = methodsProps(context);
  
  const { name } = props.match.params;
  
  useEffect(() => {
    async function dataLoader() {
      await getLoadData(name);
    }
    
    dataLoader();
    // eslint-disable-next-line
  }, [ name ]);
  
  let showLoader;
  
  if (error) showLoader = <Error />;
  if (!getData.length || loading) showLoader = <Loader />;
  
  
  return <View { ...props } { ...context } showLoader={ showLoader }/>;
};

