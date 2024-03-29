  
import aws from '/public/svg/skills/aws.svg';

import bootstrap from '/public/svg/skills/bootstrap.svg';

import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';

import cplusplus from '/public/svg/skills/cplusplus.svg';
import csharp from '/public/svg/skills/csharp.svg';
import css from '/public/svg/skills/css.svg';

import docker from '/public/svg/skills/docker.svg';

import firebase from '/public/svg/skills/firebase.svg';

import git from '/public/svg/skills/git.svg';

import html from '/public/svg/skills/html.svg';
import javascript from '/public/svg/skills/javascript.svg';
import materialui from '/public/svg/skills/materialui.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import react from '/public/svg/skills/react.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import vitejs from '/public/svg/skills/vitejs.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'docker':
      return docker;
    case 'css':
      return css;

    case 'javascript':
      return javascript;

    case 'react':
      return react;

    case 'bootstrap':
      return bootstrap;

    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;

    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;

    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;


    case 'aws':
      return aws;

    case 'firebase':
      return firebase;

    case 'git':
      return git;

    case 'materialui':
      return materialui;

    case 'canva':
      return canva;
    default:
      break;
  }
}
