import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setWallTwoDoors,
  setWallTwoHeight,
  setWallTwoWidth,
  setWallTwoWindows,
} from '../../../../redux/slices/wallTwoSlice';
import { replaceClassName } from '../../../../utils/functions/functions';
import { Input } from '../../atoms/Input';
import './style.css';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string;
}

export const WallFormTwo: React.FC<FormProps> = ({ title }) => {
  const [values, setValues] = useState({
    height: 0,
    width: 0,
    doors: 0,
    windows: 0,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWallTwoHeight(values.height));
    dispatch(setWallTwoWidth(values.width));
    dispatch(setWallTwoDoors(values.doors));
    dispatch(setWallTwoWindows(values.windows));
  }, [values, dispatch]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  return (
    <section className={`wall-form ${replaceClassName(title)}`}>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <Input
          id='wallOne'
          type='number'
          label='Quantidade de portas' // se for maior que 0 calcular valor mínimo da parede: alturaMinima = porta + 30
          placeholder='Digite a quantidade de portas'
          value={values.doors}
          name='doors'
          handleChange={handleChange}
        />
        <Input
          id='wallOne'
          type='number'
          label='Quantidade de janelas'
          placeholder='Digite a quantidade de janelas'
          name='windows'
          value={values.windows}
          handleChange={handleChange}
        />
        <Input
          id='wallOne'
          type='number'
          label='Altura (m)'
          placeholder='Digite a altura da parede'
          value={values.height}
          name='height'
          step='.1'
          handleChange={handleChange}
        />
        <Input
          id='wallOne'
          type='number'
          label='Largura (m)'
          placeholder='Digite a largura da parede'
          value={values.width}
          name='width'
          step='.1'
          handleChange={handleChange}
        />
      </form>
    </section>
  );
};
