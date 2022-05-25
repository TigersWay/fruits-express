const cloudinary = (imagePath, width, height) => `${process.env.CLOUDINARY_CDN_URL}/f_auto${width ? ',w_'+width : ''}${height ? ',h_'+height : ''}/${process.env.npm_package_name}${imagePath}`;

const none = (imagePath, width, height) => `${imagePath}`; // eslint-disable-line no-unused-vars


if (process.env.CLOUDINARY_CDN_URL) {

  module.exports = {
    cdn: (imagePath, width, height) => cloudinary(imagePath, width, height)
  };

} else {

  module.exports = {
    cdn: (imagePath, width, height) => none(imagePath, width, height)
  };

}
