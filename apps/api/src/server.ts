import app from './app';

const PORT = process.env.API_PORT ? parseInt(process.env.API_PORT, 10) : 3000;

const server = app.listen(PORT, () => {
  console.log(`Announcement Platform API listening on port ${PORT}`);
});

export default server;
