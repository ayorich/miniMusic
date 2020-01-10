export const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
        return true;
    }


    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
}


export const timeFormatter = (time)=> {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    function str_pad_left(string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }
    return  str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
    
}


export const titleTrimmer = (title, limit=100) => {
    const titleSplit = title.split('(')[0];

    const newTitle = [];
    if (titleSplit.length > limit) {
        titleSplit.split(' ').reduce((sum, cur) => {
            if (sum + cur.length <= limit) {
                newTitle.push(cur);
            }
            return sum + cur.length;
        }, 0);

        // return the result
        return `${newTitle.join(' ')} ...`;
    }
    return titleSplit;
}