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
        '<b>Napa</b> tablet'
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

