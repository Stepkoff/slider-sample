import React from 'react';
import Slider from "./components/Slider";
import './App.scss';

export interface ISliderData {
  id: number,
  title: string,
  src: string,
}
export const sliderData:ISliderData[] = [{
    id: 123234,
    title: 'title 1',
    src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
  }, {
    id: 232334,
    title: 'title 2',
    src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  }, {
    id: 332343,
    title: 'title 3',
    src: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
  }, {
    id: 42346,
    title: 'title 4',
    src: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
  }, {
    id: 543249,
    title: 'title 5',
    src: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
  }
];

const App = () => {
  return (
    <div className={'App'}>
      <Slider slides={sliderData}/>
    </div>
  );
};

export default App;