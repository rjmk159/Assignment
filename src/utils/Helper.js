let Helper = {};

Helper.capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

Helper.replaceUnderScoreWithSpace = string => {
  let newString = string.replace(/_/g, " ");
  return newString;
};
export default Helper;
