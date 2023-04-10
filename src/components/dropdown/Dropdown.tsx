import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownToggle,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuItemText,
} from "./Dropdown.styled";

// components
import { MoreIcon } from "../more-icon/MoreIcon";

interface DropdownItem {
  label: string;
  onPress: () => void;

  /**
   * If the menu items needed to be a mix of buttons and anchor tags,
   * I would add one more prop, something like 'itemType'.
   * The team would need to further discuss whether a different
   * style would be required for each type.
   */
}

interface DropdownProps {
  items: DropdownItem[]; // array of dropdown items
  align?: "left" | "right"; // here we can have a left or right aligned dropdown
  iconColor: string; // svg icon color
}

function Dropdown({ items, align = "right", iconColor }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: DropdownItem) => {
    setIsOpen(false);

    if (!!item.onPress) {
      item.onPress();
    }
  };

  return (
    <>
      <DropdownContainer>
        <DropdownToggle onPress={toggleMenu} align={align}>
          <MoreIcon size={40} color={iconColor} />
        </DropdownToggle>
      </DropdownContainer>
      {isOpen && (
        <DropdownMenu align={align}>
          {items.map((item, index) => (
            <DropdownMenuItem key={index} onPress={() => handleItemClick(item)}>
              <DropdownMenuItemText>{item.label}</DropdownMenuItemText>
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      )}
    </>
  );
}

export default Dropdown;
