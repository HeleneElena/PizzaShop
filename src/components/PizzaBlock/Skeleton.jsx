import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader 
    className='pizza-block'
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="138" cy="128" r="128" /> 
    <rect x="0" y="286" rx="11" ry="11" width="280" height="18" /> 
    <rect x="0" y="321" rx="11" ry="11" width="280" height="88" /> 
    <rect x="0" y="432" rx="11" ry="11" width="85" height="27" /> 
    <rect x="111" y="429" rx="11" ry="11" width="150" height="39" />
  </ContentLoader>
);

export default Skeleton;
