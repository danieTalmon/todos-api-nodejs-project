const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
  text : {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed :{
    type: Boolean,
    default: false
  },
  completedAt:{
    type : Number,
    default : null
  }
});

// var newTodo = new Todo ({
//   text : 'cook dinner'
// });
//
// newTodo.save().then((doc) =>{
//   console.log('save todo',doc);
// },(e) =>{
// console.log(e);
// }
// );

// var otherTodo = new Todo({
//   text: '',
// });
//
// otherTodo.save().then((doc) =>{
//   console.log('save todo',doc);
// },(e) =>{
// console.log('unabled to save',e);
// }
// );

var User = mongoose.model('user',{
  email:{
    type: String,
    trim: true,
    required: true,
    minlength: 1
  }
});

var newUser = new User({
  email:"        dani@gmail.com"
});

newUser.save().then((doc) =>{
   console.log('save todo',doc);
 },(e) =>{
 console.log('unabled to save',e);
 });
