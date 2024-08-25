exports.handlePostRequest = (req, res) => {
    const { data } = req.body;
    const user_id = 'arjun_tm_04072003';
    const email = 'arjunqwerty4703@gmail.com';
    const roll_number = '21BRS1121';

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length ? [lowercaseAlphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
};

exports.handleGetRequest = (req, res) => {
    res.json({ operation_code: 1 });
};
