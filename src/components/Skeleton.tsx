import React from 'react'
import ContentLoader from "react-content-loader"
function Skeleton() {
     return (
          <ContentLoader
               speed={2}
               width={285}
               height={463}
               viewBox="0 0 285 463"
               backgroundColor="#f3f3f3"
               foregroundColor="#ecebeb"
          >
               <rect x="0" y="0" rx="0" ry="0" width="280" height="280" />
               <rect x="0" y="290" rx="0" ry="0" width="280" height="40" />
               <rect x="0" y="340" rx="0" ry="0" width="280" height="30" />
               <rect x="0" y="375" rx="0" ry="0" width="50" height="25" />
               <rect x="222" y="375" rx="0" ry="0" width="60" height="25" />
               <rect x="0" y="410" rx="30" ry="0" width="280" height="55" />
          </ContentLoader>
     )
}

export default Skeleton