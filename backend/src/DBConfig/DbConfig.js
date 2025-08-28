const mongoose = require("mongoose")



async function ConnectDB() {
    mongoose.connect("mongodb://127.0.0.1:27017/NarutoTodo")
        .then(() => console.log("✅ MongoDB Connected"))
        .catch(err => console.error("❌ MongoDB Connection Error:", err));
}

module.exports = ConnectDB;


/*
❌ MongoDB Connection Error: MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
    at _handleConnectionErrors (D:\KUMAR\Codings\Projects\MERN\Todo Using MERN\backend\node_modules\mongoose\lib\connection.js:1165:11)
    at NativeConnection.openUri (D:\KUMAR\Codings\Projects\MERN\Todo Using MERN\backend\node_modules\mongoose\lib\connection.js:1096:11)
    at runNextTicks (node:internal/process/task_queues:60:5)
    at listOnTimeout (node:internal/timers:540:9)
    at process.processTimers (node:internal/timers:514:7) {
  errorLabelSet: Set(0) {},
  reason: TopologyDescription {
    type: 'Unknown',
    servers: Map(1) { '127.0.0.1:27017' => [ServerDescription] },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: null,
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  },
  code: undefined,
  cause: TopologyDescription {
    type: 'Unknown',
    servers: Map(1) { '127.0.0.1:27017' => [ServerDescription] },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: null,
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  }
}
  */