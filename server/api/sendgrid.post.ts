export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  console.log("", body);

  const sgRequest = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + config.SENDGRID_API_KEY_MOSTAR_ROCK_SCHOOL,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  }).catch((error) => {
    console.log(error);
    return error;
  });
  return sgRequest;
});
