import { InfoWrapper, NavigationItems, NavigationItem } from './styled';
import filledArrowUp from 'assets/icons/filledArrowUp.svg';
import filledArrowDown from 'assets/icons/filledArrowDown.svg';
import { useState } from 'react';

const Info = ({ navigationInfo, onMenuToggle }) => {
  const [infoIsClicked, setInfoIsClicked] = useState(false);

  const onInfo = () => {
    setInfoIsClicked(!infoIsClicked);
  };

  return (
    <>
      <InfoWrapper onClick={onInfo}>
        <span>Info</span>
        <div>
          {infoIsClicked ? (
            <img alt="icon" src={filledArrowUp} />
          ) : (
            <img alt="icon" src={filledArrowDown} />
          )}
        </div>
      </InfoWrapper>
      <NavigationItems isOpen={infoIsClicked}>
        {navigationInfo.map((item) => (
          <NavigationItem onClick={onMenuToggle} to={item.link} key={item.link}>
            {item.label}
          </NavigationItem>
        ))}
      </NavigationItems>
    </>
  );
};

export default Info;
