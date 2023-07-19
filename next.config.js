/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "lit216.pbworks.com",
      "upload.wikimedia.org",
      "www.theparisreview.org",
      "ychef.files.bbci.co.uk",
      "media.npr.org",
      "images2.minutemediacdn.com",
      "media.newyorker.com",
      "laurencecoupe.co.uk",
      "s-f.scribdassets.com",
      "avatars.githubusercontent.com",
      "images.weserv.nl",
      "img.icons8.com",
    ],
  },
  // webpack(config){
  //     config.experiments = {
  //         ...config.experiments,
  //         topLevelAwait:true
  //     }
  //     return config
  // }
};

module.exports = nextConfig
