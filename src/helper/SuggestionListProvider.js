class SuggestionListProvider {
    static dict = [
        'Ace Plus®',
        'Ace®',
        'Ace® Power',
        'Acetram®',
        'Adryl®',
        'Afun®',
        'Ambrox®',
        'Amodis®',
        'Angilock®',
        'Angilock® plus',
        'Napa tablet\n\t\t1+0+1' // does not display on suggestion box but writer on editor
    ]

    static provideSuggestion(string) {
        return this.wordsHavingRegexInside(string);
    }

    static wordsStartingWith(string) {
        return [];
    }

    static wordsHavingRegexInside(string) {
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

