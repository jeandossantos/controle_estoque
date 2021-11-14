import { connect } from 'mongoose';

connect('mongodb://localhost:27017/teste')
    .then(() => console.log('Connected on Database...'))
    .catch(e => console.log(e));


