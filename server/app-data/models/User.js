import { AuthenticationError } from 'apollo-server-errors';
import mongoose from 'mongoose';
import { hash, compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { SESSION_NAME, JWT_SECRET } from '../config';

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    validate: {
      validator: email => User.doesNotExist({ email }),
      message: ({ value: email }) => `Email ${email} has already been taken`,
    },
  },
  username: {
    type: String,
    validate: {
      validator: username => User.doesNotExist({ username }),
      message: ({ value: username }) => `Username ${username} has already been taken`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    minLength: 1,
    maxLength: 30,
  },
  lastName: {
    type: String,
    minLength: 1,
    maxLength: 150,
  },
  avatarUrl: {
    type: String,
  },
  dateJoined: {
    type: Date,
    required: true,
    default: Date.now,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['User', 'Supplier', 'Administrator'],
  },
}, {
  timestamps: true,
});

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await hash(this.password, 10);
  }
});

userSchema.statics.doesNotExist = async function (options) {
  return await this.where(options)
    .countDocuments() === 0;
};

userSchema.methods.matchesPassword = function (password) {
  return compare(password, this.password);
};

userSchema.statics.attemptSignIn = async function (email, password) {
  const message = 'Incorrect email or password. Please try again';
  const user = await User.findOne({ email });
  if (!user) {
    throw new AuthenticationError(message);
  }

  if (!await user.matchesPassword(password)) {
    throw new AuthenticationError(message);
  }

  return user;
};

const verifyToken = token => jwt.verify(token, JWT_SECRET);

userSchema.statics.ensureSignedIn = (token) => {
  if (!token) {
    throw new AuthenticationError('You must be signed in');
  }
  const verified = verifyToken(token);
  if (!verified) {
    throw new AuthenticationError('You must be signed in');
  }
  return verified;
};

userSchema.statics.ensureSignedOut = (token) => {
  if (token && verifyToken(token)) {
    throw new AuthenticationError('You are already signed in.');
  }
};

userSchema.statics.signOut = (req, res) => new Promise(
  (resolve, reject) => {
    req.session.destroy((err) => {
      if (err) reject(err);

      res.clearCookie(SESSION_NAME);
      resolve(true);
    });
  },
);


const User = mongoose.model('User', userSchema);
export default User;
