const { UnauthorizedError } = require("../utils/errors");

class User {
  static async login(credentials) {
    throw new UnauthorizedError("Invalid Username/Password combination");
  }
  static async register(credentials) {}
}
