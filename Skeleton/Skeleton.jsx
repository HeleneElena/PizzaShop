import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader 
    speed={0}
    width={1110}
    height={200}
    viewBox="0 0 1110 200"
    backgroundColor="#afafb23d"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="16" ry="16" width="1110" height="180" />
  </ContentLoader>
)

export default Skeleton;