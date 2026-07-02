
const getBasePath = () => {
  if(process.env.BASE_PATH) {
    return `/${process.env.BASE_PATH}`
  } else {
    return undefined
  }
}

module.exports = {
  basePath: getBasePath(),
  reactStrictMode: true,
  images: {
    domains: ['cdn-images-1.medium.com', 'miro.medium.com', 'res.cloudinary.com'],
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
}
