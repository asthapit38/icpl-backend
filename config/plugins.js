module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "location-field": {
    enabled: true,
    config: {
      fields: ["photo", "rating"], // optional
      googleMapsApiKey: "your google api key", //You need to enable "Autocomplete API" and "Places API" in your Google Cloud Console
    },
  },
});
