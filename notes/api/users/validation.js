const { error } = require('../../config').status;
const { send, message } = require('../helper');

const controller = require('./controller');

module.exports = {
  user: (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
      send(res, error.inp, { message: message.noUsernameNoPass });
      return;
    }

    next();
  },
  // id: (req, res, next) => {
  //   const { id } = req.params;

  //   controller
  //     .requestBy(req.params.id)
  //     .then(note => {
  //       if (!note) {
  //         send(res, error.miss, {
  //           message: message.requestIdError,
  //           note: note,
  //         });

  //         return;
  //       }

  //       req.note = note;
  //       next();
  //     })
  //     .catch(err => send(res, error.server, message.requestIdServerError, err));
  // },
  // update: (req, res, next) => {
  //   const { title, content } = req.body;

  //   if (!title && !content) {
  //     send(res, error.inp, { message: message.noTitleNoText });
  //     return;
  //   }

  //   next();
  // },
};