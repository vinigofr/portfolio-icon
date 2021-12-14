const generateLink = (params) => {
  const URL = `https://img.shields.io/badge/${title}-${titleColor}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`;
  return URL;
};

export default generateLink;
