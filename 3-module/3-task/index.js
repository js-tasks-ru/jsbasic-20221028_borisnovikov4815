function camelize(str) {
  cam = str.split("-").map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
  .join('')
  //console.log(cam);
  return cam;
};

// camelize('background-color') //== 'backgroundColor';
// camelize('list-style-image') //== 'listStyleImage';
// camelize('-webkit-transition') //== 'WebkitTransition';