const setup = function (app) {
  app.post('/sinup', async (req, res) => {
    try {
      res.status(200);
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  });
  app.post('/sinin', async (req, res) => {
    try {
      res.status(200);
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  });
  app.get(`/userpage/${userId}/minutes`, async (req, res) => {
    try {
      res.json({
        req
      });
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  });
  app.post(`/userpage/${userId}/minutes`, async (req, res) => {
    try {
      res.status(200);
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  });
  app.put(`/userpage/${userId}/minutes`, async (req, res) => {
    try {
      res.status(200);
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  });
  app.put(`/userpage/${userId}/minutes`, async (req, res) => {
    try {
      res.status(200);
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  });
  app.delete(`/userpage/${userId}/minutes`, async (req, res) => {
    try {
      res.status(200);
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  });
};

module.exports = setup;
