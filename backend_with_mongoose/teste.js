const mongoose = require('mongoose');

main().catch(e => console.log(e));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');

    const KittySchema = new mongoose.Schema({
        name: String
    });

    KittySchema.methods.speak = function speak() {
        const greeting = this.name ? "Meow name is " + this.name : "I don't have name";

        console.log(greeting);
    }

    const Kitten = mongoose.model('Kitten', KittySchema);

    const silence = new Kitten({ name: 'Silence' });
    silence.save();

    const fuffly = new Kitten({ name: 'Fuffly' });

    await fuffly.save();
    fuffly.speak();

    const kittens = await Kitten.find();

    console.log(kittens);
}