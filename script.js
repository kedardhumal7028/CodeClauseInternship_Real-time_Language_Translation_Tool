async function translateText() {
    const sourceText = document.getElementById('sourceText').value;
    const languageCode = document.getElementById('languageSelect').value;
    const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your Google Cloud Translation API key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${encodeURIComponent(sourceText)}&target=${languageCode}`;

    try {
        const response = await fetch(url, { method: 'POST' });
        const data = await response.json();
        const translation = data.data.translations[0].translatedText;
        document.getElementById('translationResult').innerText = translation; 
    } catch (error) {
        console.error('Translation error:', error);
        document.getElementById('translationResult').innerText = 'Translation failed.'; 
    }
}
