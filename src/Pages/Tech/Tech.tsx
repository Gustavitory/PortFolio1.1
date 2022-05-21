import React from 'react'
import { ImageSelector } from '../../Components/ImageSelector'
import { Nav } from '../../Components/Nav'
import ReactIcon from '../../Images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png';
import NodeIcon from '../../Images/node.png';
import TypescriptIcon from '../../Images/typescript.png'
import ReduxIcon from '../../Images/kisspng-redux-react-javascript-library-application-softwar-egghead-intro-to-redux-5bf74afd47b7f1.1525757215429332452938.png';
import JSicon from '../../Images/kisspng-javascript-scalable-vector-graphics-logo-encapsula-javascript-le-ekran-grnts-almak-alpere-5b6dbeb4be0349.4316196815339189007783.png'
import htmlicon from '../../Images/kisspng-web-development-html-responsive-web-design-logo-ja-html-5ae04a9526c592.7493066215246485971588.png'
import cssIcon from '../../Images/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20be5eed10.7390827615242446703888.png'
import graphql from '../../Images/graphql.png'
import express from '../../Images/express.png'
import sql from '../../Images/sql.png'
import git from '../../Images/git.png'
import sequelize from '../../Images/sequelize.png'
import reactNative from '../../Images/reactNative.png'
import bootstrap from '../../Images/bootstrap.png'
import { useLenguaje } from '../../Hooks/useLenguaje';


export const Tech = () => {

  const {tech}=useLenguaje();

    const data=[
        {image:ReactIcon,description:tech.react,name:'React.js',color:'rgba(35, 203, 225, 0.4)'},
        {image:NodeIcon,description:tech.node,name:'Node.js',color:'rgba(35, 225, 51, 0.4)'},
        {image:TypescriptIcon,description:tech.ts,name:'TypeScript',color:'rgba(35, 108, 225, 0.4)'},
        {image:ReduxIcon,description:tech.redux,name:'Redux.js',color:'rgba(130, 35, 225, 0.4)'},
        {image:JSicon,description:tech.js,name:'JavaScript',color:'rgba(222, 225, 35, 0.4)'},
        {image:htmlicon,description:tech.html,name:'HTML',color:'rgba(225, 105, 35, 0.4)'},
        {image:cssIcon,description:tech.css,name:'CSS',color:'rgba(35, 45, 225, 0.4)'},
        {image:graphql,description:tech.graphql,name:'Graphql',color:'rgba(225, 35, 152, 0.4)'},
        // {image:android,description:'React es una libreria cool',name:'Android',color:'rgba(57, 225, 35, 0.4)'},
        // {image:mac,description:'React es una libreria cool',name:'Ios',color:'rgba(255, 255, 255, 0.4)'},
        {image:express,description:tech.express,name:'Express',color:'rgba(143, 143, 143, 0.4)'},
        {image:sql,description:tech.sql,name:'Sql',color:'rgba(35, 203, 225, 0.4)'},
        {image:git,description:tech.git,name:'Git',color:'rgba(225, 105, 35, 0.4)'},
        {image:sequelize,description:tech.sequelize,name:'Sequelize',color:'rgba(35, 203, 225, 0.4)'},
        {image:reactNative,description:tech.reactNative,name:'React Native',color:'rgba(35, 108, 225, 0.4)'},
        {image:bootstrap,description:tech.bootstrap,name:'Bootstrap',color:'rgba(130, 35, 225, 0.4)'}
    ]

  return (
    <>
        <Nav/>
        <ImageSelector data={data} title='hola' />
    </>
  )
}