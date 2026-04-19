export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  

  
  switch (skillID) {
    case 'html':
      return '/svg/skills/html.svg';
    case 'docker':
      return '/svg/skills/docker.svg';
    case 'css':
      return '/svg/skills/css.svg';
    case 'javascript':
      return '/svg/skills/javascript.svg';
    case 'react':
      return '/svg/skills/react.svg';
    case 'bootstrap':
      return '/svg/skills/bootstrap.svg';
    case 'mongodb':
      return '/svg/skills/mongoDB.svg';
    case 'mysql':
      return '/svg/skills/mysql.svg';
    case 'tailwind':
      return '/svg/skills/tailwind.svg';
    case 'vitejs':
      return '/svg/skills/vitejs.svg';
    case 'c':
      return '/svg/skills/c.svg';
    case 'c++':
      return '/svg/skills/cplusplus.svg';
    case 'c#':
      return '/svg/skills/csharp.svg';
    case 'aws':
      return '/svg/skills/aws.svg';
    case 'firebase':
      return '/svg/skills/firebase.svg';
    case 'git':
      return '/svg/skills/git.svg';
    case 'materialui':
      return '/svg/skills/materialui.svg';
    case 'canva':
      return '/svg/skills/canva.svg';
    default:
      return null; 
  }
}
