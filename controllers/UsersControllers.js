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


//change Number

export const ChangeNumber = async (req, res) => {
    try {
        const { number ,id,pin} = req.body;

        if(!number) return res.send("number is required.")
        const changeNum = await Users.findByIdAndUpdate({ _id: id, pin },{ number });
        await changeNum.save();
        return res.send("number is updated.")

    } catch (error) {

        return res.send(error, "error here")
    }
}



//change email

export const ChangeEmail = async (req, res) => {
    try {
        const { email ,id,pin} = req.body;

        if(!email) return res.send("number is required.")
        const changeEmail = await Users.findByIdAndUpdate({ _id: id, pin },{ email });
        await changeEmail.save();
        return res.send("Email is updated.")

    } catch (error) {

        return res.send(error, "error here")
    }
}



//change address

export const ChangeAddress = async (req, res) => {
    try {
        const { address ,id,pin} = req.body;

        if(!address) return res.send("number is required.")
        const changeAddress = await Users.findByIdAndUpdate({ _id: id, pin },{ address });
        await changeAddress.save();
        return res.send("Address is updated.")

    } catch (error) {

        return res.send(error, "error here")
    }
}


//change Pan Number

export const ChangePanNumber = async (req, res) => {
    try {
        const { panNumber ,id,pin} = req.body;

        if(!panNumber) return res.send("number is required.")
        const changePanNumber = await Users.findByIdAndUpdate({ _id: id, pin },{ panNumber });
        await changePanNumber.save();
        return res.send("Pan number is updated.")

    } catch (error) {

        return res.send(error, "error here")
    }
}