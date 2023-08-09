import app from "./main";

/**
 * Server activation
 */
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});
