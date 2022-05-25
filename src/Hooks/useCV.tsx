import { useAppSelector } from './useRedux'
import cvEspa from '../pdf/CVGustavoRieraEspañol.pdf'
import cvEng from '../pdf/CVGustavoRieraIngles.pdf'

export const useCV= () => {
  let idioma=useAppSelector(state=>state.lenguaje)
  let cv
  if(idioma==='ES')cv=cvEspa;
  else cv=cvEng;
  return cv;
}