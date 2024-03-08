// ml-integration.js

const natural = require('natural');

class SentimentAnalyzer {
  constructor() {
    this.classifier = new natural.BayesClassifier();
  }

  train(data) {
    data.forEach(item => this.classifier.addDocument(item.text, item.label));
    this.classifier.train();
  }

  predict(text) {
    return this.classifier.classify(text);
  }
}

module.exports = SentimentAnalyzer;

// Example usage of the ml-integration package

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
