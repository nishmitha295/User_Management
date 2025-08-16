const User = require('../model/userModel');

class UserService {
  async createUser(userData) {
    try {
      return await User.create(userData);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new Error('Email already exists');
      }
      throw new Error(error.message || 'Failed to create user');
    }
  }

  async getAllUsers() {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  }

  async getUserById(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch user');
    }
  }

  async updateUser(id, userData) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error('User not found');
      }
      return await user.update(userData);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new Error('Email already exists');
      }
      throw new Error(error.message || 'Failed to update user');
    }
  }

  async deleteUser(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error('User not found');
      }
      await user.destroy();
      return { message: 'User deleted successfully' };
    } catch (error) {
      throw new Error(error.message || 'Failed to delete user');
    }
  }
}

module.exports = new UserService();
