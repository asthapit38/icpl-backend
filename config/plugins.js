module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
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
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_1uoPtxybcCyQGTs0ENMqZPj92GFc/EJW2c5rm42",
      apiToken: "FDZgWyhDpDEP4won2xhtn5wA",
      appFilter: "icpl-backend",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
