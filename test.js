// use the path of your model 
const User = require('./models/userAuthModel');
const Post=require('./models/mypost');
const UserInfo=require('./models/userInfo');
const mongoose = require('mongoose');
// use the new name of the database 
const url = 'mongodb://127.0.0.1:27017/locogram';
beforeAll(async () => { await mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true }); });

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Testing insert user schema', () => {
    // the code below is for insert testing     
    var id = "";
    it('Add users', () => {
        const user =
        {
            'username': 'mrlamsal',
            'name': 'Sagar lamsal',
            'email': 'mr.sagarlamsal@gmail.com',
            "password": "pass1234"
        };
        return User.create(user).then((user_res) => {
            id = user_res._id;
            expect(user_res.username).toEqual('mrlamsal');
        });
    });

    it('Update Users', async () => {

        return User.findOneAndUpdate(id,
            { $set: { email: 'lamsals@gmail.com' } }, { new: true }).then((ures) => {
                expect(ures.email).toEqual('lamsals@gmail.com')
            })
    });

    it('Update User Information', async () => {

        return UserInfo.findOneAndUpdate(id,
            { $set: { short_desc: 'I am goood boy' } }, { new: true }).then((ures) => {
                expect(ures.short_desc).toEqual('I am goood boy')
            })
    });
    // the code below is for delete testing     
    it('Delete Users', async () => {
        const status = await User.deleteMany();
        expect(status.ok).toBe(1);
    });
    it('Delete Post', async () => {
        const status = await Post.deleteMany();
        expect(status.ok).toBe(1);
    });
  


})