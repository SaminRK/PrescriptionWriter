class SuggestionListProvider {
    static dict = [
        'apple',
        'ball',
        'cat',
        'dog',
        'elephant',
        'fish',
        'goat',
        'hello',
        'icecream',
        'jungle',
        'lion',
        'mouse',
        'north',
    ]

    static provideSuggestion(word) {
        const re = new RegExp(word, 'i');
        let suggestions = [];
        if (word.length > 0)
            suggestions = this.dict.filter(word => re.test(word));
        return suggestions;
    }
}

export default SuggestionListProvider;