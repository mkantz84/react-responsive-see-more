import * as React from "react";
import { Link } from "react-router-dom";

import useWindowDimensions from "./services/useWindowDimensions";
import {
  getNumberOfAllowedItems,
  souldShowMoreButton
} from "./services/seeMoreService";

import "./styles.scss";

const { memo, useEffect, useState, useRef } = React;

interface IProps {
  items: React.ReactNode[];
  itemWidth: number;
  seeMoreURL?: string;
  className?: string;
  seeMoreButtonClassName?: string;
  seeMoreButtonnText?: string;
}

const App: React.FC<IProps> = ({
  items,
  itemWidth,
  seeMoreURL = "",
  seeMoreButtonnText = "",
  className = "",
  seeMoreButtonClassName = ""
}) => {
  const itemsContainer = useRef<HTMLInputElement>(null);
  const [showMoreButton, setShowMoreButton] = useState<boolean>(!!seeMoreURL);
  const [allowedItems, setAllowedItems] = useState(items);
  const { width } = useWindowDimensions();
  useEffect(() => {
    const itemsContainerWidth = itemsContainer?.current?.offsetWidth;
    let numberOfAllowedItems = getNumberOfAllowedItems(
      itemsContainerWidth,
      itemWidth
    );
    const showMoreBut = souldShowMoreButton(
      numberOfAllowedItems,
      items.length,
      seeMoreURL
    );
    setShowMoreButton(showMoreBut);
    if (!showMoreBut) {
      numberOfAllowedItems++;
    }
    setAllowedItems(items.slice(0, numberOfAllowedItems - 1));
  }, [width, items]);

  const renderSeeMore = () => {
    if (!showMoreButton) {
      return <div />;
    }
    return (
      <Link
        to={seeMoreURL}
        className={`see-more--button ${seeMoreButtonClassName}`}
      >
        {seeMoreButtonnText || "See more"}
      </Link>
    );
  };

  return (
    <div className={`see-more ${className}`} ref={itemsContainer}>
      {allowedItems}
      {renderSeeMore()}
    </div>
  );
};

export default memo(App);
