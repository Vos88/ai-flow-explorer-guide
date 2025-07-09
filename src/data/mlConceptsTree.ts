
export interface MLConcept {
  id: string;
  title: string;
  description: string;
  color: string;
  codeExample?: string;
  externalLinks?: Array<{ title: string; url: string }>;
  children?: MLConcept[];
}

export const mlConceptsTree: MLConcept = {
  id: "ai",
  title: "Artificial Intelligence",
  description: "The simulation of human intelligence in machines that are programmed to think and learn like humans.",
  color: "#6366f1", // indigo
  children: [
    {
      id: "ml",
      title: "Machine Learning",
      description: "A subset of AI that enables computers to learn and improve from experience without being explicitly programmed.",
      color: "#8b5cf6", // violet
      codeExample: `# Basic ML workflow
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)`,
      children: [
        {
          id: "supervised",
          title: "Supervised Learning",
          description: "Learning with labeled training data to make predictions on new, unseen data.",
          color: "#f97316", // orange
          children: [
            {
              id: "regression",
              title: "Regression",
              description: "Predicting continuous numerical values.",
              color: "#fb923c", // orange-400
              children: [
                {
                  id: "linear-regression",
                  title: "Linear Regression",
                  description: "Models the relationship between variables using a linear equation.",
                  color: "#fed7aa", // orange-200
                  codeExample: `from sklearn.linear_model import LinearRegression
import numpy as np

# Create and fit model
model = LinearRegression()
model.fit(X, y)

# Make predictions
predictions = model.predict(X_new)`
                },
                {
                  id: "polynomial",
                  title: "Polynomial Regression",
                  description: "Extends linear regression by adding polynomial terms to capture non-linear relationships.",
                  color: "#fed7aa", // orange-200
                },
                {
                  id: "ridge",
                  title: "Ridge Regression",
                  description: "Linear regression with L2 regularization to prevent overfitting.",
                  color: "#fed7aa", // orange-200
                },
                {
                  id: "lasso",
                  title: "Lasso Regression",
                  description: "Linear regression with L1 regularization for feature selection.",
                  color: "#fed7aa", // orange-200
                }
              ]
            },
            {
              id: "classification",
              title: "Classification",
              description: "Predicting discrete categories or classes.",
              color: "#fb923c", // orange-400
              children: [
                {
                  id: "logistic-regression",
                  title: "Logistic Regression",
                  description: "Uses logistic function to model the probability of class membership.",
                  color: "#fed7aa", // orange-200
                },
                {
                  id: "svm",
                  title: "Support Vector Machines",
                  description: "Finds optimal boundary between classes using support vectors.",
                  color: "#fed7aa", // orange-200
                },
                {
                  id: "random-forest",
                  title: "Random Forest",
                  description: "Ensemble method combining multiple decision trees.",
                  color: "#fed7aa", // orange-200
                }
              ]
            }
          ]
        },
        {
          id: "unsupervised",
          title: "Unsupervised Learning",
          description: "Finding hidden patterns in data without labeled examples.",
          color: "#ec4899", // pink
          children: [
            {
              id: "clustering",
              title: "Clustering",
              description: "Grouping similar data points together.",
              color: "#f472b6", // pink-400
              children: [
                {
                  id: "kmeans",
                  title: "K-Means",
                  description: "Partitions data into k clusters based on similarity.",
                  color: "#fce7f3", // pink-100
                  codeExample: `from sklearn.cluster import KMeans

# Create and fit model
kmeans = KMeans(n_clusters=3)
clusters = kmeans.fit_predict(X)

# Get cluster centers
centers = kmeans.cluster_centers_`
                },
                {
                  id: "hierarchical",
                  title: "Hierarchical Clustering",
                  description: "Creates tree-like cluster structures.",
                  color: "#fce7f3", // pink-100
                }
              ]
            },
            {
              id: "dimensionality-reduction",
              title: "Dimensionality Reduction",
              description: "Reducing the number of features while preserving important information.",
              color: "#f472b6", // pink-400
              children: [
                {
                  id: "pca",
                  title: "Principal Component Analysis",
                  description: "Projects data onto lower-dimensional space using principal components.",
                  color: "#fce7f3", // pink-100
                },
                {
                  id: "tsne",
                  title: "t-SNE",
                  description: "Non-linear dimensionality reduction for visualization.",
                  color: "#fce7f3", // pink-100
                }
              ]
            }
          ]
        },
        {
          id: "reinforcement",
          title: "Reinforcement Learning",
          description: "Learning through interaction with environment via rewards and penalties.",
          color: "#10b981", // emerald
          children: [
            {
              id: "q-learning",
              title: "Q-Learning",
              description: "Model-free method that learns the quality of actions.",
              color: "#34d399", // emerald-400
            },
            {
              id: "policy-gradient",
              title: "Policy Gradient",
              description: "Directly optimizes the policy function.",
              color: "#34d399", // emerald-400
            }
          ]
        }
      ]
    },
    {
      id: "neural-networks",
      title: "Neural Networks",
      description: "Computing systems inspired by biological neural networks, capable of learning complex patterns.",
      color: "#3b82f6", // blue
      codeExample: `import tensorflow as tf

# Simple neural network
model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(10, activation='softmax')
])

model.compile(optimizer='adam', loss='categorical_crossentropy')`,
      children: [
        {
          id: "deep-learning",
          title: "Deep Learning",
          description: "Neural networks with multiple hidden layers for learning complex representations.",
          color: "#1d4ed8", // blue-700
          children: [
            {
              id: "cnn",
              title: "Convolutional Neural Networks",
              description: "Specialized for processing grid-like data such as images.",
              color: "#93c5fd", // blue-300
              codeExample: `import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D((2, 2)),
    tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(10, activation='softmax')
])`
            },
            {
              id: "rnn",
              title: "Recurrent Neural Networks",
              description: "Networks with memory, ideal for sequential data like text and time series.",
              color: "#93c5fd", // blue-300
            },
            {
              id: "transformer",
              title: "Transformers",
              description: "Attention-based models that revolutionized natural language processing.",
              color: "#93c5fd", // blue-300
            }
          ]
        }
      ]
    },
    {
      id: "nlp",
      title: "Natural Language Processing",
      description: "Enabling computers to understand, interpret, and generate human language.",
      color: "#059669", // emerald-600
      children: [
        {
          id: "text-processing",
          title: "Text Processing",
          description: "Preparing and cleaning text data for analysis.",
          color: "#6ee7b7", // emerald-300
        },
        {
          id: "sentiment-analysis",
          title: "Sentiment Analysis",
          description: "Determining emotional tone and opinions in text.",
          color: "#6ee7b7", // emerald-300
        },
        {
          id: "llm",
          title: "Large Language Models",
          description: "Massive neural networks trained on vast amounts of text data.",
          color: "#6ee7b7", // emerald-300
        }
      ]
    },
    {
      id: "computer-vision",
      title: "Computer Vision",
      description: "Enabling computers to interpret and understand visual information from the world.",
      color: "#dc2626", // red-600
      children: [
        {
          id: "image-classification",
          title: "Image Classification",
          description: "Categorizing images into predefined classes.",
          color: "#fca5a5", // red-300
        },
        {
          id: "object-detection",
          title: "Object Detection",
          description: "Identifying and locating objects within images.",
          color: "#fca5a5", // red-300
        },
        {
          id: "image-segmentation",
          title: "Image Segmentation",
          description: "Partitioning images into meaningful segments.",
          color: "#fca5a5", // red-300
        }
      ]
    }
  ]
};
