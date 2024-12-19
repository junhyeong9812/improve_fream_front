import './../css/shortcutItemWrap.css';
import React from 'react';
import ShortcutItem from './shortcutItem';
import { ShortcutItemWrapProps } from '../types/homeTypes';

const ShortcutItemWrap: React.FC<ShortcutItemWrapProps> = ({ shortcutList }) => {

  return (
    <div className='home_shortcut_container'>
      {shortcutList.map((item, index) => (
        <ShortcutItem shortcut={item}/>
      ))}
    </div>
  );
};
  
  export default ShortcutItemWrap;
  