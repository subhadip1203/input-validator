validator_type = {

    isNumeric : function (input) {
        for (i = 0, len = input.length; i < len; i++) {
            if (!(input.charCodeAt(i) > 47 && input.charCodeAt(i) < 58)) {
                return false;
            }
        }
        return true;
    },

    isAlpha : function (input) {
        for (i = 0, len = input.length; i < len; i++) {
            if (!(input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91) && !(input.charCodeAt(i) > 96 && input.charCodeAt(i) < 123)) {
                return false;
            }
        }
        return true;
    },

    isAlphaSpace : function (input) {
        for (i = 0, len = input.length; i < len; i++) {
            if (!(input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91) && !(input.charCodeAt(i) > 96 && input.charCodeAt(i) < 123) && !(input.charCodeAt(i) == 32)) {
                return false;
            }
        }
        return true;
    },

    isEmail : function(input){
        const Email_validator_regex= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z\.]{2,12})$/
        if(Email_validator_regex.test(input) == false){
            return false;
        }
        return true;
    },

    isDateTime : function(input){        
        if(isNaN(Date.parse(input)) || Date.parse(input) < 0 ){
            return false;
        }
        return true;
    },

}




module.exports = validator_type;