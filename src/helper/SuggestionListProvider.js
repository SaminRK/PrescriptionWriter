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

    static provideSuggestion(string) {
        let suggestions = [];
        const cleanString = string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');

        if (cleanString.length > 0){
            const re = new RegExp(cleanString, 'i');
            suggestions = this.dict.filter(word => re.test(word));
        }
        return suggestions;
    }
}

export default SuggestionListProvider;