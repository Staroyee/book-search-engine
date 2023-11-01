const { AuthenticationError, signToken } = require("../utils/auth");
const { Book, User } = require("../models");

const resolvers = {
  Query: {
    me: async (_, __, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).select("-__v -password");
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { user, token };
    },
  },
};

module.exports = resolvers;
