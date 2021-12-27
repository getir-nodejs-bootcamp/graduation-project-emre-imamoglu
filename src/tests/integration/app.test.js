const request = require("supertest");
const { app } = require("../../app");

describe("Test the records path", () => {
  test("Test POST method with right data", (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2016-01-26",
        endDate: "2018-02-02",
        minCount: 750,
        maxCount: 3500,
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.code).toBe(0);
        expect(response.body.records).toBeDefined(); // Check if data field exists even though array is empty
        done();
      });
  });
  test("Test POST method when data's end date is less than start date", (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2016-01-26",
        endDate: "2014-02-02",
        minCount: 0,
        maxCount: 5000,
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
        expect(response.body.code).toBe(400);
        expect(response.body.details).toBeDefined();
        done();
      });
  });

  test("Test POST method when data's minCount field is given a string", (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2016-01-26",
        endDate: "2018-02-02",
        minCount: "string",
        maxCount: 5000,
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
        expect(response.body.code).toBe(400);
        expect(response.body.details).toBeDefined();
        done();
      });
  });
  test("Test POST method when data's startDate field is given a number", (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: 123,
        endDate: "2018-02-02",
        minCount: 100,
        maxCount: 2200,
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
        expect(response.body.code).toBe(400);
        expect(response.body.details).toBeDefined();
        done();
      });
  });
  test("Test POST method when data's endDate field is given a wrong formatted string", (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2016-02-02",
        endDate: "26.09.2021",
        minCount: 1200,
        maxCount: 3000,
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
        expect(response.body.code).toBe(400);
        expect(response.body.details).toBeDefined();
        done();
      });
  });
});

describe("Test some paths that does not exist", () => {
  test("Send a POST request to /api/datas that does not exist", (done) => {
    request(app)
      .post("/api/datas")
      .send({
        startDate: "2016-02-02",
        endDate: "26.09.2021",
        minCount: 1200,
        maxCount: 3000,
      })
      .then((response) => {
        expect(response.statusCode).toBe(404);
        expect(response.body.code).toBe(404);
        expect(response.body.details).toBeDefined();
        done();
      });
  });

  test("Send a GET request to /location that does not exist", (done) => {
    request(app)
      .get("/location")
      .then((response) => {
        expect(response.statusCode).toBe(404);
        expect(response.body.code).toBe(404);
        expect(response.body.details).toBeDefined();
        done();
      });
  });

  test("Send a GET request to /getir that does not exist", (done) => {
    request(app)
      .get("/location")
      .then((response) => {
        expect(response.statusCode).toBe(404);
        expect(response.body.code).toBe(404);
        expect(response.body.details).toBeDefined();
        done();
      });
  });
});
