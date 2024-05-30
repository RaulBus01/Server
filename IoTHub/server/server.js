const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { createClient } = require('@deepgram/sdk');

const {HOST,PORT,IO_PORT,shaKey,apiKey,QUEUE_CoNNECTION_STRING } = require('./serverconfig');

const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();

const http = require('http'); 



const { ServiceBusClient } = require('@azure/service-bus');
const { time } = require('console');
const connectionString = QUEUE_CoNNECTION_STRING;
const queueName = 'sensor-readings';
const sbClient = new ServiceBusClient(connectionString);
const receiver = sbClient.createReceiver(queueName);



app.use(cors());
app.use(express.json({ limit: '50mb' }));
const upload = multer({ dest: 'uploads/' });
app.post('/transcribe', upload.single('audio'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Audio file is required' });
    }

    const filePath = path.join(__dirname, req.file.path);
    const deepgramApiKey = apiKey  // Replace with your actual API key
    const deepgram = createClient(deepgramApiKey);

    try {
        const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
            fs.createReadStream(filePath),
            { punctuate: true, model: 'nova-2', language: 'en-US' }
        );


        if (error) {
            console.error('Deepgram error:', error);
            return res.status(500).json({ error });
        }

        
        fs.unlinkSync(filePath);
        return res.json(result);
    } catch (error) {
        console.error('Error processing transcription:', error);
        fs.unlinkSync(filePath); 
        return res.status(500).json({ error: error.message });
    }
});
app.post('/invokeMethod', async (req, res) => {
    const { targetDevice, methodName, payload } = req.body;
  
    let data = JSON.stringify({
      "methodName": methodName,
      "responseTimeoutInSeconds": 200,
      "payload": payload
    });
  
    let config = {
      method: 'post',
      url: `https://iothubbuscrisan.azure-devices.net/twins/${targetDevice}/methods?api-version=2021-04-12`,
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': shaKey
      },
      data : data
    };
  
    try {
      const response = await axios.request(config);
     
        
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error invoking IoT Hub method' });
    }
  });


const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",  // Allow all origins

  }
});
server.listen(IO_PORT);
io.on('connection', (socket) => {
  console.log('Client connected');


});
receiver.subscribe({
  processMessage: async (message) => {
      
     
     
      const replace = message.body.toString().replace(/'/g, "\"");
      const parsedBody = JSON.parse(replace);
  
    
      const messageBody = {
          gas: parsedBody.gas,
          co2: parsedBody.co2,
          tvoc: parsedBody.tvoc,
          temperature: parsedBody.temp,
          humidity: parsedBody.hum,
          timestamp: parsedBody.timestamp
      }
      console.log(messageBody);
      io.emit('sensorReadings', messageBody);

  },
  processError: async (err) => {
      console.error('Error receiving Service Bus message:', err);
  }
});



app.listen(PORT,HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
