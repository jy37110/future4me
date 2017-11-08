
export default class Validator {

    static validateEmail(email){
        let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    static validateName(name){
        return (name.length > 0 && name.length < 20 && isNaN(parseInt(name,10)))
    }

    static validatePsd(psd){
        return (psd.length > 7 && psd.length < 20)
    }
}
