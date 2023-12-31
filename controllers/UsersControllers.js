import Users from "../modals/UsersModal.js";
import encrypt from 'encryptjs';


export const register = async (req, res) => {
    try {
        const { name, email, password, pin, number, address, panNumber } = req.body;

        var secretkey = 'ios';
        var plaintext = password;
        var plainPin = pin;
        var cipherText = encrypt.encrypt(plaintext, secretkey, 256);
        var cipherPin = encrypt.encrypt(plainPin, secretkey, 256);
        const user = new Users({ name, email, password: cipherText, pin: cipherPin, number, address, panNumber })
        await user.save();
        return res.send("Resgistration Succesfull.")

    } catch (error) {
        return res.send(error)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) return res.send("email is required")
        if (!password) return res.send("password is required")
        const user = await Users.find({ email: email }).exec();
        console.log(user, "user here");
        var secretkey = 'ios';
        var decipherPassword = encrypt.decrypt(user[0].password, secretkey, 256);
        console.log("decipher pass" + decipherPassword);

        if (!user.length) return res.send("User not found")
        
        if (decipherPassword === password) {
            return res.send("logged in")
        } else {
            return res.send("wrong password")
        }


    } catch (error) {
        res.send(error)
    }
}

//change Number

export const ChangeNumber = async (req, res) => {
    try {
        const { number, id, pin } = req.body;

        if (!number) return res.send("number is required.")
        const changeNum = await Users.findByIdAndUpdate({ _id: id, pin }, { number });
        await changeNum.save();
        return res.send("number is updated.")

    } catch (error) {

        return res.send(error, "error here")
    }
}



//change email

export const ChangeEmail = async (req, res) => {
    try {
        const { email, id, pin } = req.body;

        if (!email) return res.send("Email is required.")
        const changeEmail = await Users.findByIdAndUpdate({ _id: id, pin }, { email });
        await changeEmail.save();
        return res.send("Email is updated.")

    } catch (error) {

        return res.send(error, "error here")
    }
}



//change address

export const ChangeAddress = async (req, res) => {
    try {
        const { address, id, pin } = req.body;

        if (!address) return res.send("Address is required.")
        const changeAddress = await Users.findByIdAndUpdate({ _id: id, pin }, { address });
        await changeAddress.save();
        return res.send("Address is updated.")

    } catch (error) {

        return res.send(error, "error here")
    }
}


//change Pan Number

export const ChangePanNumber = async (req, res) => {
    try {
        const { panNumber, id, pin } = req.body;

        if (!panNumber) return res.send("PAN number is required.")
        const changePanNumber = await Users.findByIdAndUpdate({ _id: id, pin }, { panNumber });
        await changePanNumber.save();
        return res.send("Pan number is updated.")

    } catch (error) {

        return res.send(error, "error here")
    }
}



//change Name

export const ChangeName = async (req, res) => {
    try {
        const { name, id, pin } = req.body;

        if (!name) return res.send("Name is required.")
        const changeName = await Users.findByIdAndUpdate({ _id: id, pin }, { name });
        await changeName.save();
        return res.send("Name is updated.")

    } catch (error) {

        return res.send(error, "error here")
    }
}



//change Password

export const ChangePassword = async (req, res) => {
    try {
        const { password, id, pin } = req.body;

        if (!password) return res.send("Password is required.")
        const changePassword = await Users.findByIdAndUpdate({ _id: id, pin }, { password });
        await changePassword.save();
        return res.send("Password is updated.")

    } catch (error) {

        return res.send(error, "error here")
    }
}