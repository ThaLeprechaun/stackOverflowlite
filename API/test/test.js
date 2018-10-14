const chai = require("chai");
const app = require("../app");
const request = require("supertest");

const expect = chai.expect;

const should = chai.should();
require("should-http");

describe("/GET all questions", () => {
  it("should return all questions", (done) => {
    request(app)
      .get("/api/v1/questions")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  })
});
describe("/GET a single question", () => {
  it("should return a single question", (done) => {
    request(app)
      .get("/api/v1/questions/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  })
});
describe("/POST a question", () => {
  it("should create a new question", (done) => {
    request(app)
      .post("/api/v1/questions")
      .send({
        "id": 7,
        "title": "What is a function",
        "description": "I just want to know what functions are all about",
        "answer": []
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  })
});
describe("/POST an answer to a question", () => {
  it("should create an answer", (done) => {
    request(app)
      .post("/api/v1/questions/1/answer")
      .send({
        "answer": ["blah blah blah bue 2"]
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  })
});
describe("/DELETE a question", () => {
  it("should delete a question", (done) => {
    request(app)
      .delete("/api/v1/questions/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  })
});
