import React from 'react'
import  {ArrowHoverWrapper, ArrowUp, ItemContainer} from './styled'
import icon from 'assets/icons/person.svg'


const MyProfileMenu = () => {
  return <>
    <ArrowHoverWrapper />
      <ArrowUp />
   <ItemContainer >
                <div>
                  <img src={icon} />
                </div>
                <span>Item name</span>
              </ItemContainer>
   </>
}

export default MyProfileMenu