import { describe } from "mocha";
import { expect } from "chai";
import helper from "node-red-node-test-helper";
import authenticationNode from "../src/switchbot-authentication";

helper.init(require.resolve("node-red"));

describe("switchbot-authentication Node", () => {
  beforeEach((done) => {
    helper.startServer(done);
  });

  afterEach((done) => {
    helper.unload();
    helper.stopServer(done);
  });

  it('should be loaded', (done) => {
    const flow = [{ id: "n1", type: "switchbot-authentication", name: "test config" }];
    helper.load(authenticationNode, flow, () => {
      try {
        const n1 = helper.getNode('n1');
        expect(n1.type, 'switchbot-authentication');
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
