# ml-integration

**Machine Learning Integration Package for JavaScript**

This package provides a simple machine learning integration in JavaScript for sentiment analysis using the `natural` library.

## Installation

Before using the package, make sure to install the required dependencies:

```bash
npm install natural

const SentimentAnalyzer = require('ml-integration');

// Create an instance of SentimentAnalyzer
const sentimentAnalyzer = new SentimentAnalyzer();

// Training data (for simplicity, you can provide more extensive training data)
const trainingData = [
  { text: 'I love this product', label: 'positive' },
  { text: 'This is terrible', label: 'negative' },
  // Add more training data...
];

// Train the model
sentimentAnalyzer.train(trainingData);

// Test the model
const testText = 'I really like this package';
const prediction = sentimentAnalyzer.predict(testText);

console.log(`Sentiment prediction for "${testText}": ${prediction}`);
