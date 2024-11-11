const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        uploadToPlatform() {
          console.log("Uploading...");

          return null;
        },
      });
    },
  },
  env: {
    serviceId: "a51a27b1-d23f-96ea-5d12-0135e2700591",
    secret: "AudUQWQOg8MsxYPoBjyDosqYKTBaaomB",
  },
});
