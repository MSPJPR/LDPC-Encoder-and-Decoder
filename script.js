// Toggle Dark Mode
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// LDPC Encoding Function
function encodeData() {
  const inputData = document.getElementById('inputData').value;
  if (!inputData.match(/^[01]+$/)) {
    alert('Please enter valid binary data (0s and 1s).');
    return;
  }

  const encodedData = ldpcEncode(inputData);
  document.getElementById('encodedOutput').innerText = `Encoded Data: ${encodedData}`;
}

// Simulate Noise Function
function simulateNoise() {
  const errorRate = parseInt(document.getElementById('errorRate').value, 10);
  const encodedData = document.getElementById('encodedOutput').innerText.split(': ')[1];

  if (!encodedData) {
    alert('Please encode the data first.');
    return;
  }

  const noisyData = addNoise(encodedData, errorRate);
  document.getElementById('noisyOutput').innerText = `Noisy Data: ${noisyData}`;
}

// LDPC Decoding Function
function decodeData() {
  const noisyData = document.getElementById('noisyOutput').innerText.split(': ')[1];

  if (!noisyData) {
    alert('Please simulate noise first.');
    return;
  }

  const decodedData = ldpcDecode(noisyData);
  document.getElementById('decodedOutput').innerText = `Decoded Data: ${decodedData}`;
}

// LDPC Encode (Placeholder Function)
function ldpcEncode(data) {
  // Simple parity-check encoding placeholder (for demonstration purposes)
  const parity = data.split('').reduce((acc, bit) => acc ^ parseInt(bit), 0);
  return data + parity;
}

// Add Noise to Data
function addNoise(data, errorRate) {
  return data.split('').map(bit => {
    return Math.random() * 100 < errorRate ? (bit === '0' ? '1' : '0') : bit;
  }).join('');
}

// LDPC Decode (Placeholder Function)
function ldpcDecode(data) {
  // Placeholder for decoding (returns the data as-is)
  return data.slice(0, -1);
}
