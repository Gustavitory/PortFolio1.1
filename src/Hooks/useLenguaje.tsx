import { useAppSelector } from './useRedux'
import { ES } from '../resources/Lenguajes/ES';
import { EN } from '../resources/Lenguajes/EN';

export const useLenguaje = () => {
  let idioma=useAppSelector(state=>state.lenguaje)
  let textos
  if(idioma==='ES')textos=ES;
  else textos=EN;
  return textos;
}
