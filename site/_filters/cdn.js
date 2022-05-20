const cloudinary = (imagePath, width, height) => `${process.env.CLOUDINARY_CDN_URL}/f_auto${width ? ',w_'+width : ''}${height ? ',h_'+height : ''}/${process.env.npm_package_name}${imagePath}`;

const none = (imagePath, width, height) => `${imagePath}`; // eslint-disable-line no-unused-vars


if (process.env.CLOUDINARY_CDN_URL) {
console.log('cloudinary');
  module.exports = {
    cdn: (imagePath, width, height) => cloudinary(imagePath, width, height)
  };

} else {
console.log('none');
  module.exports = {
    cdn: (imagePath, width, height) => none(imagePath, width, height)
  };

}
