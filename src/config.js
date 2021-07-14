const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-1002",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://vkzvjtngcj.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_0XARcL9k9",
      APP_CLIENT_ID: "t3a6fp5eg0rch9ak3l1c0stv",
      IDENTITY_POOL_ID: "us-east-1:0f0fc34f-91d1-40e5-b7cb-c08234c8323f",
    },
  };
  
  export default config;