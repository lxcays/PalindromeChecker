function isPalindrome(text) {
    const notEven = text.length % 2 === 0 ? 0 : 0.5; 
    const firstHalf = text.slice(0, (text.length / 2) + notEven).toString();
    const secondHalf = text.slice(text.length / 2, text.length).toString().split("")
        .reverse()
        .join("");
    const cleanText = text.replace(/([^\s\w])|(?:\s)/g, "");
    const notEvenClean = cleanText.length % 2 === 0 ? 0 : 0.5;
    const firstHalfC = cleanText.slice(0, (cleanText.length / 2) + notEvenClean).toLowerCase();
    const secondHalfC = cleanText.slice(cleanText.length / 2, cleanText.length).toString().split("")
        .reverse()
        .join("")
        .toLowerCase();
    if (firstHalf === secondHalf | firstHalfC === secondHalfC) {
        return true;
    } else {
        return false;
    }
}
