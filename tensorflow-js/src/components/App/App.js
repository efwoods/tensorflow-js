import "./App.css";

function App() {
  const tf = require("@tensorflow/tfjs");

  const model = tf.sequential();
  model.add(
    tf.layers.dense({ units: 100, activation: "relu", inputShape: [10] })
  );
  model.add(tf.layers.dense({ units: 1, activation: "linear" }));
  model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

  const xs = tf.randomNormal([100, 10]);
  const ys = tf.randomNormal([100, 1]);

  // Train the model
  model.fit(xs, ys, {
    epochs: 100,
    callbacks: {
      onEpochEnd: (epoch, log) =>
        console.log(`Epoch $(epoch): loss = ${log.loss}`),
    },
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
