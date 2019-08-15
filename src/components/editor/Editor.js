import React from 'react';
import { history } from '../../store/configureStore';

export default function Editor() {
  return (
    <div>
      <button onClick={() => history.push('/')}>{'<-'}</button>
      Editor
    </div>
  );
}
