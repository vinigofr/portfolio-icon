const generateLink = (params) => {
  const { title, backgColor, icon, logoColor } = params
  const URL = `https://img.shields.io/badge/${title}-${backgColor}?style=for-the-badge&logo=${icon}&logoColor=${logoColor}`;
  return URL;
};

export default generateLink;
